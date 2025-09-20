import {useRef} from 'react'

export const FocusScreen = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select();
  }

  return (
    <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-2xl font-thin text-white'>Focus Screen</h1>
        <input ref={inputRef} type="text" className='bg-white px-4 py-2 rounded-md text-black' autoFocus/>

        <button onClick={handleClick} className='bg-blue-900 rounded-md py-2 px-4 cursor-pointer transition-transform duration-200 
           hover:scale-105'>Set Focus</button>
    </div>
  )
}
