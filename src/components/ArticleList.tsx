import { useBlogs } from "../shared/useBlogs";
import type { Blog } from "../types";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  onEdit: (blog: Blog) => void;
}
const ArticleList = ({ onEdit }: ArticleListProps) => {
  const { blogs, deleteBlog } = useBlogs();

  return (
    <div className="ml-20">
      {blogs.map((blog) => (
        <ArticleCard
          key={blog.id}
          article={blog}
          onDelete={() => deleteBlog(blog)}
          onEdit={() => onEdit(blog)}
        />
      ))}
    </div>
  );
};

export default ArticleList;
