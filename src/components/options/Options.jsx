const Options = ({ feedback, updateFeedback, resetFeedback}) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    return (
     <>
     <button onClick={() => updateFeedback("good")}>Good</button>
     <button onClick={() => updateFeedback("neutral")}>Neutral</button>
     <button onClick={() => updateFeedback("bad")}>Bad</button>
     {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
     </>
    )
  };
  
  export default Options;
