import React, { useEffect, useState } from 'react';
import Card from '../ui/card';
import SearchComponent from './search';

function CenterComponent() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/api/blogs')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.blogs);
      });
  }, []);

  // Filter blogs based on the search term
    const filteredBlogs = blogs.filter(b =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase())

  );

  return (
    <div>
      <SearchComponent onSearch={setSearchTerm} />
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-screen-lg mx-auto p-4">
          {filteredBlogs.map(b => (
            <Card key={b.id} id={b.id} title={b.title} desc={b.description} tags={b.tags} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CenterComponent;
