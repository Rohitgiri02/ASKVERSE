import React from 'react';

// Define types for data structures
interface Question {
  id: number;
  title: string;
  answers: number;
  views: number;
  tags: string[];
}

interface Contributor {
  id: number;
  name: string;
  contributions: number;
}

// Define props types for the components
interface QuestionCardProps {
  title: string;
  answers: number;
  views: number;
  tags: string[];
}

interface ContributorCardProps {
  name: string;
  contributions: number;
}

// QuestionCard Component
const QuestionCard: React.FC<QuestionCardProps> = ({ title, answers, views, tags }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <div className="flex flex-wrap gap-2 mb-2">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="text-gray-600">Answers: {answers}</p>
    <p className="text-gray-600">Views: {views}</p>
  </div>
);

// ContributorCard Component
const ContributorCard: React.FC<ContributorCardProps> = ({ name, contributions }) => (
  <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105">
    <h3 className="text-lg font-semibold">{name}</h3>
    <p className="text-gray-600">Contributions: {contributions}</p>
  </div>
);

// Main Page Component
const Page: React.FC = () => {
  const questionsData: Question[] = [
    {
      id: 1,
      title: 'How do I improve my JavaScript skills?',
      answers: 10,
      views: 150,
      tags: ['JavaScript', 'Programming', 'Tips'],
    },
    {
      id: 2,
      title: 'What is the best way to learn React?',
      answers: 8,
      views: 120,
      tags: ['React', 'JavaScript', 'Frontend'],
    },
    {
      id: 3,
      title: 'How to optimize performance in web applications?',
      answers: 5,
      views: 100,
      tags: ['Performance', 'Web', 'Optimization'],
    },
    {
      id: 4,
      title: 'What are the best practices for REST APIs?',
      answers: 15,
      views: 200,
      tags: ['REST API', 'Backend', 'Best Practices'],
    },
    {
      id: 5,
      title: 'How to manage state in React applications?',
      answers: 12,
      views: 180,
      tags: ['React', 'State Management', 'Frontend'],
    },
  ];

  const contributorsData: Contributor[] = [
    { id: 1, name: 'Rohit Giri', contributions: 120 },
    { id: 2, name: 'Himanshu', contributions: 95 },
    { id: 3, name: 'Rajan Sharma', contributions: 85 },
    { id: 4, name: 'Ansh', contributions: 75 },
    { id: 5, name: 'Saiyam', contributions: 60 },
  ];

  return (
    <div>
      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Top Questions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {questionsData.map((question) => (
            <QuestionCard key={question.id} {...question} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">Top Contributors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {contributorsData.map((contributor) => (
            <ContributorCard key={contributor.id} {...contributor} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
