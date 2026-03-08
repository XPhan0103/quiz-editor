import React, { useState } from 'react';
import { FiArrowLeft, FiCheckCircle, FiXCircle } from 'react-icons/fi';

function PreviewMode({ quizData, onExit }) {
    const [answers, setAnswers] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);

    const handleOptionSelect = (questionId, optionId) => {
        if (isSubmitted) return;
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionId
        }));
    };

    const handleSubmit = () => {
        let currentScore = 0;
        quizData.questions.forEach(q => {
            const selectedOptionId = answers[q.id];
            const correctOption = q.options.find(opt => opt.isCorrect);
            if (correctOption && correctOption.id === selectedOptionId) {
                currentScore += 1;
            }
        });
        setScore(currentScore);
        setIsSubmitted(true);
    };

    return (
        <div className="preview-container">
            <div className="preview-header">
                <button className="secondary" onClick={onExit}>
                    <FiArrowLeft style={{ marginRight: '8px' }} />
                    Back to Editor
                </button>
                <h2>{quizData.name || 'Untitled Quiz'}</h2>
                <p>{quizData.description || 'No description provided.'}</p>
            </div>

            <div className="preview-questions">
                {quizData.questions.map((q, qIndex) => (
                    <div key={q.id} className="card question-card preview-question-card">
                        <div className="question-header">
                            <span className="question-title">
                                {qIndex + 1}. {q.name || `Question ${qIndex + 1}`}
                            </span>
                        </div>
                        {q.description && (
                            <div className="preview-question-desc">
                                {q.description}
                            </div>
                        )}
                        <div className="preview-options">
                            {q.options && q.options.map((opt) => {
                                const isSelected = answers[q.id] === opt.id;
                                let optionClass = "preview-option-label";
                                let icon = null;

                                if (isSubmitted) {
                                    if (opt.isCorrect) {
                                        optionClass += " correct";
                                        icon = <FiCheckCircle color="#28a745" />;
                                    } else if (isSelected && !opt.isCorrect) {
                                        optionClass += " incorrect";
                                        icon = <FiXCircle color="#d32f2f" />;
                                    }
                                }

                                return (
                                    <label key={opt.id} className={optionClass}>
                                        <input
                                            type="radio"
                                            name={`question-${q.id}`}
                                            value={opt.id}
                                            checked={isSelected}
                                            onChange={() => handleOptionSelect(q.id, opt.id)}
                                            disabled={isSubmitted}
                                        />
                                        <span className="option-text">{opt.label || opt.value || 'Untitled Option'}</span>
                                        {icon && <span style={{ marginLeft: 'auto' }}>{icon}</span>}
                                    </label>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '30px', paddingBottom: '40px' }}>
                {isSubmitted ? (
                    <div className="score-display">
                        <h3>Your Score: {score} / {quizData.questions.length}</h3>
                        <p>{(score / quizData.questions.length * 100).toFixed(0)}% Correct</p>
                        <button className="primary" onClick={() => {
                            setIsSubmitted(false);
                            setAnswers({});
                        }} style={{ marginTop: '15px' }}>
                            Retake Quiz
                        </button>
                    </div>
                ) : (
                    <button
                        className="primary save-btn"
                        onClick={handleSubmit}
                        disabled={Object.keys(answers).length < quizData.questions.length}
                    >
                        Submit Quiz
                    </button>
                )}
            </div>
        </div>
    );
}

export default PreviewMode;
