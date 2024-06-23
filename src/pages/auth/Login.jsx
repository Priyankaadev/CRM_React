import { useDispatch } from "react-redux";
import {login} from '../../Redux/Slices/AuthSlice'
import { useState } from "react";

function Login() {

    const dispatch = useDispatch( );
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

    function onSubmit( ){
        if(!loginDetails.email || !loginDetails.password) return;
        const response = dispatch(login( loginDetails));
        console.log(response);
    }
    return (
      <div  className="flex justify-center font-mono h-[90vh] items-center">

            <div className="card w-[30%] bg-primary text-primary-content">
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-4xl text-white flex justify-center">Login</h2>
                    <input 
                    onChange={handleInputChange}
                    name="email"
                    type="email" placeholder="Email id..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input 
                    onChange={handleInputChange}
                    name="password"
                    type="password" placeholder="Password..." autoComplete="one-time-code" className="input input-bordered text-white bg-neutral input-warning w-full " />
                    <div className="card-action w-[100%]">
                        <button onClick={onSubmit} className="btn btn-warning w-full mt-4 font-bold text-xl hover:bg-pink-200">Submit</button>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Login;