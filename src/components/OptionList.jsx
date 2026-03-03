import React from 'react';

function OptionList({ options, setOptions }) {
    const handleAddOption = () => {
        const newOption = {
            id: Date.now().toString(),
            value: '',
            label: '',
            sortOrder: options ? options.length + 1 : 1,
            isCorrect: false,
        };
        setOptions([...(options || []), newOption]);
    };

    return (
        <div>
            <div className="section-header">
                <span>Options</span>
                <button onClick={handleAddOption}>
                    + Add Option
                </button>
            </div>
            <div>
                <div>Options detail...</div>
            </div>
        </div>
    );
}

export default OptionList;