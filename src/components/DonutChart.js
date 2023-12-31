import React from 'react';
import ReactApexChart from 'react-apexcharts';

function DonutChart() {
  const state = {
    series: [ 55, 31, 15],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex]
        }
      },
      responsive: [{
        breakpoint: 400,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
    </div>
  );
}

export default DonutChart;