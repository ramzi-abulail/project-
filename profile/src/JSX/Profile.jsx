import React, { useEffect, useState } from 'react';
import axios from 'axios';
import R1 from '../img/R1.jpg'
const Profile = () => {
  const [data, setData] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/ttt'); // Replace with your JSON server URL
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  return (
    <div className=' '>
      {/* first section */}
      <div className="container mx-auto  md:w-[900px]   bg-gray-100 rounded-lg">

        <div className="grid grid-cols-1 ">
          <div className='bg-blue-100 h-40 mt-4 rounded-t-lg'>
            <div className="relative  px-4 mb-10 md:w-1/2 lg:mb-0">
              <img src={R1} className="relative z-40 object-cover w-24 md:h-24 rounded-full mt-24" /></div>
          </div>
          {data.map((user) => (
            <div key={user.id} className="bg-white p-4  flex flex-col gap-2">
              <p className='mt-6 ml-2 font-bold' > {user.name}</p>
              <p className=' ml-2' > {user.about}</p>
              <p className=' ml-2' > {user.university}</p>
              <p className=' ml-2' > {user.city}</p>
              <p className=' ml-2' > {user.country}</p>
            </div>
          ))}


          <div className='flex flex-raw mb-2 bg-white rounded-b-lg'>
            <div>
              {/* Dropdown menu */}
              <button
                onClick={toggleDropdown}
                id="dropdownDefaultButton"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl text-[15px] px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 h-8 ml-4 mb-4 "
                type="button">
                open to
              </button>

              {dropdownOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-80 dark:bg-gray-700 ">
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-xl" >
                        finding new job </a>
                      <p className=' text-gray-400 mx-4 text-s  hover:bg-gray-100'> Show recruiters and others that you are open to work .</p>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-xl">
                        hiring
                      </a>
                      <p className=' text-gray-400 mx-4 text-s  hover:bg-gray-100'> Share that you are hiring and attract qualified candidates .</p>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-xl">
                        providing service
                      </a>
                      <p className=' text-gray-400 mx-4 text-s  hover:bg-gray-100'>Showcase services you offer so new clients can discover you</p>
                    </li>
                  </ul>




                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* //first section */}

      {/* second section */}
      <div className='container mx-auto  md:w-[900px] mt-4 shadow-lg  rounded-lg bg-white'>
        <p className='p-4 font-bold text-2xl'>About</p>
        {data.map((user) => (
          <div key={user.id} className="bg-white p-4  flex flex-col gap-2 rounded-b-lg">
            <p className=' ml-2' > {user.about}</p>
          </div>
        ))}
      </div>
      {/*// second section */}
    </div>

  );
};

export default Profile;
