import React from 'react';
import FeedbackItem from './FeedbackItem';
import { motion, AnimatePresence } from "framer-motion"




function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p className='not-found-feedback'>No feedback found</p>
    }
    return (
        <div className='feedback-list'>
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={spring}
                        layout
                    >
                        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                    </motion.div>
                ))}

            </AnimatePresence>

        </div>
    )


}

const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

export default FeedbackList