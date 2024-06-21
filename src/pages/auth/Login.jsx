function Login() {
    return (
      <div  className="flex justify-center font-mono h-[90vh] items-center">

            <div className="card w-[30%] bg-primary text-primary-content">
                <div className="card-body flex flex-col items-center">
                    <h2 className="card-title text-4xl text-white flex justify-center">Login</h2>
                    <input type="email" placeholder="Email id..." autoComplete="one-time-code" className="input  input-bordered text-white bg-neutral input-warning w-full " />
                    <input type="password" placeholder="Password..." autoComplete="one-time-code" className="input input-bordered text-white bg-neutral input-warning w-full " />
                    <div className="card-action w-[100%]">
                        <button className="btn btn-warning w-full mt-4 font-bold text-xl hover:bg-pink-200">Submit</button>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Login;