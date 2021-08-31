import React from 'react'
import HighlightCard from './HighlightCard'

function Highlight({ countrySituation }) {
  const data = countrySituation[countrySituation.length - 1]
  console.log('last data: ', data)

  // const summary = [
  //   { title: 'Số ca nhiễm', count: data.Confirmed, class: 'confirmed' },
  //   { title: 'Số ca khỏi', count: data.Recovered, class: 'recovered' },
  //   { title: 'Số ca tử vong', count: data.Deaths, class: 'death' },
  // ]

  return (
    <div className="highlight-component">
      <HighlightCard />
      <HighlightCard />
      <HighlightCard />
    </div>
  )
}

export default Highlight
