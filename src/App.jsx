import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux' // yeh react-redux se ayega
import './App.css'
import authService from './appwrite/auth' // 3 yeh import krege services k liye
import { login } from './store/authSlice' // 8 jo method dispatch krna hai vo hum import kr lenge
import { logout } from './store/authSlice' 
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

import { useLocation } from 'react-router-dom';
import bgImage from './assets/bgImage.png'

function App() {

  const [loading, setLoading] = useState(true) // 1 loading state is liye bnai kyuki jb hum application se data 
  // fetch krege to appwrite thoda time lga sakta hai data bhejne mai isliye loading state bna k hum conditional rendering kr 
  // sakte hai if else lga k, agr loading true hai to loading ka icon dikha sakte hai agr true nahi hai to data dikhayege,
  // yha hum ise true rakhege kyuki hum useEffect use krege to vo koi kam krege data show krne k liye

  const location = useLocation();

  const dispatch = useDispatch() //2

  useEffect(()=>{ // 4 yeh sbse pehle run hota hai project mai 
    authService.getCurrentUser() // 5 pehle hum check krege ki current user hai ki nhi
    .then((userData)=>{ // 6 fr .then() mai response recieve krege 
      if(userData){ // 7 agr userData aya hai to hum dispatch krege
        dispatch(login({userData}))  // 8 login k andr hum ek object pass krege jiske andr hoga userData
      } else {
        dispatch(logout()) // 9 agr hume koi data/ response nahi mila to hum ek activity he call krva dete hai
        // logout taki atleast humara state he update hojaye k ab aap login nahi ho
      }
    })
    .finally(()=> setLoading(false)) // 10 iske bad loading false kr denge kyuki ab humara loading ka kam ho chuka hai 

  }, [])

  const isHomePage = location.pathname === '/'; 

return !loading ? ( 
  <div className='min-h-screen flex flex-col'> {/* Ensure this expands based on content */}
    <div className='flex-grow w-full block bg-gradient-to-r from-[#8c52ff] to-[#5ce1e6]'
      style={{
        backgroundImage: isHomePage ? `url(${bgImage})` : null ,
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh' 
      }}>
      <Header />
      <main className='flex-grow'> {/* Ensure main grows with the content */}
        <Outlet />
      </main>
    </div>
    <Footer/> {/* Footer stays at the bottom, outside of the content */}
  </div>
) : null;
}
  


export default App;


