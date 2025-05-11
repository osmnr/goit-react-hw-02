import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/description/Description";
import Options from "./components/options/Options";
import Feedback from "./components/feedback/Feedback";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback ? JSON.parse(savedFeedback) : {good: 0, neutral: 0, bad: 0};
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  })

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />
      <Options feedback={feedback} updateFeedback={updateFeedback} resetFeedback={resetFeedback} />
      <Feedback feedback={feedback} />
    </>
  );
}

export default App;
