import React from 'react';
import { useRouter } from 'next/router';
import fs from 'fs';
import path from 'path';
import HeaderComponent from '@/components/main/navbar';
import CommentSection from '@/components/main/comment';
import PreviousComments from "@/components/main/prevcomments";

function DetailedBlogPage({ blog }) {
  const router = useRouter();
  const sampleComments = [
    { name: "John Doe", date: "2024-11-01", content: "Great article! Really insightful." },
    { name: "Alice Smith", date: "2024-11-05", content: "I learned a lot from this blog post. Thanks!" },
  ];
  // Handle fallback state during page generation
  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  // Display message if blog post is not found
  if (!blog) {
    return <p>Blog post not found</p>;
  }

  return (
    <div className="min-h-screen text-gray-900">
      <HeaderComponent />

      <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row items-start">
        
        {/* Blog content */}
        <div className="md:w-2/3">
          <h1 className="text-center md:text-left text-4xl font-bold text-gray-800 mb-6">{blog.title}</h1>
          <div className="text-center md:text-left text-gray-500 mb-4">
            <p><strong>Author:</strong> {blog.author}</p>
            <p><strong>Date:</strong> {blog.date} | <strong>Time:</strong> {blog.time}</p>
          </div>

          <p className="text-lg text-gray-700 font-semibold mb-6">{blog.description}</p>
          
          <div className="prose prose-lg max-w-none text-gray-700">
            {blog.content}
          </div>

          {/* Tags */}
          <div className="mt-8 flex space-x-2 ">
            {blog.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Illustration */}
        <div className="mt-12 flex justify-center">
          <img 
            src="/images/Illustration.png" // Replace with the actual path to your image
            alt="Illustration"
            className="w-full max-w-sm ml-10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
      <div>
        <CommentSection/>
      </div>
      <div>
        <PreviousComments comments={sampleComments} />
      </div>

    </div>
  );
}

// Fetches blog data based on `id`
export async function getStaticProps(context) {
  const { id } = context.params;

  // Read the JSON file directly
  const filePath = path.join(process.cwd(), 'data', 'blog-data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  // Find the blog post by id
  const blog = data.find(b => b.id.toString() === id.toString());

  return {
    props: {
      blog: blog || null,
    },
    revalidate: 60, // Re-generate page every 60 seconds if data changes
  };
}

// Generates paths for each blog post based on `id`
export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'data', 'blog-data.json');
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  // Create paths array for each blog post using its `id`
  const paths = data.map((blog) => ({
    params: { id: blog.id.toString() },
  }));

  return {
    paths,
    fallback: 'blocking', // Generate pages for new paths not in `paths` array
  };
}

export default DetailedBlogPage;
