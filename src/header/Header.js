import { useState } from 'react'
import {ReactComponent as Turnme} from '../assets/arcticons_turn-me-on.svg'
export const Header = ({handleOutOrange, handleOutBlue}) => {
    const [active, setAvtive] = useState(false)
    const [colorBlue, setColorBlue] =useState('')
    const [colorOrange, setColorOrange] = useState('text-gray-500')
    const handelBlue = () => {
        setColorBlue('text-[#131167]')
        setAvtive(true)
    }
    const handelOrange = () => {
        setColorOrange('text-[#D38122]')
        setAvtive(false)
    }
    const handleButtonHomeBlue = () => {
        handelBlue()
        handleOutBlue()
    }
    const handleButtonHomeOrange = () => {
        handelOrange()
        handleOutOrange()
    }

 return(
    <div className='flex justify-end items-center bg-white pr-4'>
        <button onClick={handleButtonHomeBlue} className={`font-bold  ${active ? colorBlue : 'text-gray-500'}`}>Blue</button>
        <Turnme  className='mx-3'/>
        <button onClick={handleButtonHomeOrange} className={`font-bold  ${active ? 'text-gray-500' : colorOrange }`}>Orange</button>
    </div>
 )
}

