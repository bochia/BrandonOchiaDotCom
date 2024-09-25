import React, { Component } from 'react';

//TODO: Update this to a function component like you have done for PdfSplitter.
export class BodyComposition extends Component {
    static displayName = BodyComposition.name;

    constructor(props) {
        super(props);
        this.state = { bodyScaleDataPoints: [], loading: true };
    }

    componentDidMount() {
        this.populateBodyScaleData();
    }

    static renderBodyScaleDataTable(bodyScaleDataPoints) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Weight (Lbs)</th>
                        <th>Weight (Kg)</th>
                        <th>Body Fat (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {bodyScaleDataPoints.map(dataPoint =>
                        <tr key={dataPoint.id}>
                            <td>{dataPoint.date}</td>
                            <td>{dataPoint.weightPounds}</td>
                            <td>{dataPoint.weightKilograms}</td>
                            <td>{dataPoint.bodyFatPercentage}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : BodyComposition.renderBodyScaleDataTable(this.state.bodyScaleDataPoints);

        return (
            <div>
                <h1 id="tableLabel">Body Scale Data</h1>
                {contents}
            </div>
        );
    }

    async populateBodyScaleData() {
        const response = await fetch('https://localhost:7247/api/BodyScaleData/getall');
        const data = await response.json();
        this.setState({ bodyScaleDataPoints: data, loading: false });
    }
}
