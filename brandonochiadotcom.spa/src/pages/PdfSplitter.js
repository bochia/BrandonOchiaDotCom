import React, { useState } from 'react';
function PdfSplitter() {
    const [selectedOption, setSelectedOption] = useState('');
    const [inputRangeOrInterval, setInputRangeOrInterval] = useState('');
    const fileRef = React.useRef();


    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleInputChange = (event) => {
        //TODO: need to check that input is only numbers, spaces, commas, and hyphens. 
        // Remove the non-number characters then check that an actuall number gets made.
        setInputRangeOrInterval(event.target.value);
    }

    function submitToApi() {
        try {
            // check api base url before making call
            if (!process.env.REACT_APP_API_BASE_URL) {
                throw new Error('REACT_APP_API_BASE_URL was invalid.');
            }

            // get file from the file input
            const formData = new FormData();
            formData.append('files', fileRef.current.files[0]);

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
            }).catch(error => {
                const errorMessage = 'Ooops, something went wrong....There was an error with the splitting the PDF.';
                console.log(errorMessage);
                alert(errorMessage);
            });;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column', /* Make elements stack vertically */
        gap: 10, /* Add spacing between each element */
    }

    let inputLabelText = '';
    let inputPlaceholderText = '';
    let inputHtml;

    if (selectedOption) {
        if (selectedOption === "1") {
            // range option
            inputLabelText = 'Put the page ranges you want here.';
            inputPlaceholderText = 'Ex: 1,5-10,12...';
        } else if (selectedOption === "2") {
            inputLabelText = 'Put the interval you want to use here.';
            inputPlaceholderText = 'Ex: 3';
        }

        //TODO: make it so interval can only be a number input.
        inputHtml = (
            <div style={formStyle}>
                <label>{inputLabelText}</label>
                <input class="form-control" type='text' placeholder={inputPlaceholderText} onChange={handleInputChange}></input>
                <button class="btn btn-primary" onClick={submitToApi} disabled={!selectedOption}>Split PDF</button>
            </div>
        );
    }

    //TODO: Make a presentational component for this and render it here.
    return (
        <div>
            <h1>PDF Splitter</h1>
            <p>This web app also uses the nuget package that I created.</p>
            <br />
            <div style={formStyle}>
                <label>Choose a file:</label>
                <input class="form-control" type='file' accept="application/pdf" ref={fileRef} />
                <label>Split Type:</label>
                <select class="form-select" id="dropdown" value={selectedOption} onChange={handleSelectChange}>
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