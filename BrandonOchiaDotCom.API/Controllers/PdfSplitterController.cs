namespace BrandonOchiaDotCom.API.Controllers
{
    using BrandonOchiaDotCom.API.Constants;
    using BrandonOchiaDotCom.API.Controllers.Base;
    using BrandonOchiaDotCom.Domain.DTOs;
    using Microsoft.AspNetCore.Mvc;
    using PDFTools.Models;
    using PDFTools.Services;
    using PDFTools.Services.Interfaces;
    using System.IO.Compression;

    public class PdfSplitterController : BaseApiController<PdfSplitterController>
    {
        private readonly IMemoryPdfSplitter pdfSplitter;
        private const string UnkownError = "Ooops, something went wrong...";

        public PdfSplitterController(ILogger<PdfSplitterController> logger) : base(logger)
        {
            ISplitRangeParser splitRangeParser = new SplitRangeParser();
            this.pdfSplitter = new MemoryPdfSplitter(splitRangeParser);
        }

        [HttpPost]
        [Route("split/{splitType}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(BodyScaleDataPointDto))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Split(int splitType, [FromQuery] string inputRangeOrInterval, IList<IFormFile> files)
        {
            // guard clauses
            if (splitType != (int)SplitTypes.Range && splitType != (int)SplitTypes.Interval)
            {
                return BadRequest($"Incorrect value for {nameof(splitType)} - must either be {SplitTypes.Range} or {SplitTypes.Interval}.");
            }

            if (string.IsNullOrWhiteSpace(inputRangeOrInterval))
            {
                return BadRequest($"{nameof(inputRangeOrInterval)} cannot be null or whitespace.");
            }

            if (files.Count() < 1)
            {
                return BadRequest("No file uploaded.");
            }

            if (files.Count() > 1)
            {
                return BadRequest("Cannot upload more than 1 file.");
            }

            // main logic
            IFormFile formFile = files[0];

            using (Stream fileStream = formFile.OpenReadStream())
            {
                Attempt<IEnumerable<Stream>> splitAttempt;

                if (splitType == (int)SplitTypes.Range)
                {
                    splitAttempt = this.pdfSplitter.SplitByRanges(fileStream, inputRangeOrInterval);
                }
                else
                {
                    splitAttempt = this.pdfSplitter.SplitByInterval(fileStream, int.Parse(inputRangeOrInterval));
                }

                if (splitAttempt == null)
                {
                    return Problem(UnkownError);
                }

                if (!splitAttempt.Success)
                {
                    return Problem(splitAttempt.ErrorMessage);
                }

                return ZipFilesTogether(splitAttempt.Data);
            }
        }

        private FileContentResult ZipFilesTogether(IEnumerable<Stream> fileStreams)
        {
            // Create a memory stream to hold the zip file
            using (var memoryStream = new MemoryStream())
            {
                // Create a new Zip archive in the memory stream
                using (var zipArchive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
                {
                    // Iterate through the IEnumerable<Stream>
                    int i = 1;
                    foreach (Stream fileStream in fileStreams)
                    {
                        //TODO: use the name from the file uploaded to create the name for this.
                        // Create a new entry for each stream in the zip archive
                        var zipEntry = zipArchive.CreateEntry($"SpliResult_{i}.pdf");

                        // Copy the contents of the stream into the zip entry
                        using (var entryStream = zipEntry.Open())
                        {
                            fileStream.CopyTo(entryStream);
                        }

                        i++;
                    }

                    // Return the zip file
                    return File(memoryStream.ToArray(), "application/zip", "SplitPDFs.zip");
                }
            }
        }
    }
}
