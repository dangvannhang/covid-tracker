import React from 'react'
import LineChart from '../Charts/LineChart'

function Summary() {
  return (
    <div className="summary-component">
      <div className="line-chart">
        <LineChart data={[]}/>
      </div>
      <div className="map-chart">map chart</div>
    </div>
  )
}

export default Summary


