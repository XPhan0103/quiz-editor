import React, { useState } from 'react';
import Header from './components/Header';
import QuizInfo from './components/QuizInfo';
import QuestionList from './components/QuestionList';
import './index.css';

function App() {
    const [quizData, setQuizData] = useState({
        name: '',
        description: '',
        questions: [],
    });

    const setQuestions = (newQuestions) => {
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const handleExport = () => {
        const dataStr = JSON.stringify(quizData, null, 2);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${quizData.name || 'quiz_export'}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const handleImport = (file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsedData = JSON.parse(e.target.result);
                if (typeof parsedData === 'object' && parsedData !== null) {
                    setQuizData({
                        name: parsedData.name || '',
                        description: parsedData.description || '',
                        questions: Array.isArray(parsedData.questions) ? parsedData.questions : [],
                    });
                    alert('Import Quiz successfully!');
                } else {
                    alert('Invalid quiz data format!');
                }
            } catch (error) {
                alert('Error parse JSON file!');
            }
        };
        reader.readAsText(file);
    };

    return (
        <div className="app">
            <Header onExport={handleExport} onImport={handleImport} />
            <div className="main-content">
                <QuizInfo quizData={quizData} setQuizData={setQuizData} />
                <QuestionList questions={quizData.questions} setQuestions={setQuestions} />
            </div>
        </div>
    );
}
export default App;
