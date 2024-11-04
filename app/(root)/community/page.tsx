import React from 'react';

const communitiesData = [
  { id: 1, name: 'JavaScript Enthusiasts', members: 1200, topics: 150 },
  { id: 2, name: 'React Developers', members: 900, topics: 80 },
  { id: 3, name: 'CSS Tricks', members: 600, topics: 60 },
  { id: 4, name: 'Web Accessibility Advocates', members: 500, topics: 45 },
  { id: 5, name: 'Frontend Developers', members: 700, topics: 70 },
];

const CommunityPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Community Hub</h1>
        <p className="mt-2">Join and connect with like-minded individuals!</p>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-10">
        <section className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Top Communities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {communitiesData.map(community => (
              <div
                key={community.id}
                className="bg-gray-100 shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold">{community.name}</h3>
                <p className="text-gray-600">Members: {community.members}</p>
                <p className="text-gray-600">Topics: {community.topics}</p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                  Join Community
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CommunityPage;
