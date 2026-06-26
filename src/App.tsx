import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendList from "./components/TrendList";
import { BlogProvider } from "./shared/BlogContext";
import { useState } from "react";
import type { Blog } from "./types";
import Modal from "./components/Modal";
import BlogForm from "./components/BlogForm";
import ArticleList from "./components/ArticleList";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);

  const openModalForNewBlog = () => {
    setEditingBlog(null);
    setIsModalOpen(true);
  };

  const openModalForNewEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setIsModalOpen(true);
  };

  return (
    <div>
      <BlogProvider>
        <Navigation />
        <div className="flex justify-center">
          {/* Main Area */}
          <section className="mx-auto p-6">
            <div>
              <button
                onClick={openModalForNewBlog}
                className="ml-28 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
              >
                Add New Blog <IoMdAddCircle className="ml-2" />
              </button>
              {/* Article List */}
              <ArticleList onEdit={openModalForNewEdit} />

              {isModalOpen && (
                <Modal onClose={() => setIsModalOpen(false)}>
                  <BlogForm
                    existingBlog={editingBlog}
                    onClose={() => setIsModalOpen(false)}
                  />
                </Modal>
              )}
            </div>
          </section>
          <div className="w-[30%]">
            <PeopleToFollow />
            <TrendList />
            <TopicsList />
          </div>
        </div>
      </BlogProvider>
    </div>
  );
};

export default App;
