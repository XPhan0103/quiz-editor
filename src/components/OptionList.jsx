import React from 'react';
import OptionCard from './OptionCard';

function OptionList({ questionId, options, setOptions }) {
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
        if (field === 'isCorrect' && value === true) {
            setOptions(
                options.map((opt) => ({
                    ...opt,
                    isCorrect: opt.id === id
                }))
            );
        } else {
            setOptions(
                options.map((opt) => {
                    if (opt.id === id) {
                        return { ...opt, [field]: value };
                    }
                    return opt;
                })
            );
        }
    };

    const handleDeleteOption = (id) => {
        setOptions(options.filter((opt) => opt.id !== id));
    };

    const moveOptionUp = (index) => {
        if (index === 0) return;
        const newOptions = [...options];
        const temp = newOptions[index];
        newOptions[index] = newOptions[index - 1];
        newOptions[index - 1] = temp;
        setOptions(newOptions);
    };

    const moveOptionDown = (index) => {
        if (index === options.length - 1) return;
        const newOptions = [...options];
        const temp = newOptions[index];
        newOptions[index] = newOptions[index + 1];
        newOptions[index + 1] = temp;
        setOptions(newOptions);
    };

    return (
        <div className="options-container">
            <div className="section-header">
                <span className="section-title">Options</span>
                <button className="secondary" onClick={handleAddOption}>
                    + Add Option
                </button>
            </div>
            <div className="options-list">
                {(!options || options.length === 0) ? (
                    <div className="empty-state-small">No options added yet.</div>
                ) : (
                    options.map((opt, index) => (
                        <OptionCard
                            key={opt.id}
                            questionId={questionId}
                            option={opt}
                            index={index}
                            totalOptions={options.length}
                            onChange={handleOptionChange}
                            onDelete={handleDeleteOption}
                            onMoveUp={() => moveOptionUp(index)}
                            onMoveDown={() => moveOptionDown(index)}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default OptionList;