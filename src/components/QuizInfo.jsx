import React from 'react';

function QuizInfo({ quizData, setQuizData }) {
    return (
        <div className="quiz-info-container">
            <h2>Quiz Information</h2>
            <div className="card">
                <div className="form-group">
                    <label>Quiz Name</label>
                    <input
                        type="text"
                        placeholder="Enter quiz name"
                        value={quizData.name}
                        onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Quiz Description</label>
                    <textarea
                        placeholder="Enter quiz description"
                        value={quizData.description}
                        onChange={(e) => setQuizData({ ...quizData, description: e.target.value })}
                        rows="4"
                    />
                </div>
            </div>
        </div>
    );
}

export default QuizInfo;
