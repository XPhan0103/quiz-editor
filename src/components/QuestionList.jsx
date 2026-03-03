import React from "react";
import QuestionCard from "./QuestionCard";

function QuestionList({ questions, setQuestions }) {
  const handleAddQuestion = () => {
    const newQuestion = {
      id: Date.now().toString(),
      name: "",
      description: "",
      sortOrder: questions.length + 1,
      options: [],
    };
    setQuestions([...questions, newQuestion]);
  };

  return (
    <div className="question-list-container">
      <div className="section-header">
        <h2>Questions</h2>
        <button className="primary" onClick={handleAddQuestion}>
          + Add Question
        </button>
      </div>

      {questions.length === 0 ? (
        <div className="card empty-state">
          <p>Have no questions. Click "Add Question" to create a new question</p>
        </div>
      ) : (
        <div>
          {questions.map((q, index) => (
            <QuestionCard
              key={q.id}
              question={q}
              index={index}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default QuestionList;