import React from 'react';

function Header({ onExport, onImport, onSave }) {
    return (
        <header>
            <div className="header-left">
                <h1>QUIZ EDITOR</h1>
                <p>Create or Update a Quiz</p>
            </div>
            <div className="header-right">
                <button onClick={onImport}>Import JSON</button>
                <button onClick={onExport}>Export JSON</button>
                <button className="save-btn" onClick={onSave}>Save Quiz</button>
            </div>
        </header>
    );
}

export default Header;
