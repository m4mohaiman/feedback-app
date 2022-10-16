import React from 'react'

const FeedbackStats = ({feedback}) => {

  //count average
  let average = feedback.reduce((acc , cur ) => {
        return acc + cur.rating;
  }, 0) / feedback.length;



  //replace if have 0
  average = average.toFixed(1).replace(/[.,]0$/,'');

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {isNaN(average) ? 0 : average /*NaN value*/}</h4>
    </div>
  )
}

export default FeedbackStats