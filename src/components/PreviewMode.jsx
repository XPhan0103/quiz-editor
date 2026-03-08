import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

function PreviewMode({ quizData, onExit }) {
    // if (!quizData.questions || quizData.questions.length === 0) {
    //     return (
    //         <div className="empty-state">
    //             <p>This quiz have no questions</p>
    //             <button className="secondary" onClick={onExit}>
    //                 <FiArrowLeft style={{ marginRight: '8px' }} />
    //                 Back to Editor
    //             </button>
    //         </div>
    //     );
    // }

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
                            {q.options && q.options.map((opt) => (
                                <label key={opt.id} className="preview-option-label">
                                    <input
                                        type="radio"
                                        name={`question-${q.id}`}
                                        value={opt.id}
                                    />
                                    <span className="option-text">{opt.label || opt.value || 'Untitled Option'}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '20px', paddingBottom: '40px' }}>
                <button className="primary save-btn">Submit Quiz</button>
            </div>
        </div>
    );
}

export default PreviewMode;
