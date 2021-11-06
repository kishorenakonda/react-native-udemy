import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPostsList = [
    {
      title: "Blog Post #1",
    },
    { title: "Blog Post #2" },
  ];
  return (
    <BlogContext.Provider value={blogPostsList}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
