import React, { useState } from "react";
import { FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";

function QuestionCard({ question, index, onDelete }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card">
            <div>
                <div onClick={() => setIsExpanded(!isExpanded)}>
                    <span className="collapse-icon">{isExpanded ? <FiChevronUp /> : <FiChevronDown />}</span>
                    <span className="question-title">Question {index + 1}</span>
                </div>
                <button className="icon-btn delete-btn" onClick={() => onDelete(question.id)}>
                    <FiTrash2 />
                </button>
            </div>

            {isExpanded && (
                <div>
                    <div>
                        <p>Options will be added here...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuestionCard;