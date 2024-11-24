import React, { useContext, useEffect, useState } from 'react'
import { userContext } from '../../Context/Usercontext';
export default function Form() {
  const [toDo, settoDo] = useState("")
  const { items, setitem , isDarkMode, setIsDarkMode} = useContext(userContext)


  function hanleitem(item) {
    setitem((items)=> [...items , item])
    localStorage.setItem("items", JSON.stringify(items))
  }
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
}, [items]);

  function handleSubmit(e) {
    e.preventDefault()
    if (!toDo) return;
    settoDo("")
    const newItem = { toDo, package:false, id: Date.now() }
    hanleitem(newItem)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
    <div  className={ ` shadow-xl ${isDarkMode ? "bg-[#25273C] text-[hsl(0,0%,73%)] " :"bg-[hsl(0,0%,98%)] text-[#25273C]"}  flex  p-5 absolute  top-[30%]  translate-x-[-50%] outline-none start-[50%] w-[80%] md:w-[60%]  lg:w-[50%]  xl:w-[40%] mx-auto   rounded-md `}>
      <input className='w-full bg-transparent outline-none' type='text' value={toDo} onChange={(e) => settoDo(e.target.value)} placeholder="create a new todo..."/>
      <button
          type="submit"
          className="absolute right-0 top-0   text-[2.5rem]  text-[hsl(0,0%,73%)]font-bold  px-4 rounded-md"
        >
          +
        </button>
    </div>
  
        
      </form>


    </>
  )
}
