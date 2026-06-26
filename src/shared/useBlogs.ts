import { useContext } from "react";
import { BlogContext } from "./BlogContextInterface";

export const useBlogs = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error("UseBlogs must be used within a provider");
  }
  return context;
};
