import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axiosInstance";
import {toast} from "react-hot-toast";


const initialState= {
    role: localStorage.getItem('role') || '',
    data: JSON.parse( localStorage.getItem('data')) || undefined,
    token: localStorage.getItem('token') || '',
    isLoggedIn: localStorage.getItem('isLoggedIn') || false

};

export const login = createAsyncThunk( '/auth/login', async ( data)=>{
    try {
        console.log('data',data);
        const response =  axiosInstance.post("auth/signin", data);
        toast.promise(response,{
            loading: "Submitting form",
            success: 'Successfully logged In',
            error: 'Something went wrong, try again'
        })
        console.log('response',response);
        return await response;
    } catch (error) {
        console.log(error);
    }
})

export const signup = createAsyncThunk( '/auth/signup', async ( data)=>{
    try {
        console.log(data);
        const response =  axiosInstance.post("auth/signup", data);
        toast.promise(response,{
            loading: "Submitting form",
            success: 'Successfully signed up',
            error: 'Something went wrong, try again'
        })
        return await response;
    } catch (error) {
        console.log(error);
    }
})

const authSlice = createSlice( {
    name: 'auth',
    initialState,
    reducers : {
        logout: ( state)=>{
            localStorage.clear();
            state.role = '';
            state.isLoggedIn= false;
            state.data = undefined;
            state.token = '';
        }
    },
    extraReducers : ( builder)=>{
        builder.addCase( login.fulfilled, ( state, action)=>{
           if(action.payload?.status != "201" || !action.payload  ) return;
            state.isLoggedIn = (action.payload?.data?.token != undefined ) ;
            state.data = action.payload?.data?.userData;
            state.token = action.payload?.data?.token;
            state.role = action.payload?.data?.userData?.userType;
            localStorage.setItem('role',  action.payload?.data?.userData?.userType)
            localStorage.setItem('isLoggedIn',( action.payload?.data?.token != undefined ) );
            localStorage.setItem('data',JSON.stringify( action.payload?.data?.userData)) ;
            localStorage.setItem('token', action.payload?.data?.token);
        })
        
    }
})
export const {logout} = authSlice.actions;
export default authSlice.reducer