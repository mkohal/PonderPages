import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function MyPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getCurrentUserPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []); // Dependency array to prevent infinite calls

  return (
    <div className="w-full py-8">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.$id} className="w-full">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyPosts;