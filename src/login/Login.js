import { useState } from 'react'
import Input from '../components/Input'
import Header from '../header'
import { ButtonLogin } from '../components/Input/Input'
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/slice'
import { useDispatch } from 'react-redux'

export const Login =() => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [shoPassword, setShowPassword] = useState(false)
    const [color, setColor] =useState('bg-[#131167]')
    const [text, textColor] = useState('text-[#131167]')
    const [bg,setBg] = useState('bg-[#E5E7FD]')
    const handleEye = () => {
        setShowPassword(!shoPassword)
    }
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

    // hande Login//
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleLogin = () => {
    const usersFromLocalStorage = JSON.parse(localStorage.getItem('users')) || [];

    const userToLogin = usersFromLocalStorage.find(user => user.username === username);
    if (userToLogin && userToLogin.password === password) {
      dispatch(login(userToLogin));
      navigate('/Profile')

      localStorage.setItem('currentUser', JSON.stringify(userToLogin));
    } else {
      console.log('Login failed: User not found or invalid credentials');
    }
    }
return(
    <div className="flex ">
        <div className={`w-[55%] flex justify-center items-center  ${color}`}>
            <div className='w-[90%]'>
                <div className='flex justify-center'>
                    <img src={Logo} width={'70%'} height={'70%'}/>
                </div>
             <div className='text-center text-white py-20'>
                <h1 className='text-5xl font-bold'>LOREM</h1>
                <p>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
                </p>
             </div>
            </div>
        </div>
        <div className='w-[45%]'>
            <Header handleOutOrange={handelOrange} handleOutBlue={handelBlue}/>
            <div className='flex justify-center items-center'>
                <div className='w-[80%] my-4'>
                    <h1 className={`  text-7xl font-bold my-4 ${text}`}>Silahkan Login</h1>
                    <p>Masukkan Username dan password anda untuk masuk</p>
                    <div className='my-7 w-[90%]'>
                        <Input 
                        type={'text'} 
                        placeholder={'Username anda...'} 
                        text={'Username'}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={'text-[#666666]'}
                        border={'border border-[#494949]'} 
                        />
                        <Input 
                        type={shoPassword ? 'text': 'password'} 
                        text={'Password'} 
                        placeholder={'Password anda...'} 
                        showEye
                        handleEye={handleEye} 
                        color={color} 
                        className={'text-[#666666]'} 
                        border={'border border-[#494949]'} 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='w-[90%]'>
                        <ButtonLogin  
                        text={'Masuk Sekarang'}  
                        color={text} Bg={bg}
                        handleOnClick={handleLogin}
                        />
                    </div>
                    <div className=' w-[90%] flex justify-center'>
                        <h1>Belum Punya Akun? </h1>
                        <button className={`font-bold ${text}`} onClick={() => navigate('Register')}>
                        Daftar Sekarang
                        </button>
                    </div>
                </div>
        </div>
        </div>
        
    </div>
)
}
