import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

function QuestionCard({ question, index }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="card">
            <div>
                <div onClick={() => setIsExpanded(!isExpanded)}>
                    <span className="collapse-icon">{isExpanded ? <FiChevronUp /> : <FiChevronDown />}</span>
                    <span className="question-title">Question {index + 1}</span>
                </div>
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