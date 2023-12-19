import {ReactComponent as Profile} from '../assets/profile.svg'
import {ReactComponent as LogOut} from '../assets/logout.svg'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editProfile } from '../redux/slice'




const Input = ({type, text, name, placeholder, value, onChange}) =>{
    return(
        <div className='py-3'>
        <h1 className='pb-3 text-gray-700 font-bold'>{text}</h1>
        <input type={type} 
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='border w-full p-3 rounded-full' />
        </div>
    )
}
export const Element = ({color, bg, data, dataUser}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [editData, setEditData] = useState({
        username: dataUser.username || '',
        noHp: dataUser.noHp || '',
        password: dataUser.password || '',
        konfPassword: dataUser.konfPassword || '',
    })
    const handleSaveClick = () => {
        dispatch(editProfile(editData));
        alert('Success silahkan refress')
      };
      const handleInputChange = (e) => {
        console.log('Edited User State:', editData);
        setEditData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value,
          }));
       
      };
return(
    <div className='flex'>
        <div className=' w-[20%]'>
            <div className='flex items-center'>
            <Profile className='w-10 mr-3' />
            <h1> Profile</h1>
            </div>
            <div className='grid w-[50%] pb-20 content-end h-full'>
                <div className='pb-5 w-full'>
                <div className='border-2 w-56 absolute ' />
                </div>
            <button  onClick={() => navigate('/')} className=' p-3  rounded-full flex bg-gray-200' ><LogOut />LogOut</button>
            </div>
        </div>
        <div className='w-[80%] border-l  p-8 mb-32'>
            <div className='rounded-xl shadow-lg p-8'>
            <h1 className='text-2xl font-bold pb-3'>Edit Profile</h1>
            <div className='border w-full'/>
            <div>
                <Input text={'Nama'} 
                name={'username'}
                placeholder={data ? data.username : 'data tidak ditemukan'}
                value={editData.username}
                onChange={handleInputChange} />
                <Input text={'No Handphone'} 
                name={'noHp'}
                value={editData.noHp}
                onChange={handleInputChange}
                placeholder={data ? data.noHp : 'data tidak ditemukan'}/>
                <Input text={'Old Password'}
                name={'password'} 
                value={editData.password}
                onChange={handleInputChange}
                placeholder={data ? data.password : 'data tidak ditemukan'} />
                <Input text={'New Password'} 
                name={'konfPassword'}
                value={editData.konfPassword}
                onChange={handleInputChange}
                placeholder={data ? data.konfPassword : 'data tidak ditemukan'} />
                <button 
                onClick={handleSaveClick}
                className={`px-7 py-3 my-5 rounded-full ${color} ${bg}`}>
                    Edit profile -{'>'}
                </button>
            </div>
            </div>
        </div>
    </div>
)
}