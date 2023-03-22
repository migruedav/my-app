
import React, { Component } from 'react';
import Chart from 'react-google-charts';

class LineChart extends Component {
  render() {
    const data = [
      ['Día', 'Facebook', 'Instagram'],
      ['1', 1000, 1200],
      ['2', 1400, 1600],
      ['3', 1100, 1400],
      ['4', 1700, 1800],
      ['5', 1300, 1500],
      ['6', 1900, 2100],
      ['7', 2200, 2400],
      ['8', 2000, 2200],
      ['9', 2500, 2700],
      ['10', 2300, 2600],
      ['11', 2800, 2900],
      ['12', 3000, 3200],
      ['13', 2700, 3000],
      ['14', 3300, 3500],
      ['15', 3200, 3400],
      ['16', 3800, 3900],
      ['17', 3600, 3800],
      ['18', 4100, 4300],
      ['19', 3900, 4200],
      ['20', 4500, 4700],
      ['21', 4300, 4500],
      ['22', 4800, 5000],
      ['23', 4600, 4900],
      ['24', 5100, 5300],
      ['25', 4900, 5200],
      ['26', 5400, 5600],
      ['27', 5200, 5500],
      ['28', 5800, 6000],
      ['29', 5600, 5800],
      ['30', 6100, 6300],
    ];

    const options = {
      title: 'Impresiones en Facebook e Instagram (últimos 30 días)',
      curveType: 'function',
      legend: { position: 'bottom' },
      colors: ['#4285F4', '#DB4437'],
      animation: {
        startup: true,
        duration: 1000,
        easing: 'out'},
    };

    return (
      <Chart
        chartType="LineChart"
        data={data}
        options={options}
        width="100%"
        height="400px"
        legendToggle
      />
    );
  }
}

export default LineChart;
