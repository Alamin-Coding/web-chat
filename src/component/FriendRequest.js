import React from 'react';

const FriendRequest = (props) => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-3 items-center py-3 border-b border-b-border last:border-none last:pb-0'>
        <div className='w-14 h-14 rounded-full after:w-3 after:h-3 after:rounded-full '>
            <img src={props.src} alt="group img" />
        </div>
        <div>
            <h4 className='text-lg leading-7 text-black font-poppins font-semibold '>{props.name}</h4>
            <span className='text-sm leading-5 text-gray-500 font-poppins font-medium'>{props.message}</span>
        </div>
        <div className='pr-1'>
            <span className='text-[#808080] text-xs font-open leading-6 rounded mb-3' >{props.last_message_date_time}</span>
        </div>
    </div>
  )
}

export default FriendRequest