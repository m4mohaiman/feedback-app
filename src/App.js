import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Feedback from './components/Feedback/Feedback';
import FeedbackForm from './components/FeedbackForm/FeedbackForm';
import FeedbackStats from './components/FeedbackStats/FeedbackStats';
import { v4 as uuidv4 } from  'uuid'
import Header from './components/Header/Header';
import FeedbackData from './data/FeedbackData';



function App() {
  const [ feedback , setFeedback ] = useState(FeedbackData);


  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
 
  }

  console.log(feedback)

  const deleteFeedback = (id) =>{
    if(window.confirm('Are you sure want  to delete')){
      setFeedback(feedback.filter((item)=> item.id !== id ))
    }
  }

  return (
    <>
     <Header></Header>
     <FeedbackStats  feedback={feedback}></FeedbackStats>
     <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
     <Feedback feedback={feedback} handleDelete={deleteFeedback}></Feedback>
    </>
  );
}

export default App;
