import React from 'react'
import LineChart from '../Charts/LineChart'

function Summary({countrySituation}) {
  return (
    <div className="summary-component">
      <div className="line-chart">
        <LineChart data={countrySituation}/>
      </div>
      <div className="map-chart">map chart</div>
    </div>
  )
}

export default Summary


