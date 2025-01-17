import React from "react";
import Button from "../ui/button";

function CommentSection() {
  
    return (
    <div className="flex flex-col md:flex-row items-start md:items-center max-w-4xl mx-auto p-6 mt-8">
      {/* Illustration */}
      <div className="flex justify-center mb-4">
        <img
          src="/images/pana.png" // Replace with the actual path to your image
          alt="Illustration"
          className="w-[480px] hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Comment Section */}
      <div className="bg-[#f8f3f3] p-6 rounded-lg shadow-sm w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Leave a Comment
        </h2>
        <p className="text-gray-600 mb-6">
          Share your thoughts or feedback on this blog post.
        </p>

        {/* Comment Form */}
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-gray-700 font-medium mb-2"
            >
              Comment
            </label>
            <textarea
              id="comment"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your comment here"
            ></textarea>
          </div>
          <div className="flex justify-center ml-[-20px]">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentSection;
