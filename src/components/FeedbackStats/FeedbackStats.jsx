import React from 'react';

const FeedbackStats = ({ feedback }) => {
    //calc average 
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating;
    }, 0) / feedback.length;

    average = average.toFixed(1).replace(/[.,]0$/,'');

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-12">
                    <div className='feedback-stats'>
                        <h4>{feedback.length} Review</h4>
                        <h4>Average Rate : {isNaN(average) ? 0 : average }</h4>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default FeedbackStats;