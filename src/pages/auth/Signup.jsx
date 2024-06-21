function Signup() {
    return (
        <div className="flex justify-center font-mono h-[90vh] items-center">

            <div className="card w-[30%] bg-primary text-primary-content">
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-4xl text-white flex justify-center">Signup</h2>
                    <input type="text" placeholder="Username..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input type="email" placeholder="Email id..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input type="password" placeholder="Password..." autoComplete="one-time-code" className="input input-bordered text-white bg-neutral input-warning w-full " />
                    <details className="dropdown w-full text-white">
                        <summary className="btn btn-error">User type</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-48">
                            <li><a>Customer</a></li>
                            <li><a>Engineer</a></li>
                        </ul>
                    </details>
                    <div className="card-action w-[100%]">
                        <button className="btn btn-warning w-full mt-4 font-bold text-xl hover:bg-white">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;