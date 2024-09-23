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
            //TODO: need to await the fetch.
            const formData = new FormData();
            formData.append('files', fileRef.current.files[0]);

            const response = fetch(`https://localhost:7247/api/PdfSplitter/split/${selectedOption}?inputRangeOrInterval=${inputRangeOrInterval}`, {
                method: 'POST',
                 body: formData,
            }).then((response) => {
                return response.blob(); // Get the response as a Blob
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
                alert('There was an error with the download:');
            });;

            ////const data = response.json();
            ////console.log('API response:', data);
            //alert(data);
        } catch (error) {
            alert('made it to the try catch alert.');
            console.error('Error:', error);
            alert(`Error: ${error}`);
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

        //TODO: Look up a boostrap class for a file input.
        //TODO: need to have the split button disabled if there isnt exactly 1 file selected.
        //TODO: make it so interval can only be a number input.
        inputHtml = (
            <div style={formStyle}>
                <label>{inputLabelText}</label>
                <input class="form-control" type='text' placeholder={inputPlaceholderText} onChange={handleInputChange}></input>
                <button class="btn btn-primary" onClick={submitToApi} disabled={!selectedOption}>Split PDF</button>
            </div>
        );
    }

    //TODO: mabye the UI needs to be in a different order
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