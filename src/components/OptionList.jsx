import React from 'react';
import OptionCard from './OptionCard';

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

    const handleOptionChange = (id, field, value) => {
        setOptions(
            options.map((opt) => {
                if (opt.id === id) {
                    return { ...opt, [field]: value };
                }
                return opt;
            })
        );
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
                {(!options || options.length === 0) ? (
                    <div>Options detail...</div>
                ) : (
                    options.map((opt, index) => (
                        <OptionCard
                            key={opt.id}
                            option={opt}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default OptionList;