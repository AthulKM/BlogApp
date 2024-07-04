import {  createContext, useState } from "react";

const BlogContext = createContext({
    blog: [],
    addBlog: () => { },
});
const BlogProvider = ({ children }) => {
    
    const [blogs, setBlogs] = useState([]);

    const addBlog = (newTitle,blog) => {
        const newBlog = {
            id: Date.now(),
            newTitle,
            blog,
        };
        setBlogs([...blogs, newBlog]);
    };

    const value = { blogs, addBlog }
    return <BlogContext.Provider value={value}>
        { children}
    </BlogContext.Provider>

}
export { BlogContext,BlogProvider};