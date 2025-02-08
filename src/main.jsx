import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux"; // 1 provider import
import store from "./store/store.js"; // 2 store import
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { AuthLayout } from "./components/index.js";

import AddPost from "./pages/AddPost.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";
import Login from "./pages/Login.jsx";

import Post from "./pages/Post.jsx";

import MyPosts from "./pages/MyPosts.jsx";
import MyFeed from "./pages/MyFeed.jsx";
import { About } from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            {/*login krne k liye authentication chahiye k nahi - yha nahi chahiye to yeh ek check hai iske according routing hogi*/}
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            {" "}
            {/* iski routing b ho jayegi false authication k sath*/}
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/my-feed",
        element: (
          <AuthLayout authentication>
            {" "}
            {/*iski routing k liye true chahiye authentication*/} <MyFeed />
          </AuthLayout>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <AuthLayout authentication>
            {" "}
            {/*iski routing k liye true chahiye authentication*/} <MyPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            {/* iske liye b true*/} <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/*3 app ko provider mai wrap kr denge */}
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
