import React, { useEffect, useState } from 'react'
import LineChart from '../Charts/LineChart'
import HighMaps from '../Charts/HighMaps'

function Summary({ countrySituation, selectedCountry }) {
  const [mapData, setMapData] = useState({})
  // when user selected a country, it will load map of this country

  useEffect(() => {
    if (selectedCountry) {
      // import is a promise so should use .then()
      import(
        `@highcharts/map-collection/countries/${selectedCountry}/${selectedCountry}-all.geo.json`
      ).then((res) => {
        setMapData(res)
      })
    }
  }, [selectedCountry])

  return (
    <div className="summary-component">
      <div className="line-chart">
        <LineChart data={countrySituation} />
      </div>
      <div className="map-chart">
        <HighMaps mapData={mapData} />
      </div>
    </div>
  )
}

export default Summary
