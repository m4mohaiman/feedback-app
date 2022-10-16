import React, { useState } from 'react'
import Button from '../Shared/Button';
import Card from '../Shared/Card';
import './Feedback.css';
import RatingSelect from './RatingSelect';

const FeedbackForm = ({ addFeedback }) => {

  const [ text , setText ] = useState('');
  const [ btnDisabled , setBtnDisabled ] = useState(true);
  const [ message , setMessage ] = useState('');
  const [ rating , setRating ] = useState(5);



  const handleChange = (e) => {
    if( text === '' ){
      setBtnDisabled(true);
      setMessage(null);
    }else if( text !== '' && text.trim().length <= 10 ){
      setBtnDisabled(true);
      setMessage('Feed back message should be more than 10 character')
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }

    setText(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if( text.trim().length > 10 ){
      const newFeedback = {
        text,
        rating,
      } 
      addFeedback(newFeedback);
      setText('');
      setBtnDisabled(true);
    }
  }


  return (
    <Card orange={true}>    
        <form onSubmit={handleSubmit}>
            <h2>How would you like to rate our to us?</h2>
            <RatingSelect select={(rating)=> setRating(rating)}></RatingSelect>
            <div className="input-group">
            <input onChange={handleChange} type="text" placeholder='Write your review' value={text} />
            <Button type='submit' version='primary' isDisable={btnDisabled}>Submit</Button>
            </div>
            
            { message && <div className='message'>{message}</div> }
        </form>
    </Card>
  )
}

export default FeedbackForm