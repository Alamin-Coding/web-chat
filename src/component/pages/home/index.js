import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { GoHome } from 'react-icons/go';
import { BsFillChatRightTextFill, BsBell, BsThreeDotsVertical } from 'react-icons/bs';
import { SlSettings } from 'react-icons/sl';
import { BiSearchAlt2 } from 'react-icons/bi';
import { getAuth, signOut } from "firebase/auth";
import GroupsRequest from '../../GroupsRequest';
import FriendRequest from '../../FriendRequest';
import UserList from '../../UserList';
import BlockedUser from '../../BlockedUser';
// import profile_img from '../../../../public/images/profile.png'
const Home = () => {
  const auth = getAuth();
  const data = useSelector((state) => state.userLoginInfo.userInfo);
  const navigate = useNavigate();

  const handleLogOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem("userInfo");
      // state = null;
      navigate("/login");
    })
  }


  useEffect(() => {
    if (!data) {
      navigate("/login")
    }
  }, [])
  return (
    <div className='grid gap-3 md:gap-6 grid-flow-row-dense grid-cols-12 px-3'>
      {/* Menu */}
      <div className='sticky top-0 col-span-12 sm:col-span-2 bg-primary h-screen rounded-sm md:rounded-2xl flex flex-col justify-between items-center py-7' >
          <div className='w-12 md:w-20 lg:w-[100px] h-12 md:h-20 lg:h-[100px] rounded-full bg-white border border-white cursor-pointer'>
            <img src="images/profile.png" alt="profile pic" />
          </div>

          <div className='relative z-10 px-11 py-5 rounded-md hover:bg-white group after:h-full after:w-[183px] after:z-[-1] after:bg-white after:rounded-md after:absolute after:top-2/4 after:right-[-47px] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 after:rounded-tr-none after:rounded-br-none before:w-2 before:h-full before:bg-primary before:rounded-tl-md before:rounded-bl-md before:absolute before:top-2/4 before:right-[-47px] before:-translate-y-2/4 before:z-20'>
            <GoHome className='text-5xl text-white cursor-pointer group-hover:text-primary' />
          </div>
          

          <div className='relative z-10 px-11 py-5 rounded-md hover:bg-white group after:h-full after:w-[183px] after:z-[-1] after:bg-white after:rounded-md after:absolute after:top-2/4 after:right-[-47px] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 after:rounded-tr-none after:rounded-br-none before:w-2 before:h-full before:bg-primary before:rounded-tl-md before:rounded-bl-md before:absolute before:top-2/4 before:right-[-47px] before:-translate-y-2/4 before:z-20'>
            <BsFillChatRightTextFill className='text-5xl text-white cursor-pointer group-hover:text-primary' />
          </div>

          <div className='relative z-10 px-11 py-5 rounded-md hover:bg-white group after:h-full after:w-[183px] after:z-[-1] after:bg-white after:rounded-md after:absolute after:top-2/4 after:right-[-47px] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 after:rounded-tr-none after:rounded-br-none before:w-2 before:h-full before:bg-primary before:rounded-tl-md before:rounded-bl-md before:absolute before:top-2/4 before:right-[-47px] before:-translate-y-2/4 before:z-20'>
            <BsBell className='text-5xl text-white cursor-pointer group-hover:text-primary' />
          </div>

          <div className='relative z-10 px-11 py-5 rounded-md hover:bg-white group after:h-full after:w-[183px] after:z-[-1] after:bg-white after:rounded-md after:absolute after:top-2/4 after:right-[-47px] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 after:rounded-tr-none after:rounded-br-none before:w-2 before:h-full before:bg-primary before:rounded-tl-md before:rounded-bl-md before:absolute before:top-2/4 before:right-[-47px] before:-translate-y-2/4 before:z-20'>
            <SlSettings className='text-5xl text-white cursor-pointer group-hover:text-primary' />
          </div>

          <div className='relative z-10 px-11 py-5 rounded-md hover:bg-white group after:h-full after:w-[183px] after:z-[-1] after:bg-white after:rounded-md after:absolute after:top-2/4 after:right-[-47px] after:translate-y-[-50%] after:opacity-0 hover:after:opacity-100 after:rounded-tr-none after:rounded-br-none before:w-2 before:h-full before:bg-primary before:rounded-tl-md before:rounded-bl-md before:absolute before:top-2/4 before:right-[-47px] before:-translate-y-2/4 before:z-20'>
            <MdLogout className='text-5xl text-white cursor-pointer group-hover:text-primary' onClick={handleLogOut} />
          </div>

          <div>
            
          </div>
      </div>


      {/* Items */}
      <div className='col-span-12 sm:col-span-10'>
        <div className='grid gap-3 md:gap-5 grid-flow-row-dense grid-cols-10'>
          {/* 01 */}
          <div className='col-span-10 md:col-span-4 bg-white rounded-sm md:rounded-2xl '>
            <div className='grid grid-cols-[auto_1fr_auto] items-center rounded myshadow pl-5 pr-3 mb-3 '>
              <span>
                <BiSearchAlt2 className='text-black cursor-pointer text-xl'/>
              </span>
              <span>
                <input className='p-4 w-full text-base leading-6 font-medium font-poppins' type="search" placeholder='Search' />
              </span>
              <span className='text-right'>
                <BsThreeDotsVertical className='text-primary cursor-pointer'/>
              </span>
            </div>

            <div className=' px-5 py-5 rounded-xl mb-7 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>Groups Request</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-60'>
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-2.png" group_name="Friends Forever" last_massage="Good to see you." />
                <GroupsRequest src="./images/group-3.png" group_name="Crazy Cousins" last_massage="What plans today?" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
                <GroupsRequest src="./images/group-1.png" group_name="Friends Reunion" last_massage="Hi Guys, Whats up!" />
              </div>
            </div>

            <div className=' px-5 py-5 rounded-xl mb-7 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>Friend  Request</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-[19.3rem]'>
                <GroupsRequest src="./images/request-1.png" group_name="Raghav" last_massage="Dinner?" />
                <GroupsRequest src="./images/request-2.png" group_name="Swathi" last_massage="Sure" />
                <GroupsRequest src="./images/request-3.png" group_name="Kiran" last_massage="Hi!" />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
                <GroupsRequest src="./images/request-1.png" group_name="Tejeshwini C" last_massage="I will call him today." />
              </div>
            </div>

          </div>
          {/* 02 */}
          <div className='col-span-10 md:col-span-3 rounded-sm md:rounded-2xl'>
            <div className=' px-5 py-5 rounded-xl mb-7 last:mb-0 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>Friend  Request</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-[19.3rem]'>
                <FriendRequest src="./images/request-1.png" name="Raghav" message="Dinner?" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-2.png" name="Swathi" message="Sure" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-3.png" name="Kiran" message="Hi!" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
              </div>
            </div>
            <div className=' px-5 py-5 rounded-xl mb-7 last:mb-0 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>My Groups</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-[19.3rem]'>
                <FriendRequest src="./images/request-1.png" name="Raghav" message="Dinner?" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-2.png" name="Swathi" message="Sure" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-3.png" name="Kiran" message="Hi!" last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
                <FriendRequest src="./images/request-1.png" name="Tejeshwini C" message="I will call him today." last_message_date_time="Today, 12:22pm" />
              </div>
            </div>
          </div>
          {/* 03 */}
          <div className='col-span-10 md:col-span-3 rounded-sm md:rounded-2xl'>
          <div className=' px-5 py-5 rounded-xl mb-7 last:mb-0 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>User List</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-[19.3rem]'>
                <UserList src="./images/request-1.png" name="Raghav" date_time="Today, 12:22pm" />
                <UserList src="./images/request-2.png" name="Swathi" date_time="Today, 12:22pm" />
                <UserList src="./images/request-3.png" name="Kiran" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <UserList src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
              </div>
            </div>
            <div className=' px-5 py-5 rounded-xl mb-7 last:mb-0 myshadow'>
              <div className='grid grid-cols-[1fr_auto] items-center pb-1'>
                <h3 className='leading-none text-poppins text-xl text-black font-semibold'>Blocked Users</h3>
                <span className='w-1'>
                  <BsThreeDotsVertical className='text-primary cursor-pointer'/>
                </span>
              </div>
              <div className='overflow-y-auto max-h-[19.3rem]'>
                <BlockedUser src="./images/request-1.png" name="Raghav" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-2.png" name="Swathi" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-3.png" name="Kiran" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
                <BlockedUser src="./images/request-1.png" name="Tejeshwini C" date_time="Today, 12:22pm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home