import React from 'react';
import { FiTrash2, FiArrowUp, FiArrowDown } from 'react-icons/fi';

function OptionCard({ questionId, option, index, totalOptions, onChange, onDelete, onMoveUp, onMoveDown }) {
    return (
        <div className={`option-item form-row ${option.isCorrect ? 'is-correct' : ''}`}>
            <div className="form-group flex-2">
                <input
                    type="text"
                    value={option.value || ''}
                    onChange={(e) => onChange(option.id, 'value', e.target.value)}
                    placeholder="Value (e.g., A)"
                />
            </div>
            <div className="form-group flex-2">
                <input
                    type="text"
                    value={option.label || ''}
                    onChange={(e) => onChange(option.id, 'label', e.target.value)}
                    placeholder="Label (e.g., Day la lua chon A)"
                />
            </div>
            <div className="form-group checkbox-group">
                <label>
                    <input
                        type="radio"
                        name={`correct-${questionId}`}
                        checked={option.isCorrect || false}
                        onChange={(e) => onChange(option.id, 'isCorrect', e.target.checked)}
                    />
                    Correct
                </label>
            </div>
            <button className="icon-btn" onClick={onMoveUp} disabled={index === 0}>
                <FiArrowUp />
            </button>
            <button className="icon-btn" onClick={onMoveDown} disabled={index === totalOptions - 1}>
                <FiArrowDown />
            </button>
            <button className="icon-btn delete-btn" onClick={() => onDelete(option.id)}>
                <FiTrash2 />
            </button>
        </div>
    );
}

export default OptionCard;
