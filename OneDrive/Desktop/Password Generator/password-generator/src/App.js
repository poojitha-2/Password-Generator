import Checkbox from '@mui/material/Checkbox';
import Alert from '@mui/material/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {numbers, upperCaseLetters,lowerCaseLetters,specialCharacters} from './Character'
import { useEffect, useState } from 'react';
function App() {
  const [password,setPassword] = useState('');
  const [passwordlength,setPasswordLength] = useState('15');
  const [uppercase,setUppercase] = useState(false);
  const [lowercase,setLowercase] = useState(false);
  const [specialchar,setSpecialchar] = useState(false);
  const [number,setNumber] = useState(false);
  const [alert, setAlert] =useState(false);
  const [copysuccess,setCopySuccess] = useState('');
  const [copyfail,setCopyFail] = useState('')
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  const generatepassword = ()=>{
    if(!uppercase && !lowercase && !specialchar && !number)
    {
      // alert("select one or more checkbox");
      setAlert(true);
      const handlealert = () =>{
        setAlert(false);
      }
        setTimeout(handlealert,1000)
    }
    else{
      let characterstring = ''
      if(uppercase){
        characterstring += upperCaseLetters
      }
      if(lowercase){
        characterstring += lowerCaseLetters
      }
      if(specialchar){
        characterstring += specialCharacters
      }
      if(number){
        characterstring += numbers
      }
      setPassword(createpassword(characterstring));

    }
    
  }
  
  const createpassword =(data) =>{
    let password = ''
     const characterstringlength = data.length ;
    for(let i=0 ;i<passwordlength;i++)
    {
      const characterindex = Math.round(Math.random()*characterstringlength);
      password += data.charAt(characterindex);
    }
    return password
  }
  const copytoclipboard = () =>{
    navigator.clipboard.writeText(password)
  }
  const copypassword = (e) =>{
    if(password === ''){
      setCopyFail('Failed to copy password');
      const handlecopyfail = ()=>{
        setCopyFail('');
      }
      setTimeout(handlecopyfail,1000)
    }
    else{
      copytoclipboard(password)
      setCopySuccess('Password copied successfully')
      const handlecopysuccess = () =>{
        setCopySuccess('');
      }
      setTimeout(handlecopysuccess,1000)
    }
  }
  
  
  return (

    <div className="App bg-white h-[100vh]  flex flex-col items-center  justify-center ">
      {alert && (  <Alert className='mb-[10px]' severity="info">Select checkbox to generate password!</Alert>)}
      <div className='pw-g bg-[#7b9acc] w-[350px] p-10 rounded '>
          <div>
            <h1 className = 'text-[#FCF6F5] font-bold mb-5 text-center tracking-widest text-lg'>PASSWORD GENERATOR</h1>
          </div>
          <div className='flex gap-2'>
            <input className= ' border rounded text-[#7b9acc] w-full outline-0 mb-3 p-1' type='text' value={password}/>
            <svg className='mt-1 fill-white cursor-pointer opacity-75 hover:opacity-100' onClick={copypassword} xmlns="http://www.w3.org/2000/svg" height="1.3em" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg>
            <br/>
          </div>
          <div className='text-[#ddd] mb-2 '>
            {copyfail}
            {copysuccess}
          </div>
          
          <div className='passw flex justify-between  p-0 mb-2'>
            <label className='text-[#FCF6F5]' >Password Length</label><br/>
            <input  className='w-15 border text-[#7b9acc] rounded outline-0 text-center' onChange={(e)=>setPasswordLength(e.target.value)} defaultValue={passwordlength} type='number' max='15' min='8'/>
          </div>
          <div className=' flex justify-between '>
            <label className='mt-2 text-[#FCF6F5]'>Add UpperCase</label>
            <Checkbox  checked={uppercase} onChange={(e)=>setUppercase(e.target.checked)} {...label} />
          </div>
          <div className=' flex justify-between' >
            <label className='mt-2 text-[#FCF6F5]'>Add LowerCase</label>
            <Checkbox checked={lowercase} onChange={(e)=>setLowercase(e.target.checked)} {...label} />
          </div>
          <div className=' flex justify-between '>
            <label className='mt-2 text-[#FCF6F5]'>Add SpecialCharacters</label>
            <Checkbox checked={specialchar} onChange={(e)=>setSpecialchar(e.target.checked)} {...label} />
          </div>
          <div className=' flex justify-between '>
            <label className='mt-2 text-[#FCF6F5]'>Add Numbers</label>
            <Checkbox checked={number} onChange={(e)=>setNumber(e.target.checked)} {...label} />
          </div>
          <div>
          <button  onClick={generatepassword} className=' border border-[#FCF6F5] bg-[#7b9acc] hover:bg-[#88a4d1] hover:text-[#FCF6F5]  text-[#FCF6F5] w-full tracking-wider  mt-2 p-2 rounded' >GENERATE PASSWORD</button>
          </div>
      </div> 
    </div>
  );
}

export default App;
