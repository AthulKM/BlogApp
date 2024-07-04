import { useContext, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BlogContext } from './BlogContext';
import { useNavigate } from 'react-router-dom';

function CreateBlog() {
  const { addBlog } = useContext(BlogContext);
  const [newTitle, setNewTitle] = useState("");
  const [blog, setBlog] = useState("");

  const navigate = useNavigate();
  
  function submitHandler(e) {
    e.preventDefault();
    addBlog(newTitle, blog);
    navigate('/blogs');
  }

  return (
    <Container className='createBlog'>
      <Form onSubmit={submitHandler}>
        Blog Title : 
        <input
          className='blogTitle'
          type="text"
          value={newTitle}
          placeholder='Title for your blog'
          onChange={(e)=>setNewTitle(e.target.value)}
        />
        <br />
        Blog Content:
        <input 
          className='blogText'
          type='text'
          value={blog}
          placeholder='Start typing your blog...'
          onChange={(e)=>setBlog(e.target.value)}
        />
        <Button type='submit'>Submit</Button>
      </Form>
    </Container>
  );
}

export default CreateBlog;
