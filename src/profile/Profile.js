import Header from "../header"
import Logo from '../assets/logo.png'
import {ReactComponent as ProfileFoto} from '../assets/profile.svg'
import { Element } from "./element"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { login } from "../redux/slice"

export const Profile = ({name}) => {

    const [color, setColor] = useState('bg-[#131167]')
    const [text, textColor] = useState('text-[#131167]')
    const [bg,setBg] = useState('bg-[#E5E7FD]')
    const handelOrange = () => {
        setColor('bg-[#D38122]')
        textColor('text-[#D38122]')
        setBg('bg-[#D3772238]')
    }
    const handelBlue = () => {
        setColor('bg-[#131167]')
        textColor('text-[#131167]')
        setBg('bg-[#E5E7FD]')
    }
    // mengambil dat di localStorage
    const dispatch = useDispatch();
  
    // Mengambil data pengguna dari state Redux
    const { isLoggedIn, user } = useSelector(state => state.user);
    const user2 = useSelector(state => state.user.user)
  
    useEffect(() => {
      // Jika tidak ada pengguna yang terdaftar di state Redux, coba ambil dari localStorage
      if (!isLoggedIn && !user) {
        const userFromLocalStorage = JSON.parse(localStorage.getItem('userState'));
  
        // Jika data pengguna ditemukan di localStorage, lakukan login
        if (userFromLocalStorage) {
          dispatch(login(userFromLocalStorage.user));
        }
      }
    }, [isLoggedIn, user, dispatch]);

    // const [userData, setUserData] = useState(null)
    // useEffect(() => {
    //     const userFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
    //     if (userFromLocalStorage.length > 0) {
    //         setUserData(userFromLocalStorage[0]);
    //       }
    // },[])
    return(
        <div>
            <Header  handleOutBlue={handelBlue} handleOutOrange={handelOrange}/>
            <div className={color}>
                <div className="pb-3 ">
                <div className="flex justify-between px-20">
                    <img src={Logo} className="w-20 h-20"/>
                    <ProfileFoto className="w-20 h-20"/>
                 </div>
                <div className="border  border-gray-300  w-full"/>
                </div>
            </div>
            <div className=" flex justify-center pt-10">
                <div className="w-[80%] p-5">
                <div className={`rounded-xl flex justify-center p-3 ${color}`}>
                    <div className=" text-center text-white w-[28%] ">
                        <h1 className="text-5xl pb-2">LOREM</h1>
                        <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                        </p>
                    </div>
                </div>
                <div className="flex justify-between">
                    <div className="flex text-xl font-bold items-center">
                     <ProfileFoto className='w-20' />
                     {user ? (<p>{user.username}</p>) : (<p>data tidak Ditemukan</p>)}
                    </div>
                     <div className="flex items-center">
                        <button className={`p-2 rounded-full ${text} ${bg}`}>Edit Profile</button>
                     </div>
                </div>
                <div className="mt-5 ">
                    <Element color={text} bg={bg} data={user} dataUser={user2} />
                </div>
                </div>
            </div>
            <div className={color}>
                <img src={Logo} width={'10%'}/>
            </div>
        </div>
    )
}