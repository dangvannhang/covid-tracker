import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighChart from 'highcharts'
import moment from 'moment'

// tuong ung voi quoc gia ma chung ta da lua chon
const generateOptions = (data) => {
  const categories = data.map(item => moment(item.Date).format('DD/MM/YYYY'))

  return {
    chart: {
      height: 500,
    },
    title: {
      text: 'Tổng ca nhiễm',
    },
    xAxis: {
      categories: categories,
      crosshair: true,
    },
    colors: ['#F3585B'],
    yAxis: {
      min: 0,
      title: {
        text: null,
      },
      // labels: {
      //   align: 'right',
      // },
    },
    // when hover mouse to line, it show a tooltip
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y} ca</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: 'Tổng Ca nhiễm',
        data: data.map((item) => item.Confirmed),
      },
    ],
  }
}

function LineChart({ data }) {
  const [options, setOptions] = useState({})
  const [timeShow, setTimeShow] = useState('all')

  // everytime when data change, recall function in useEffect
  useEffect(() => {
    setOptions(generateOptions(data))
  }, [data])

  const arrayTime = [
    {
      'title': 'Tất cả',
      'value': 'all'
    },
    {
      'title': '30 Ngày',
      'value': '30'
    },
    {
      'title': '7 Ngày',
      'value': '7'
    }
  ]

  return (
    <div className="line-chart-component">
      <div className='group-button-date'>

        {
          arrayTime.map((time, index) => {
            return <button className="btn" onClick={() => setTimeShow(time.value)} key={index}>
            {time.title}
          </button>
          })
        }

        
      </div>
      <HighchartsReact highcharts={HighChart} options={options} />
    </div>
  )
}

export default LineChart
