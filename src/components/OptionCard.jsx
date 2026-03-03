import React from 'react';
import { FiTrash2 } from 'react-icons/fi';

function OptionCard({ option }) {
    return (
        <div className="form-row">
            <div className="form-group flex-2">
                <input
                    type="text"
                    value={option.value || ''}
                    placeholder="Value (e.g., A)"
                />
            </div>
            <div className="form-group flex-2">
                <input
                    type="text"
                    value={option.label || ''}
                    placeholder="Label (e.g., Day la lua chon A)"
                />
            </div>
            <div className="form-group flex-1">
                <input
                    type="number"
                    value={option.sortOrder || ''}
                    placeholder="Order"
                />
            </div>
            <div className="form-group">
                <label>
                    <input
                        type="checkbox"
                        checked={option.isCorrect || false}
                    />
                    Correct
                </label>
            </div>
            <button>
                <FiTrash2 />
            </button>
        </div>
    );
}

export default OptionCard;
