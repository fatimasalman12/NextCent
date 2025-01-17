import React from "react";

function PreviousComments({ comments }) {
  
    return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Previous Comments</h2>
      
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="border-b pb-4 mb-4 last:border-b-0"
            >
              <div className="flex items-center mb-2 space-x-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">{comment.name}</span>
                <span className="text-gray-500 text-sm">{comment.date}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      )}
    </div>
  );
}

export default PreviousComments;
