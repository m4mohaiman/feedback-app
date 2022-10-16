import React, { useState } from 'react';
import Card from '../Shared/Card';
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({item , handleDelete}) => {

  return (
    <Card orange={false}>
        <div className="num-display">{item.rating}</div>
        <button  className='close' onClick={()=> handleDelete(item.id)}>
          <FaTimes color='#e74c3c' />
        </button>
        <div className="text-display">{item.text}</div> 
    </Card>
  )
}

export default FeedbackItem