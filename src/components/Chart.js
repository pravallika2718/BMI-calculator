import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import './Chart.css'

export default class LineChart extends Component {

	chartRef = React.createRef();

	componentDidMount() {
		const ctx = this.chartRef.current.getContext("2d");
		
		new Chart(ctx, {
			type: "line",
			data: {
				datasets: [{ 
					label: "Bmi",
					
				}, 
				]
			},
		});
	}
	render() {
		return (
			<div class="myChart1">
				<canvas
				id="myChart"
				ref={this.chartRef}
				/>
			</div>
			)
    }
}
     