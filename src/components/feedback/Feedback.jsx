const Feedback = ({feedback}) => {
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  if (!totalFeedback){
    return <p>No feedback yet</p>
  }
  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {Math.round(100*(feedback.good + feedback.neutral)/totalFeedback)} %</p>
    </>
  );
};

export default Feedback;
