import React, { useState, useEffect } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighChart from 'highcharts'
import moment from 'moment'
import lodash from 'lodash'
import {SHOW_ALL_TIME, SHOW_MONTH_TIME, SHOW_WEEK_TIME} from '../../../constants/timeShow'

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
  const [timeShow, setTimeShow] = useState(SHOW_ALL_TIME)

  // everytime when data change, recall function in useEffect
  useEffect(() => {
   
    const lengthData = data.length;

    switch (timeShow) {
      case SHOW_ALL_TIME: {
        setOptions(generateOptions(data))
        break;
      }
      case SHOW_MONTH_TIME: {
        // const newData = lodash.slice(data, lengthData - 30, lengthData);
        const newData = data.slice(lengthData - 30)
        setOptions(generateOptions(newData))
        break;
      }
      case SHOW_WEEK_TIME: {
        // const newData = lodash.slice(data, lengthData - 7, lengthData)
        const newData = data.slice(lengthData - 7)
        setOptions(generateOptions(newData))
        break;
      }
    }
    
  }, [data, timeShow])

  const arrayTime = [
    {
      'title': 'Tất cả',
      'value': SHOW_ALL_TIME
    },
    {
      'title': '30 Ngày',
      'value': SHOW_MONTH_TIME
    },
    {
      'title': '7 Ngày',
      'value': SHOW_WEEK_TIME
    }
  ]

  return (
    <div className="line-chart-component">
      <div className='group-button-date'>

        {
          arrayTime.map((time, index) => {
            return <button className={`btn ${time.value === timeShow ? 'btn-click' : ''} `} onClick={() => setTimeShow(time.value)} key={index}>
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
