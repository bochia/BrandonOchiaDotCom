import React, { useState } from 'react';
import PdfSplitter from './PdfSplitter';

function PdfSplitterContainer() {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputRangeOrInterval, setInputRangeOrInterval] = useState('');
    const fileRef = React.useRef();

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);

        // reset input text field if split type has changed 
        // b/c they use different input formats
        setInputRangeOrInterval('');
    };

    const handleInputChange = (event) => {
        //TODO: need to check that input is only numbers, spaces, commas, and hyphens. 
        setInputRangeOrInterval(event.target.value);
    }

    function submitToApi() {
        try {
            // check api base url before making call
            if (!process.env.REACT_APP_API_BASE_URL) {
                throw new Error('REACT_APP_API_BASE_URL was invalid.');
            }

            // get file from the file input
            const file = fileRef.current.files[0];
            if (!file) {
                alert('You must add a PDf file to be split.');
                return;
            }

            const formData = new FormData();
            formData.append('files', file);

            // call PDF splitter endpoint
            fetch(`${process.env.REACT_APP_API_BASE_URL}/PdfSplitter/split/${selectedOption}?inputRangeOrInterval=${inputRangeOrInterval}`, {
                method: 'POST',
                body: formData,
            }).then((response) => {
                if (!response.ok) {
                    throw new Error('Call to PDF splitter endpoint failed.');
                }

                // Get the response as a Blob
                return response.blob();
            }).then(blob => {
                downloadTheZipFile(blob);
            }).catch(error => {
                const errorMessage = 'Ooops, something went wrong....There was an error with the splitting the PDF.';
                console.log(errorMessage);
                alert(errorMessage);
            });;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return <PdfSplitter
        selectedOption={selectedOption}
        fileRef={fileRef}
        inputRangeOrInterval={inputRangeOrInterval}
        selectChangeHandler={handleSelectChange}
        inputChangeHandler={handleInputChange}
        submitToApiHandler={submitToApi}
    />
}

function downloadTheZipFile(blob) {
    // PUT THE ZIP FILE OF THE SPLIT PDFS IN THE DOWNLOAD FOLDER
    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'ZippedPDFs.zip'; // The filename to save the zip file as

    // Append the link to the body
    document.body.appendChild(a);

    // Programmatically click the link to trigger the download
    a.click();

    // Clean up and revoke the object URL after the download starts
    window.URL.revokeObjectURL(url);
}

export default PdfSplitterContainer;