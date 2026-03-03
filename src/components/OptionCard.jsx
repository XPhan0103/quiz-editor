import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

function OptionCard({ option, onChange, onDelete }) {
    return (
        <div className="form-row">
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
            <div className="form-group flex-1">
                <input
                    type="number"
                    value={option.sortOrder || ''}
                    onChange={(e) => onChange(option.id, 'sortOrder', e.target.value)}
                    placeholder="Order"
                />
            </div>
            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        checked={option.isCorrect || false}
                        onChange={(e) => onChange(option.id, 'isCorrect', e.target.checked)}
                    />
                    Correct
                </label>
            </div>
            <button className="icon-btn delete-btn" onClick={() => onDelete(option.id)}>
                <FiTrash2 />
            </button>
        </div>
    );
}

export default OptionCard;
