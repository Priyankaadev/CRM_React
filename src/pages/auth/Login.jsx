import { useDispatch } from "react-redux";
import {login} from '../../Redux/Slices/AuthSlice'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const dispatch = useDispatch( );
    const navigate = useNavigate( );
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: "",
    } )
    
    function handleInputChange(e ){
        const {name, value} = e.target;
        console.log(name, value);
        setLoginDetails({
            ...loginDetails,
            [name] : value
        } )
    }

    function resetLoginState( ){
        setLoginDetails( {
            email: "",
            password: "",
        } );
    }

    async function onSubmit( ){
        if(!loginDetails.email || !loginDetails.password) return;
        const response = await dispatch(login( loginDetails));
        console.log(response);
        if(response.payload) navigate("/");
        else resetLoginState( );
    }
    return (
      <div  className="flex justify-center font-mono h-[90vh] items-center">

            <div className="card w-[30%] bg-primary text-primary-content">
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-4xl text-white flex justify-center">Login</h2>
                    <input 
                    onChange={handleInputChange}
                    name="email"
                    value={loginDetails.email}
                    type="email" placeholder="Email id..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input 
                    onChange={handleInputChange}
                    name="password"
                    value={loginDetails.password}
                    type="password" placeholder="Password..." autoComplete="one-time-code" className="input input-bordered text-white bg-neutral input-warning w-full " />
                    <div className="card-action w-[100%]">
                        <button onClick={onSubmit} className="btn btn-warning w-full mt-4 font-bold text-xl hover:bg-pink-200">Submit</button>
                    </div>
                    <p 
                    className="text-lg text-white ">Don't have an account? <Link className="text-yellow-200 font-semibold hover:text-neutral" to="/signup" >SignUp Instead</Link></p>
                </div>
            </div>
       </div>
    )
}

export default Login;