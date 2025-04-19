import { useState, useEffect} from 'react'
import './App.css'
import Description from './components/description/Description'
import Options  from './components/options/Options'
import Feedback from './components/feedback/Feedback'


function App() {

  const [feedback, setFeedback] = useState({
    good:0,
    neutral:0,
    bad:0,
  });

  const updateFeedback = ()=>{
    setFeedback({
      ...feedback,
      good : feedback.good + 1
    })
  };

  return (
    <>
      <Description/>
      <Options {...feedback}/>
      <Feedback {...feedback}/>
    </>
  )
}

export default App
