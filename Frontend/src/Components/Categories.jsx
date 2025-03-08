import React from 'react';

const categories = [
  { id: 1, name: 'Keyboards', image: 'https://imgs.search.brave.com/-9q9BS8YPNTr6--VPPCbaIaskuFHFsUMjRHpZI3wO8E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA0/MjQ3Mzk2NC9waG90/by9hLWNvb2xlci1t/YXN0ZXItbWFzdGVy/a2V5cy1wcm8tbC1y/Z2ItbWVjaGFuaWNh/bC1rZXlib2FyZC10/YWtlbi1vbi1qdWx5/LTMtMjAxNy5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9NGY1/TmpWU1pRXzhtRnBa/eGE1cEtMV09aNk1L/VmtKb2Vja09STXVq/SkJxcz0' },
  { id: 2, name: 'Mouse', image: 'https://imgs.search.brave.com/jZ3o6aRFNRhE_DHu61LN7zCKssc3gmHftXEeCnzSq6U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hdHRh/Y2tzaGFyay5jb20v/Y2RuL3Nob3AvZmls/ZXMvMzMzMy5qcGc_/dj0xNzI1NzA0NzA4/JndpZHRoPTE2MDA' },
  { id: 3, name: 'SSDs', image: 'https://imgs.search.brave.com/LDPDmMwI2BJKe0vQu3YjV-BKrKiTG47qUBTWZ8GBoP0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTI4/MzA1NjYyL3Bob3Rv/L3NhbXN1bmctc3Nk/LTg1MC1ldm8tMi01/LXNhdGEtaWlpLTJ0/Yi5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9MFNIanV5YlpR/a29UUXNTbFJVUEoy/VXNobXl6anZOTG9k/cGhEWW5lUWRROD0' },
  { id: 4, name: 'PC Cabinets', image: 'https://imgs.search.brave.com/3zAIpxCYHHr2aqr80wfu5FTQ_eUSe2SZcdIi6CZxnIs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFqYWFvLmNvbS9j/ZG4vc2hvcC9maWxl/cy90aGVybWFsdGFr/ZS1wYy1jYWJpbmV0/cy10aGVybWFsdGFr/ZS1jb3JlLXA1LXRl/bXBlcmVkLWdsYXNz/LXRpLWVkaXRpb24t/YXR4LXdhbGwtbW91/bnQtY29tcHV0ZXIt/Y2hhc3Npcy0xOTEz/MjkxNjU2NDEyOS5q/cGc_dj0xNjg3ODI3/NjM2' },
];

const Categories = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white shadow-xl rounded-xl overflow-hidden transform transition duration-300 hover:scale-105">
            <img className="w-full h-56 object-cover" src={category.image} alt={category.name} />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-gray-800">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
