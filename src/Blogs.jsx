import  { useContext } from 'react'
import {BlogContext } from './BlogContext'
import { Link } from 'react-router-dom';




const Blogs = () => {
  const {blogs} = useContext(BlogContext); 
  return (
    <div id='blogsHead'>
      <h1>Blogs</h1>
      {blogs.map(blog => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.newTitle}</h3>
          </Link>
        </div>
      )

      )}
    </div>
  );
}
export default Blogs;

