import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {signup} from '../../Redux/Slices/AuthSlice';

function Signup() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [signupDetails, setSignupDetails] = useState({
        email: "",
        password: "",
        name: "",
        userType: "",
        userStatus: "",
        clientName: ""
    })

    function handleInputChange(e) {
        const { name, value } = e.target;
        setSignupDetails({
            ...signupDetails,
            [name]: value
        })
    }

    function handleUserType(e) {
        const userTypeSelected = e.target.textContent;
        setSignupDetails({
            ...signupDetails,
            userType: userTypeSelected,
            userStatus: (userTypeSelected === "customer") ? "approved" : "suspended"
        })
        //to automatically close the dropdown after selection
       const dropdown =  document.getElementById("userTypeDropdown") 
       dropdown.open = !dropdown.open;
    }

    function resetSignupState() {
        setSignupDetails({
            email: "",
            password: "",
            name: "",
            userType: "",
            userStatus: "",
            clientName: ""
        });
    }

    async function onSubmit() {
        if (!signupDetails.email ||
            !signupDetails.password ||
            !signupDetails.userStatus ||
            !signupDetails.clientName ||
            !signupDetails.name ||
            !signupDetails.userType) return;
        const response = await dispatch(signup( signupDetails));
        console.log(response);
        if(response.payload) navigate("/login");
        else resetSignupState( );
    }
    return (
        <div className="flex justify-center font-mono h-[90vh] items-center">

            <div className="card w-[30%] bg-primary text-primary-content">
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-4xl text-white flex justify-center">Signup</h2>
                    <input
                        onChange={handleInputChange}
                        name="name"
                        value={signupDetails.name}
                        type="text" placeholder="Name..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input
                        onChange={handleInputChange}
                        name="email"
                        value={signupDetails.email}
                        type="email" placeholder="Email id..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input
                        onChange={handleInputChange}
                        name="password"
                        value={signupDetails.password}
                        type="password" placeholder="Password..." autoComplete="one-time-code" className="input input-bordered text-white bg-neutral input-warning w-full " />

                    <details className="dropdown w-full text-white" id="userTypeDropdown">
                        <summary className="btn btn-error">{(!signupDetails.userType)? "User type" :signupDetails.userType }</summary>
                        <ul onClick={handleUserType} className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                            <li><a>customer</a></li>
                            <li><a>engineer</a></li>
                            <li><a>admin</a></li>
                        </ul>
                    </details>
                   

                    <input
                        onChange={handleInputChange}
                        name="clientName"
                        value={signupDetails.clientName}
                        type="text" placeholder="Clientname..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />

                    <div className="card-action w-[100%]">
                        <button onClick={onSubmit} className="btn btn-warning w-full mt-4 font-bold text-xl hover:bg-pink-200">Submit</button>
                    </div>
                    <p 
                    className="text-lg text-white ">Already have an account? <Link className="text-yellow-200 font-semibold hover:text-neutral" to="/login" >
                        Login Instead</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup;