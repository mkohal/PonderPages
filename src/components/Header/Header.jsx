import React from 'react'
import {Logo, LogoutBtn} from '../index'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux' // selector hoga to tabhi store mai jaake dekh payuga ki user logged in hai k nhi
import { useNavigate } from 'react-router-dom'
import logoImage from '../../assets/logo.png'




export default function Header() {
  const authStatus = useSelector((state)=> state.auth.status ) // 1 authenticated hai k nahi authSlice mai jaake dekho
  // state.auth.status kyuki yeh sb kuch auth under hai 
  const navigate = useNavigate()

  // 2 jb b esi koi navigation bar bnti hai na to ek array bnaya jata hai aur uske uper loop kiya jaata hai uske 
  // andr object hote hai

  const location = useLocation();

  const navItems = {
    main : [
      {
        name: "Home",
        slug : "/",
        active : true
      },
      {
        name: "About",
        slug: "/about",
        active: true
    },
    {
        name: "Contact",
        slug: "/contact",
        active: true
    },
    ],
   auth : [
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
    name: "My Feed",
    slug: "/my-feed",
    active: authStatus,
},
  {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ],
  }
  return (
    <header className="px-1 m-3 bg-gradient-to-r from-[#ffffff] to-[#a6a6a6] rounded-xl ">
      <nav className="flex justify-between items-center ">
        <div className=" mr-0 font-bold text-xl text-black">
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: "auto", height: "92px" }}
            />
          </Link>
        </div>
        <div className="">
          <ul className="flex justify-between">
            {navItems.main.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-3 py-2 m-1 text-xl font-bold rounded-xl text-black ${
                      location.pathname === item.slug
                        ? "underline underline-offset-4 decoration-2 decoration-black"
                        : "hover:underline hover:underline-offset-4 decoration-2 decoration-black"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
          </ul>
        </div>

        <div className="">
          <ul className="flex  ml-auto">
            {navItems.auth.map((item) =>
              item.active ? ( // Checks if the item.active property is true. If so, it renders the content inside the parentheses. Otherwise, it renders null.
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)} // jb onClick hoga to hume navigaten krdo item.slug ki traf
                    className={`inline-block px-3 py-2 m-1 text-xl font-bold rounded-xl text-black ${
                      location.pathname === item.slug
                        ? "underline underline-offset-4 decoration-2 decoration-black"
                        : "hover:underline hover:underline-offset-4 decoration-2 decoration-black"
                    }`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && ( // yeh ek fancy syntax hai agr authStatus true hai to Logout button dikhao vrna nahi
              <li className=" px-3 py-1.5 rounded-md mr-4 text-l font-bold border border-black text-white bg-red-500 hover:bg-red-700 transition-all duration-300 shadow flex items-center justify-center">
                <LogoutBtn />
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}





