import React, {useState} from 'react'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../constants/'
import axios from 'axios'
import Logo from '../assets/applogo.png'
import ClockBg from '../assets/clockbg.webp'

function HomePage ({setRespData}) {
  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();


   const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

     const submitHandler = async(e) => {
        const btn = document.getElementById('submit-btn')
        btn.innerHTML = 'Loading...'
        btn.disabled = true;

        e.preventDefault();
        if (form.title === "") {
            toast.error("input fields cannot be empty");
            btn.innerHTML = 'Create countdown'
            btn.disabled = false;
            return false;
        } else {
          const hash = localStorage.getItem('hash')
          await axios.post(`${baseURL}countdown/` + hash, { ...form })
            .then((response) => {
                // console.log(response.data);
                setRespData(response.data);
                toast.success("event created");
                 setTimeout(() => {
                btn.innerHTML = 'Create countdown'
                btn.disabled = false;
                navigate(`/${response.data._id}/${response.data.title}`)
              }, 1000)
             }).catch(err => {
                toast.error('error creating event')
                console.log(err);
                  setTimeout(() => {
                  btn.innerHTML = 'Create countdown'
                  btn.disabled = false
              }, 100)
            });
        }
    };
  return (
    <div className=''>
      <div>
        <img src={Logo} alt='logo' />
      </div>
      <ToastContainer />
      <div className='flex items-center min-h-screen md:space-x-5 space-y-2 justify-center md:flex-row flex-col'>
       <div className='lg:w-[410px] md:w-[390px] w-[270px] h-[20rem]'>
         <img src={ClockBg} alt='bg' className='md:w-[401px] w-full md:h-[15rem] h-[10rem] block mx-auto' />
         <h2 className='lg:text-[2rem] md:text-[1.5rem] text-[1.2rem] font-bold md:leading-[39px] leading-8'>Create countdowns for your events fast, easy and quick</h2>
       </div>
       <div className='flex flex-col justify-center rounded-[8px] h-[21rem] p-5 bg-[#D2D4D3] shadow-md '>
        <form method='POST' onSubmit={submitHandler} className='flex flex-col space-y-5 lg:w-[400px] md:w-[18rem] w-[15rem]'>
          <input
             type='text'
             onChange={handleChange}
             placeholder='Event name'
             name='title' 
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
          <input 
             type='date'
             onChange={handleChange}  
             name='date'
             required={true}
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
          <input 
             type='time'
             onChange={handleChange} 
             name='time'
             required={true}
             className='border-2 border-[rgba(0, 0, 0, 0.5)] rounded-[7px] outline-none p-2 w-full'/>
             <button type='submit' id='submit-btn' className='bg text-white  p-2 w-full rounded-[7px] outline-none'>Create countdown</button>
        </form>
       </div>
      </div>
    </div>
  )
}

export default HomePage;
