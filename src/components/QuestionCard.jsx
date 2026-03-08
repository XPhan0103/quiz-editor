import React, { useState } from 'react';
import { FiTrash2, FiChevronUp, FiChevronDown, FiArrowUp, FiArrowDown } from 'react-icons/fi';
import OptionList from './OptionList';

function QuestionCard({ question, index, totalQuestions, onDelete, onChange, onMoveUp, onMoveDown }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const optionsList = question.options || [];
    const optionsCount = optionsList.length;
    const correctCount = optionsList.filter(o => o.isCorrect).length;

    const hasOptionsError = optionsCount < 2;
    const hasCorrectError = optionsCount >= 2 && correctCount === 0;

    return (
        <div className="card question-card">
            <div className="question-header">
                <div className="question-header-left" onClick={() => setIsExpanded(!isExpanded)}>
                    <span className="collapse-icon">
                        {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    </span>
                    <span className="question-title">Question {index + 1}</span>
                </div>
                <div className="question-header-right">
                    <button className="icon-btn" onClick={onMoveUp} disabled={index === 0}>
                        <FiArrowUp />
                    </button>
                    <button className="icon-btn" onClick={onMoveDown} disabled={index === totalQuestions - 1}>
                        <FiArrowDown />
                    </button>
                    <button className="icon-btn delete-btn" onClick={() => onDelete(question.id)}>
                        <FiTrash2 />
                    </button>
                </div>
            </div>

            {isExpanded && (
                <div className="question-body">
                    <div className="form-row">
                        <div className="form-group flex-1">
                            <label>Question Name</label>
                            <input
                                type="text"
                                value={question.name || ''}
                                onChange={(e) => onChange(question.id, 'name', e.target.value)}
                                placeholder="Enter question name"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Question Description</label>
                        <textarea
                            value={question.description || ''}
                            onChange={(e) => onChange(question.id, 'description', e.target.value)}
                            placeholder="Enter question description"
                            rows="3"
                        />
                    </div>
                    {hasOptionsError && (
                        <div className="error-text">Question must have at least 2 options</div>
                    )}
                    {hasCorrectError && (
                        <div className="error-text">Question must have 1 correct option</div>
                    )}
                    <OptionList
                        questionId={question.id}
                        options={question.options}
                        setOptions={(newOptions) => onChange(question.id, 'options', newOptions)}
                    />
                </div>
            )}
        </div>
    );
}

export default QuestionCard;