
import styles from './PdfSplitter.module.css';

// This is the presentation componennt.
function PdfSplitter({ selectedOption, fileRef, inputRangeOrInterval, selectChangeHandler, inputChangeHandler, submitToApiHandler }) {

    let inputLabelText;
    let inputPlaceholderText;
    let inputHtml;

    if (selectedOption) {
        if (selectedOption === "1") {
            // range option
            inputLabelText = 'Put the page ranges you want here:';
            inputPlaceholderText = 'Ex: 1,5-10,12...';
        } else if (selectedOption === "2") {
            inputLabelText = 'Put the interval you want to use here:';
            inputPlaceholderText = 'Ex: 3';
        }

        //TODO: make it so interval can only be a number input.
        inputHtml = (
            <div className={styles.formStyle}>
                <label><b>{inputLabelText}</b></label>
                <input class="form-control" type='text' placeholder={inputPlaceholderText} onChange={inputChangeHandler} value={inputRangeOrInterval}></input>
                <button class="btn btn-primary" onClick={submitToApiHandler} disabled={!selectedOption}>Split PDF</button>
            </div>
        );
    }

    return (
        <div>
            <h1>PDF Splitter</h1>
            <p>
                The back-end for this page utilizes a PDF processor nuget package that I created and deployed myself.
                The package is called "PDFTools.SplitMerge"" and allows for splitting/merging PDFs.
                It contains class implementations that allow for processing PDFs in memory or by using file storage, whichever you prefer
            </p>
            <a class="btn btn-primary me-2" href="https://www.nuget.org/packages/PdfTools.SplitMerge/">Nuget Package</a>
            <a class="btn btn-primary" href="https://github.com/bochia/PDFToolsCSharp">GitHub Source Code</a><br />
            <br />
            <div className={styles.formStyle}>
                <label><b>Choose a file:</b></label>
                <input class="form-control" type='file' accept="application/pdf" ref={fileRef} />
                <label><b>Split Type:</b></label>
                <select class="form-select" id="dropdown" value={selectedOption} onChange={selectChangeHandler}>
                    <option value="">--Please choose an option--</option>
                    <option value="1">Range</option>
                    <option value="2">Interval</option>
                </select>
                {inputHtml}
            </div>
        </div>
    );
}

export default PdfSplitter;