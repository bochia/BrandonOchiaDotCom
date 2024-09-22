import { useState } from 'react';
function PdfSplitter() {
    const [selectedOption, setSelectedOption] = useState();

    //TODO: need to check that input is a number.

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    function submitToApi() {
        alert("Calling the API now!!!")
    }

    const formStyle = {
        display: "flex",
        flexDirection: "column", /* Make elements stack vertically */
        gap: 10, /* Add spacing between each element */
    }

    let inputLabelText = "";
    let inputPlaceholderText = "";
    let inputHtml = <div></div>;

    if (selectedOption) {
        if (selectedOption === "1") {
            // range option
            inputLabelText = "Put the page ranges you want here.";
            inputPlaceholderText = "Ex: 1,5-10,12...";
        } else if (selectedOption === "2") {
            inputLabelText = "Put the interval you want to use here.";
            inputPlaceholderText = "Ex: 3";
        }

        inputHtml = (
            <div style={formStyle}>
                <label>{inputLabelText}</label>
                <input type="text" placeholder={inputPlaceholderText}></input>
                <button onClick={submitToApi} disabled={!selectedOption}>Split now</button>
            </div>
        );
    }

    return (
        <div>
            <h1>PDF Splitter</h1>
            <p>This web app also uses the nuget package that I created.</p>
            <br />
            <div style={formStyle}>
                <label>Split by:</label>
                <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
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