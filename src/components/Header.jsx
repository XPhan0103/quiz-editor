import React from 'react';

function Header() {
    return (
        <header>
            <div className="header-left">
                <h1>QUIZ EDITOR</h1>
                <p>Create or Update a Quiz</p>
            </div>
            <div className="header-right">
                <button>Import JSON</button>
                <button>Export JSON</button>
                <button className="save-btn">Save Quiz</button>
            </div>
        </header>
    );
}

export default Header;
