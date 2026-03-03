import React, { useState } from "react";
import { FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";

function QuestionCard({ question, index, onDelete, onChange }) {
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
                        <div className="form-group">
                            <label>Question Name</label>
                            <input
                                type="text"
                                value={question.name || ""}
                                onChange={(e) => onChange(question.id, "name", e.target.value)}
                                placeholder="Enter question name"
                            />
                        </div>

                        <div className="form-group">
                            <label>Sort Order</label>
                            <input
                                type="number"
                                value={question.sortOrder ?? ""}
                                onChange={(e) =>
                                    onChange(question.id, "sortOrder", Number(e.target.value))
                                }
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Question Description</label>
                        <textarea
                            value={question.description || ""}
                            onChange={(e) =>
                                onChange(question.id, "description", e.target.value)
                            }
                            placeholder="Enter question description"
                            rows="3"
                        />
                    </div>
                    <div>
                        <p>Options will be added here...</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuestionCard;