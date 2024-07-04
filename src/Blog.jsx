import { useContext } from 'react'
import { BlogContext } from './BlogContext'
import { useParams } from 'react-router-dom';


const Blog = () => {
  const {blogs} = useContext(BlogContext);
  const {id} = useParams();
  const blogDetails = blogs.find((data) => data.id === parseInt(id))
  if (!blogDetails) {
    return (
      <h2>Blog not found!</h2>
    )
  }
  return (
    <>
      <h2>{ blogDetails.title}</h2>
      <p>{ blogDetails.blog}</p>    
    
    
    
    </>
  )
}

export default Blog