import React, { useState } from 'react';
function Question({ question, index, onAnswer , answerCurrent , setAnswerCurent }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return; 
    setSelectedAnswer(answer);
    const isCorrect = answer === question.correctAnswer;
    onAnswer(isCorrect);
    setAnswerCurent(answerCurrent + 1);
  };

  return (
    <div>
      <p>
        {index + 1}. {question.text}
      </p>
      {question.options.map((opt, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(opt)}
          style={{ marginRight: 8 }}
        >
          {opt}
        </button>
      ))}

    
    </div>
  );
}
export default Question;