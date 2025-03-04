// import React from "react";
// import appwriteService from "../appwrite/config";
// import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-100 rounded-xl p-4">
//         {/* Fixed-size container to ensure uniformity */}
//         <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-xl bg-white">
//           <img
//             src={appwriteService.getFilePreview(featuredImage)}
//             alt={title}
//             className="w-full h-full object-contain"
//           />
//         </div>
//         <h2 className="text-xl font-bold mt-2 text-center">{title}</h2>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;

import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/post/${$id}`}>
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={appwriteService.getFilePreview(featuredImage)}
          alt={title}
        />
      </Link>
      <div className="p-5">
        <Link to={`/post/${$id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {/* You can add a short description here if available */}
          Click below to read the full post.
        </p>
        <Link
          to={`/post/${$id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;