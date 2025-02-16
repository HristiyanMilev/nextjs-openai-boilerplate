// file: /components/Flashcard.js
const Flashcard = ({ question, answer }) => {
    return (
      <div className="flashcard">
        <h3>Flashcard:</h3>
        <p><strong>Question:</strong> {question}</p>
        <p><strong>Answer:</strong> {answer}</p>
      </div>
    );
  };
  
  export default Flashcard;
  