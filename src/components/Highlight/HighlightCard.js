import React from 'react'

function HighlightCard({title, count, type}) {
  return (
    <div className="highlight-card">
      <div className={`card-border card-border-${type}`}></div>
      <div className="card-content">
        <h3>{title}</h3>
        <h5>{count}</h5>
      </div>
    </div>
  )
}

export default HighlightCard
