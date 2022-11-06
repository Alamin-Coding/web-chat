import React from 'react';

const UserList = (props) => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-3 items-center py-3 border-b border-b-border last:border-none last:pb-0'>
        <div className='w-14 h-14 rounded-full overflow-hidden '>
            <img  src={props.src} alt="group img" />
        </div>
        <div>
            <h4 className='text-lg leading-7 text-black font-poppins font-semibold '>{props.name}</h4>
            <span className='text-sm leading-5 text-gray-500 font-poppins font-medium'>{props.date_time}</span>
        </div>
        <div className='pr-1'>
            <button className='text-white text-xs font-open leading-6 rounded px-2 bg-primary' >+</button>
        </div>
    </div>
  )
}

export default UserList