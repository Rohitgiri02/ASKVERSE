"use client";
import React, { useState } from 'react';

const questionsData = [
  {
    id: 1,
    question: "What is the best way to learn React?",
    user: { name: "Rohit Giri", dp: "https://th.bing.com/th/id/OIP.-4LSDLHLzXzYGas3VRUKYwHaHa?w=173&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" },
    tags: ['React', 'JavaScript'],
  },
  {
    id: 2,
    question: "How do I improve my CSS skills?",
    user: { name: "Rajan", dp: "https://randomuser.me/api/portraits/men/23.jpg" },
    tags: ['CSS', 'Design'],
  },
  {
    id: 3,
    question: "Can you explain closures in JavaScript?",
    user: { name: "Laksh", dp: "https://randomuser.me/api/portraits/men/34.jpg" },
    tags: ['JavaScript', 'Closures'],
  },
  {
    id: 4,
    question: "What are the best practices for async/await in JavaScript?",
    user: { name: "me", dp: "https://randomuser.me/api/portraits/women/11.jpg" },
    tags: ['JavaScript', 'Async'],
  },
  {
    id: 5,
    question: "How do I optimize performance in React?",
    user: { name: "you", dp: "https://randomuser.me/api/portraits/women/12.jpg" },
    tags: ['React', 'Performance'],
  },
  {
    id: 6,
    question: "What is the difference between null and undefined?",
    user: { name: "we", dp: "https://randomuser.me/api/portraits/men/25.jpg" },
    tags: ['JavaScript'],
  },
];

const QuestionsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState(questionsData);

  // Handle search input and filter questions by tags or keywords in the question
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter questions based on the query matching tags or question text
    const filtered = questionsData.filter((question) =>
      question.question.toLowerCase().includes(query) ||
      question.tags.some(tag => tag.toLowerCase().includes(query))
    );

    setFilteredQuestions(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Ask Question Button */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-900">Questions on Askverse</h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition duration-200">
          Ask a Question
        </button>
      </div>

      {/* Search/Filter Section */}
      <div className="mb-6 flex justify-center">
        <div className="flex items-center border p-2 rounded-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 shadow-md bg-gray-50">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search questions or tags..."
            className="outline-none w-full px-3 py-2 text-sm text-gray-700 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Displaying the filtered questions in a flexible grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredQuestions.map((question) => (
          <div
            key={question.id}
            className="flex flex-col p-4 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-all duration-200"
          >
            {/* User Profile Picture (Smaller size) */}
            <img
              src={question.user.dp}
              alt={question.user.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 mb-3"
            />
            {/* Question Content */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-base font-medium text-gray-600">{question.user.name}</h3>
              <p className="text-sm font-semibold text-gray-900">{question.question}</p>
              {/* Tags */}
              <div className="flex flex-wrap space-x-2 mt-2">
                {question.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsList;
