import React from 'react';

function QuizInfo({ quizData, setQuizData }) {
    return (
        <div>
            <h2>Quiz Information</h2>
            <div>
                <div>
                    <label>Quiz Name</label>
                    <input
                        type="text"
                        placeholder="Enter quiz name"
                        value={quizData.name}
                        onChange={(e) => setQuizData({ ...quizData, name: e.target.value })}
                    />
                </div>
                <div>
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
