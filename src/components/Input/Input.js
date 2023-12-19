import {ReactComponent as Eye} from '../../assets/Frame.svg'
import {ReactComponent as Eyeyellow} from '../../assets/frameyellow.svg'
import {ReactComponent as EyeRegister} from '../../assets/eyeRegister.svg'

export const Input = ({
  text,
  placeholder,
  type, 
  onChange, 
  value,
  showEye = false, 
  showEyeRegister = false, 
  handleEyeRegister,
  handleEye,
  color, 
  className, 
  border}) => {

    return(
        <div className="">
          <h1 className={`py-4 font-bold ${className}`}>{text}</h1>
          <div className={`rounded-full flex items-center relative ${border}`}>
            <input type={type} 
            placeholder={placeholder} 
            onChange={onChange}
            value={value}
            className="p-6 bg-transparent outline-none w-full" 
             />
            {showEye && (<button onClick={handleEye} 
            className='absolute right-4 '>
              {color ==='bg-[#131167]' ? <Eye /> : <Eyeyellow />}</button>)}
            {showEyeRegister && (
              <button onClick={handleEyeRegister} 
              className='absolute right-3 '><EyeRegister />
              </button>
            )}
          </div>
        </div>
       
    )
}
export const ButtonLogin = ({text, color, Bg, background, handleOnClick}) => {
   
  return(
    <div>
      <button className={` p-5 my-5 w-full rounded-full font-bold ${color} ${Bg} ${background}`}
      onClick={handleOnClick}>{text}</button>
    </div>
  )
}

