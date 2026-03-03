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
        setQuizData((prev) => ({ ...prev, questions: newQuestions }));
    };

    return (
        <div className="app">
            <Header />
            <div className="main-content">
                <QuizInfo quizData={quizData} setQuizData={setQuizData} />
                <QuestionList questions={quizData.questions} setQuestions={setQuestions} />
            </div>
        </div>
    );
}
export default App;
