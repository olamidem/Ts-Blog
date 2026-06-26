import { createContext } from "react";
import type { Blog } from "../types";

export interface BlogContextType {
  blogs: Blog[];
  addBlog: (blog: Blog) => void;
  updateBlog: (blog: Blog) => void;
  deleteBlog: (blog: Blog) => void;
}

export const BlogContext = createContext<BlogContextType | undefined>(
  undefined,
);
