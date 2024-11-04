import React from 'react'

const Page = () => {
  const questionsData = [
    { id: 1, title: 'How do I improve my JavaScript skills?', answers: 10, views: 150 },
    { id: 2, title: 'What is the best way to learn React?', answers: 8, views: 120 },
    { id: 3, title: 'How to optimize performance in web applications?', answers: 5, views: 100 },
    { id: 4, title: 'What are the best practices for REST APIs?', answers: 15, views: 200 },
    { id: 5, title: 'How to manage state in React applications?', answers: 12, views: 180 },
  ];

  const contributorsData = [
    { id: 1, name: 'Rohit giri', contributions: 120 },
    { id: 2, name: 'himanshu', contributions: 95 },
    { id: 3, name: 'rajan sharma', contributions: 85 },
    { id: 4, name: 'ansh', contributions: 75 },
    { id: 5, name: 'Saiyam', contributions: 60 },
  ]
  return (
    <div>

<div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Top Questions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {questionsData.map(question => (
          <div
            key={question.id}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold mb-2">{question.title}</h3>
            <p className="text-gray-600">Answers: {question.answers}</p>
            <p className="text-gray-600">Views: {question.views}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Top Contributors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {contributorsData.map(contributor => (
          <div
            key={contributor.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            <h3 className="text-lg font-semibold">{contributor.name}</h3>
            <p className="text-gray-600">Contributions: {contributor.contributions}</p>
          </div>
        ))}
      </div>
    </div>

</div>
  )
}
export default Page