import React from 'react'

const GroupsRequest = (props) => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-3 items-center'>
        <div className='w-[70px] h-[70px] rounded-full overflow-hidden '>
            <img src={props.src} alt="group img" />
        </div>
        <div>
            <h4 className='text-lg leading-7 text-black font-poppins font-semibold '>{props.group_name}</h4>
            <span className='text-sm leading-5 text-gray-500 font-poppins font-medium'>{props.last_massage}</span>
        </div>
        <div>
            <button className='text-white text-xs font-open leading-6 rounded px-2 bg-primary' >Accept</button>
        </div>
    </div>
  )
}

export default GroupsRequest