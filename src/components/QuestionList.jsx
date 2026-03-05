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

	const moveQuestionUp = (index) => {
		if (index === 0) return;
		const newQuestions = [...questions];
		const temp = newQuestions[index];
		newQuestions[index] = newQuestions[index - 1];
		newQuestions[index - 1] = temp;
		setQuestions(newQuestions);
	};

	const moveQuestionDown = (index) => {
		if (index === questions.length - 1) return;
		const newQuestions = [...questions];
		const temp = newQuestions[index];
		newQuestions[index] = newQuestions[index + 1];
		newQuestions[index + 1] = temp;
		setQuestions(newQuestions);
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
							totalQuestions={questions.length}
							onDelete={handleDeleteQuestion}
							onChange={handleQuestionChange}
							onMoveUp={() => moveQuestionUp(index)}
							onMoveDown={() => moveQuestionDown(index)}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default QuestionList;