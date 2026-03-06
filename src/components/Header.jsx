import React, { useRef } from 'react';

function Header({ onExport, onImport, onSave, isValid }) {
    const fileInputRef = useRef(null);

    const handleImportClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            onImport(file);
            e.target.value = null;
        }
    };

    return (
        <header>
            <div className="header-left">
                <h1>QUIZ EDITOR</h1>
                <p>Create or Update a Quiz</p>
            </div>
            <div className="header-right">
                <input
                    type="file"
                    accept=".json"
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                <button onClick={handleImportClick}>Import JSON</button>
                <button onClick={onExport} disabled={!isValid}>Export JSON</button>
                <button className="save-btn" onClick={onSave} disabled={!isValid}>Save Quiz</button>
            </div>
        </header>
    );
}

export default Header;
