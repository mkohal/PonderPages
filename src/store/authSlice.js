import { createSlice } from "@reduxjs/toolkit";

const initialState = { // 2 fir hum bnayege intialstate 
    status: false, // status false means user authenticated nahi hai 
    userData: null // user ka data koi nhi hai
}



const authSlice = createSlice({
    name : "auth", // 3 slice ko name denge
    initialState, // 4 fr denge intialstate
    reducers : {  // 5 fr denge reducers 
         
        // reducer k andr sbke pass state aur action ka access hota hai
        // action se milta hai payload, state k andr jo b value update krni hai vo intialState k bad track mai update ho jati hai
        login: (state, action) => {
            state.status = true;      // 7 agr kisi ner login kiya hai to hum state mese status nikl k use true kr denge
            state.userData = action.payload.userData;     // 8 fr userdata b add kr denge

        },
        logout: (state) => {  // action ki jarurat nhi hai yha
            state.status = false; // 9 agr koi logout kre to vapis state false krdo aur userData null
            state.userData = null;
        }


    }  
}) // 1 sabse pehle slice bnao (khali) aur yeh slice vala kam jo hum kr rhe hai vo hum 
// kr rhe hai authentication ko track krne k liye i.e user authenticated hai k nahi yeh hum store se puchege

export const {login, logout} = authSlice.actions; // 10 methods/functions(login, logout) ko hum export krte hai .actions k through
// kyuki yeh hai ek tarah se ek action he 

export default authSlice.reducer  // 6 export reducer aur hume fr reducer k individual functions b export krne honge
// kyuki alag components un functions ko use krte hai 

