import React from 'react'
import HighlightCard from './HighlightCard'

function Highlight({ countrySituation }) {
  // check if props is null, return a empty array
  const lastSituationDate =
    countrySituation && countrySituation.length
      ? countrySituation[countrySituation.length - 1]
      : []

  console.log('last situation date: ', lastSituationDate)

  const summary = [
    {
      title: 'Số ca nhiễm',
      count: lastSituationDate.Confirmed,
      type: 'confirmed',
    },
    {
      title: 'Số ca khỏi',
      count: lastSituationDate.Recovered,
      type: 'recovered',
    },
    { title: 'Số ca tử vong', count: lastSituationDate.Deaths, type: 'death' },
  ]

  return (
    <div className="highlight-component" data-testid="highlight-component">
      {summary.map((item, index) => {
        return <HighlightCard {...item} key={index} />
      })}
    </div>
  )
}

export default Highlight
