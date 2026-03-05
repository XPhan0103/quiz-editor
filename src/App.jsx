import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import QuizInfo from './components/QuizInfo';
import QuestionList from './components/QuestionList';
import './index.css';

function App() {
    const [quizData, setQuizData] = useState(() => {
        const saved = localStorage.getItem('quizData');
        if (saved) {
            try {
                return JSON.parse(saved);
            } catch (e) {
                console.error("Failed to parse quizData from localStorage", e);
            }
        }
        return {
            name: '',
            description: '',
            questions: [],
        };
    });

    useEffect(() => {
        localStorage.setItem('quizData', JSON.stringify(quizData));
    }, [quizData]);

    const setQuestions = (newQuestions) => {
        setQuizData({ ...quizData, questions: newQuestions });
    };

    const validateQuiz = () => {
        if (!quizData.questions || quizData.questions.length === 0) {
            alert('A quiz must have at least one question.');
            return false;
        }

        for (let i = 0; i < quizData.questions.length; i++) {
            const q = quizData.questions[i];
            const qName = q.name || `Question ${i + 1}`;

            if (!q.options || q.options.length < 2) {
                alert(`"${qName}" must have at least 2 options.`);
                return false;
            }

            const correctOptions = q.options.filter(opt => opt.isCorrect);
            if (correctOptions.length < 1) {
                alert(`"${qName}" must have at least 1 correct option.`);
                return false;
            }
        }
        return true;
    };

    const handleExport = () => {
        if (!validateQuiz()) return;

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

    const handleSave = () => {
        if (validateQuiz()) {
            alert('Quiz saved successfully!');
        }
    };

    return (
        <div className="app">
            <Header onExport={handleExport} onImport={handleImport} onSave={handleSave} />
            <div className="main-content">
                <QuizInfo quizData={quizData} setQuizData={setQuizData} />
                <QuestionList questions={quizData.questions} setQuestions={setQuestions} />
            </div>
        </div>
    );
}
export default App;
