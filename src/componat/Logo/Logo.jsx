import React, { useContext } from 'react';
import { userContext } from '../../Context/Usercontext';
import logoDark from '../../assets/bg-desktop-dark.jpg';
import logoLight from '../../assets/bg-desktop-light.jpg';

export default function Logo() {
  const { isDarkMode, setIsDarkMode } = useContext(userContext);
  const logo = isDarkMode ? logoDark : logoLight;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // التبديل بين الوضع المظلم والفاتح
  };

  return (
    <section className={isDarkMode ? 'bg-[#25273C] text-white' : 'bg-white text-black'}>
      <div className="bg-cover h-[25rem] bg-no-repeat bg-center flex justify-center items-center" style={{ backgroundImage: `url(${logo})` }}>
        <div className='flex justify-between w-[80%] md:w-[60%]  lg:w-[50%]  xl:w-[40%] mx-auto '>
        <h2 className='text-4xl font-bold '>T O D O</h2>
          <button className='p-3' onClick={toggleDarkMode}>
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                <path fill="#000" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
