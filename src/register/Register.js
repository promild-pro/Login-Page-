import Input from "../components/Input"
import Header from "../header"
import Logo from '../assets/logo.png'
import { ButtonLogin } from "../components/Input/Input"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { register } from "../redux/slice"


export const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [shoPassword, setShowPassword] = useState(false)
    const handleEye = () => {
        setShowPassword(!shoPassword)
    }
    const [shoPassword1, setShowPassword1] = useState(false)
    const handleEye1 = () => {
        setShowPassword1(!shoPassword1)
    }
    const [color, setColor] =useState('bg-[#131167]')

    const handelOrange = () => {
        setColor('bg-[#D38122]')
    }
    const handelBlue = () => {
        setColor('bg-[#131167]')
    }

    // handle register
    const [username, setUsername] = useState('')
    const [noHp, setNo] = useState('')
    const [password, setPassword] = useState('')
    const [konfPassword, setKonfPassword] = useState('')

    const handleRegister = () => {
        const usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];

        const isUserExist = usersFromLocalStorage.some(user => user.username === username);

        if (isUserExist) {
        console.log('Registration failed: User already exists');
        } else {
        const newUser = { username, password, noHp, konfPassword };
        usersFromLocalStorage.push(newUser);
        localStorage.setItem('users', JSON.stringify(usersFromLocalStorage));

        dispatch(register(newUser));

        alert('Registration Success');
        }
        navigate('/')
        
    }

    return(
        <div>
            <Header handleOutOrange={handelOrange} handleOutBlue={handelBlue} />
                <img src={Logo} width={'25%'} height={'25%'} className="absolute" />
            <div className={`flex justify-center items-center ${color}`} >
                <div className="w-[35%] text-white m-[5%]">
                    <h1 className=" text-6xl font-bold my-5">Daftarkan Akun </h1>
                    <p>Daftar akun anda  dengan mengisi form dibawah</p>
                    <Input 
                    text={'Nama Anda'} 
                    type={'text'} 
                    placeholder={'Ketik Nama Anda disini...'} 
                    className={'text-white'} 
                    border={'border border-white'} 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input 
                    text={'Nomor Handphone'} 
                    type={'text'} 
                    placeholder={'Nomor Handphone Anda...'} 
                    className={'text-white'} 
                    border={'border border-white'}
                    value={noHp}
                    onChange={(e) => setNo(e.target.value)}
                    />
                    <Input text={'Password'} 
                    type={shoPassword ? 'text' : 'password'}  
                    placeholder={'Masukkan Password Anda...'} 
                    className={'text-white'} 
                    border={'border border-white'} showEyeRegister 
                    handleEyeRegister={handleEye} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                    <Input 
                    text={'Konfirmasi Password'} 
                    type={shoPassword1 ? 'text' : 'password'}  
                    placeholder={'Masukkan Kembali Password Anda...'} 
                    className={'text-white'} 
                    border={'border border-white'} 
                    showEyeRegister  
                    handleEyeRegister={handleEye1}
                    value={konfPassword}
                    onChange={(e) => setKonfPassword(e.target.value)} />
                    <div className="w-full my-5">
                        <ButtonLogin text={'Daftar Sekarang'} background={'bg-white text-black'}
                        handleOnClick={handleRegister}
                         />
                    </div>
                    <div className="w-full text-center">
                    <hi>Sudah Punya Akun? </hi>
                    <button className={`font-bold $`} onClick={() => navigate('/')}>
                       Login Sekarang
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}