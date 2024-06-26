import { BsFillMenuButtonWideFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';

function Homelayout({ children }) {

    const authState = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    function onLogout() {
        dispatch(logout());
        navigate('/login')
    }


    return (
        <div className="min-h-[90vh]">
            <div className="drawer absolute left-0 right-0 hover:cursor-pointer mt-4 ml-4 ">
                <input type="checkbox"
                    className="drawer-toggle  "
                    id="my-drawer" />
                <div className="drawer-content">

                    <label htmlFor="my-drawer" >
                        <BsFillMenuButtonWideFill className='hover:cursor-pointer' size={'40px'} />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

                        <li><a>View All Tickets</a></li>
                        <li><a>Dashboard</a></li>

                        <li className='absolute bottom-8'>
                            <div className='w-full flex gap-16'>
                                {
                                    !authState.isLoggedIn ? (
                                        <>
                                            <Link to={'/login'} className='btn btn-primary'> Login</Link>
                                            <Link to={'/signup'} className='btn btn-secondary'>Signup</Link>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={onLogout} className='btn btn-primary'>   Logout</button>
                                            <Link className='btn btn-secondary '>  Profile</Link>

                                        </>
                                    )
                                }

                            </div>
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex items-start justify-center ">
                <div>
                    {children}
                </div>

            </div>

        </div>
    )
}
export default Homelayout;