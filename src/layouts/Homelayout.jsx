import {BsFillMenuButtonWideFill } from 'react-icons/bs'

function Homelayout({children}){
return(
    <div className="min-h-[90vh]">
    <div className="drawer absolute left-0 right-0 hover:cursor-pointer mt-4 ml-4 ">
        <input type="checkbox"
         className="drawer-toggle  " 
         id="my-drawer" />
        <div className="drawer-content">
           
            <label htmlFor="my-drawer" >
                <BsFillMenuButtonWideFill className='hover:cursor-pointer'  size={'40px'} />
            </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
               
                <li><a>View All Tickets</a></li>
                <li><a>Dashboard</a></li>
               
               <li className='absolute bottom-8'>
                <div className='w-full flex gap-16'>
                    <button className='btn btn-primary'>Login</button>
                    <button className='btn btn-secondary'>Signup</button>
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