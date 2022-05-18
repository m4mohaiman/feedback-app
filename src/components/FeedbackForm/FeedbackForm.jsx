import React, { useState } from 'react';
import Rating from '../Rating/Rating';
import Button from '../Sheared/Button';
import Card from '../Sheared/Card';

const FeedbackForm = ({handleAdd}) => {
    const [ text , setText ]=useState('');
    const [ btnDisable , setBtnDisable ] = useState(true);
    const [ rating , setRating ] = useState(10)
    const [ message , setMessage ] = useState('');

    const handleFormText = (e) =>{
        if(text ===  ''){
            setBtnDisable(true);
            setMessage(null);
        }
        else if(  text !== '' && text.trim().length <= 10){
            setBtnDisable(true);
            setMessage('Text must be more than 10 character');
        }
        else{
            setMessage(null);
            setBtnDisable(false);
        }

        setText(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim().length > 10){
            const newFeedback = {
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText("");
        }
        
    }


    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <Card>
                        <form onSubmit={handleSubmit}>
                            <h2>How would you rate our service with us?</h2>
                            <Rating select={(rating)=> setRating(rating)}></Rating>
                            <div className="input-group">
                                <input
                                onChange={handleFormText} 
                                type="text" 
                                value={text}
                                placeholder='Write a review' 
                                />
                                <Button type='submit' isDisabled={btnDisable}>
                                    Send
                                </Button>
                            </div>
                            {
                                message && <div className='message'>{message}</div>
                            }
                        </form>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FeedbackForm;