import { useState, type ReactNode } from "react";
import type { Blog } from "../types";
import { BlogContext } from "./BlogContextInterface";

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<Blog[]>([]); // your state here

  const addBlog = (blog: Blog) => {
    setBlogs((prev) => [...prev, blog]);
    // setBlogs([...bog, blog]);
  };
  const updateBlog = (updatedBlog: Blog) => {
    setBlogs((prev) =>
      prev.map((blog) => (blog.id === updatedBlog.id ? updatedBlog : blog)),
    );
    //   setBlogs(blogs.map((blog)=>blog.id === updatedBlog.id ? updatedBlog:blog)),
    // );
  };
  const deleteBlog = (blogToDelete: Blog) => {
    setBlogs((prev) => prev.filter((blog) => blog.id !== blogToDelete.id));
    // setBlogs(blogs.filter((blog)=>blog.id !== blogToDelete.id));
  };
  return (
    <BlogContext.Provider value={{ addBlog, blogs, deleteBlog, updateBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
