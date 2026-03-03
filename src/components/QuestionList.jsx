import React from "react";

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
        <div>
            <div>
                <h2>Questions</h2>
                <button onClick={handleAddQuestion}>
                    + Add Question
                </button>
            </div>

            {questions.length === 0 ? (
                <div className="card">
                    <p>Have no questions. Click "Add Question" to create a new question</p>
                </div>
            ) : (
                <div className="card">
                    {questions.map((q, index) => (
                        <div key={q.id}>Question {index + 1}</div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default QuestionList;