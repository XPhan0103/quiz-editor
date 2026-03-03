import React from 'react';
import QuestionCard from './QuestionCard';

function QuestionList({ questions, setQuestions }) {
	const handleAddQuestion = () => {
		const newQuestion = {
			id: Date.now().toString(), // unique ID
			name: '',
			description: '',
			sortOrder: questions.length + 1,
			options: [],
		};
		setQuestions([...questions, newQuestion]);
	};

	const handleDeleteQuestion = (id) => {
		setQuestions(questions.filter((q) => q.id !== id));
	};

	const handleQuestionChange = (id, field, value) => {
		setQuestions(
			questions.map((q) => {
				if (q.id === id) {
					return { ...q, [field]: value };
				}
				return q;
			})
		);
	};

	return (
		<div className="question-list-container">
			<div className="section-header">
				<h2>Questions</h2>
				<button className="primary" onClick={handleAddQuestion}>
					+ Add Question
				</button>
			</div>

			{questions.length === 0 ? (
				<div className="card empty-state">
					<p>Have no questions. Click "Add Question" to create a new question</p>
				</div>
			) : (
				<div className="questions-list">
					{questions.map((q, index) => (
						<QuestionCard
							key={q.id}
							question={q}
							index={index}
							onDelete={handleDeleteQuestion}
							onChange={handleQuestionChange}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default QuestionList;