import React from 'react';
import { FaTimes } from 'react-icons/fa'
import Card from '../Sheared/Card';

const FeedbackItems = ({ item, handleDelete }) => {
    const { id, rating, text } = item;
    return (
        <Card>
            
                <div className="num-display">{rating}</div>
                <button onClick={() => handleDelete(id)} className='close'>
                    <FaTimes color='purple' />
                </button>
                <div className="text-display">{text}</div>
            
        </Card>

    );
};

export default FeedbackItems;