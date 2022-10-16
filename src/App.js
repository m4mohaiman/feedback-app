import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import './App.css';
import FeedbackForm from './components/Feedback/FeedbackForm';
import FeedbackList from './components/Feedback/FeedbackList';
import FeedbackStats from './components/Feedback/FeedbackStats';
import Header from './components/Header/Header';
import FeedbackData from './data/FeedbackData';



function App() {

  const [ feedback , setFeedback ] = useState(FeedbackData); 

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }


  //delete method
  const deleteFeedBack = (id) =>{
    if(window.confirm('Are you want to sure??')){
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }




  return (
    <>
      <Header></Header>
      <div className="container">
        <FeedbackStats feedback={feedback}></FeedbackStats>
        <FeedbackForm addFeedback={addFeedback}></FeedbackForm>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack}></FeedbackList>
      </div>

    </>
  );
}



export default App;
