import React from 'react';
import { useCountdown } from '../hooks/useCountdown';
import logo from '../icons/logo.svg';
import facebook from '../icons/facebook.svg';
import twitter from '../icons/twitter.svg';
import whatsapp from '../icons/whatsapp.svg';
import copy from '../icons/copy.svg';
import plus from '../icons/plus.svg'
import axios from 'axios';

export default function CounterPage ({ resp, form }) {
  const respDate = resp.date;
  const respTime = resp.time;
  const respTitle = resp.title;

  const targetDate = new Date(`${respDate}, ${respTime}`);

  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  console.log(resp);
  console.log(form);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <div className='text-center flex flex-col justify-center items-center w-full h-full'>
        <nav className='flex justify-start pt-5 pl-5 pb-4 w-full'>
          <img src={logo} alt="" />
        </nav>

        <div className='mt-2 py-6'>
          <h1 className='sm:text-4xl text-3xl p-4'><span className='font-semibold'>{respTitle}</span> is coming up in</h1>
        </div>

        <div className=''>
          <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}j
          />
        </div>

        <div id="share" className='flex items-center mt-10'>
          <a className='pr-8' href=""><img src={facebook} alt="" /></a>
          <a className='pr-8' href=""><img src={twitter} alt="" /></a>
          <a className='pr-8' href=""><img src={whatsapp} alt="" /></a>
          <a href=""><img src={copy} alt="" /></a>
        </div>

        <div id="button" className='mt-14'>
          <button className='flex justify-center bg-white p-3 items-center border border-black rounded-md'><img className='mr-4' src={plus} alt="" /><span>Create Countdown</span></button>
        </div>

      </div>
    );
  }
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter p-5 text-center flex justify-between justify-items-center items-center w-9/12 pr-0">
      <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
      <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
      <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
      <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className='mr-8'>
      <div className={`${isDanger ? 'danger' : ''} flex justify-center items-center block xl:w-40 xl:h-48 lg:w-36 lg:h-44 md:w-28 md:h-36 sm:w-24 sm:h-36 w-14 h-24 bg-green-600 text-center rounded-lg sm:text-6xl text-3xl text-white`}>
        <p className=''>{value}</p>
      </div>
      <span className='mt-6 sm:text-2xl'>{type}</span>
    </div>
  );
};

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};
