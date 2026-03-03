import React, { useState } from 'react';
import Header from './components/Header';
import QuizInfo from './components/QuizInfo';
import './index.css';

function App() {
  const [quizData, setQuizData] = useState({
    name: '',
    description: '',
    questions: [],
  });

  return (
    <div className="app">
      <Header />
      <div>
        <QuizInfo quizData={quizData} setQuizData={setQuizData} />
      </div>
    </div>
  );
}
export default App;
