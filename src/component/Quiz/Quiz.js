import React, { useState } from 'react';
import Question from './Question';
function Quiz() {
  const questions = [
    {
      text: "ReactJS dùng để làm gì?",
      options: ["Mobile App", "Web UI", "Hệ điều hành", "Cơ sở dữ liệu"],
      correctAnswer: "Web UI",
    },
    {
      text: "Thành phần chính của React là gì?",
      options: ["Component", "Function", "Variable", "Loop"],
      correctAnswer: "Component",
    },
    {
      text: "State trong React dùng để làm gì?",
      options: [
        "Lưu trữ dữ liệu thay đổi theo thời gian",
        "Định nghĩa kiểu dữ liệu",
        "Tạo vòng lặp",
        "Xoá component",
      ],
      correctAnswer: "Lưu trữ dữ liệu thay đổi theo thời gian",
    },
  ];

  const [score, setScore] = useState(0);
  const [answerCurrent, setAnswerCurent] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prev) => prev + 1);
  };

  return (
    <div style={{ padding: 20 }}>
    <h2>Bài 5: Quiz</h2>
      {questions.map((q, i) => (
        i === answerCurrent ? (
          <Question key={i} question={q} index={i} onAnswer={handleAnswer} setAnswerCurent = {setAnswerCurent} answerCurrent = {answerCurrent} />
        ) : null
      ))}
      {answerCurrent === questions.length && (
        <p>
          Bạn trả lời đúng {score} trên {questions.length} câu.
        </p>
      )}
    </div>
  );
}

export default Quiz;