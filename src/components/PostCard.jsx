import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {/* Fixed-size container to ensure uniformity */}
        <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-xl bg-white">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
        <h2 className="text-xl font-bold mt-2 text-center">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;