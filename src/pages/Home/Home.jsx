import { useEffect, useState } from 'react';
import Card from '../../components/Card';
import Homelayout from '../../layouts/Homelayout';
import { BsFillPencilFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getAllTicketsForTheUser } from '../../Redux/Slices/TicketSlice';


function Home() {

    const authState = useSelector((state)=>state.auth);
    const ticketsState = useSelector((state)=> state.tickets)
   
    const dispatch = useDispatch();

    async function loadTickets(){
     const response = await dispatch(getAllTicketsForTheUser())
     console.log(response);
    }

    useEffect(()=>{
        loadTickets();
    },[authState.token])

    return (
        <Homelayout>
           <div className='flex gap-5'>
            <Card>
                <BsFillPencilFill className="inline mr-2  " />
            </Card>
           
            <Card background='bg-yellow-200' fontColor='text-black' divider='bg-black' bordercolor='border-success'>
                <BsFillPencilFill className="inline mr-2  " />
            </Card>
            <Card background='bg-pink-300' fontColor='text-black' divider='bg-black' bordercolor='border-warning'>
                <BsFillPencilFill className="inline mr-2  " />
            </Card>
            </div>
          
        </Homelayout>
    );
}

export default Home;