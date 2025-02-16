// file: /components/Quiz.js
const Quiz = ({ questions }) => {
    return (
      <div className="quiz">
        <h3>Quiz:</h3>
        {questions.map((question, index) => (
          <div key={index}>
            <p>{question.question}</p>
            <ul>
              {question.choices.map((choice, i) => (
                <li key={i}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  };
  
  export default Quiz;
  