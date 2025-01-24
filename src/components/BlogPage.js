import React, { useEffect, useState } from 'react';
import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // Import rich text renderer
import './BlogPage.css';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE, // Environment variable
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN, // Environment variable
});

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'pageBlogPost',
        });
        setPosts(response.items);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post); // Set the selected post
  };

  return (
    <div className="blog-page">
      <h2>Blogi</h2>
      {posts.length > 0 ? (
        posts.map((post) => {
          const { title, content, featuredImage } = post.fields;
          const imageUrl = featuredImage?.fields?.file?.url;

          return (
            <div className="blog-post" key={post.sys.id} onClick={() => handlePostClick(post)}>
              <div className="blog-header" >
                {imageUrl && <img src={imageUrl} alt={title} className="blog-image" />}
                <h3 className="blog-title">{title}</h3>
              </div>
              {/* Show a short description or the "Click to read more" text */}
              {selectedPost?.sys.id === post.sys.id ? (
                <div className="blog-content">
                  {documentToReactComponents(content)} {/* Render rich text content */}
                </div>
              ) : (
                <p className="read-more">Klikkaa lukeaksesi lisää</p> // Show the "Click to read more" text
              )}
            </div>
          );
        })
      ) : (
        <p>En ole vielä julkaissut blogia, hetki pieni!</p>
      )}
    </div>
  );
};

export default BlogPage;
