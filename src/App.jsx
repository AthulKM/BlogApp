import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Route, Routes } from "react-router-dom";
import Blog from "./Blog";
import Blogs from "./Blogs";
import CreateBlog from "./CreateBlog";

function App() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="header">
          <Navbar.Brand href="/">Blog Site</Navbar.Brand>
          <Nav.Link href="/blogs">Blogs</Nav.Link>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
