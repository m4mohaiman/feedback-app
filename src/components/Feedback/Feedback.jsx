import React from 'react';
import FeedbackItems from './../FeedbackItems/FeedbackItems';


const Feedback = ({feedback , handleDelete}) => {
    if(!feedback || feedback.length === 0){
        return(
            <div className='no-data  text-center mt-5 text-warning'>No Data Found</div>
        )
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-12">
                 {
                    feedback.map(item  => <FeedbackItems key={item.id} item={item} handleDelete={handleDelete}></FeedbackItems>)
                 }
                </div>
            </div>
         
        </div>
    );
};

export default Feedback;