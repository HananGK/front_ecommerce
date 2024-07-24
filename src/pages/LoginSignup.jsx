import { useState } from "react"

const LoginSignup = () => {

    const[state, setState] = useState("Login")
    const [formData, setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changeHandler = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const login = async () => {
        console.log("Login function executed", formData)
        let responseData
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }

    const signUp = async () => {
        console.log("Sign Up function executed", formData)
        let responseData
        await fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
            method:"POST",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json",
            },
            body: JSON.stringify(formData)
        }).then((res)=>res.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem("auth-token", responseData.token)
            window.location.replace("/")
        }
        else{
            alert(responseData.errors)
        }
    }

    return (
        <div className="w-[100%] h-[850px] mb-[100px] pt-[50px] xl:pt-[100px] bg-[#fce3fe]">
            <div className="w-auto max-w-[500px] max-h-[650px] xl:w-[580px] h-[550px] md:h-[650px] bg-white m-auto py-[20px] px-[30px] md:px-[60px] ">
                <h1 className="my-[10px] xl:my-[20px] mx-0 text-[#171717] text-[24px] md:text-[35px] font-semibold">{state}</h1>
                <div className="flex flex-col gap-[20px] xl:gap-[29px] mt-[20px] md:mt-[30px]">
                    {state==="Sign Up"?<input className="h-[50px] md:h-[65px] xl:h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" name="username" value={formData.username} onChange={changeHandler} type="text" placeholder="Your name" />:<></>}
                    <input className="h-[50px] md:h-[65px] xl:h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email Address" />
                    <input className="h-[50px] md:h-[65px] xl:h-[72px] w-[100%] pl-[20px] border-[1px] border-solid border-[#c9c9c9] outline-none text-[#5c5c5c] text-[18px]" name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="Password" />
                </div>
                <button onClick={()=>{state==="Login"?login():signUp()}} className="w-[100%] h-[50px] md:h-[72px] text-white bg-[#ff4141] mt-[30px] border-none text-[16px] md:text-[24px] font-semibold cursor-pointer">Continue</button>
                {state==="Sign Up"?<p className="mt-[20px] text-[#5c5c5c] text-[16px] xl:text-[18px] font-semibold">Already have an account? <span onClick={() => setState("Login")} className="text-[#ff4141] font-bold cursor-pointer">Login here</span></p>:<p className="mt-[20px] text-[#5c5c5c] text-[16px] xl:text-[18px] font-semibold">Create an account? <span onClick={() => setState("Sign Up")} className="text-[#ff4141] font-bold cursor-pointer">Sign up here</span></p>}
                <div className="flex items-center mt-[25px] gap-[10px] xl:gap-[20px] text-[#5c5c5c] text-[14px] xl:text-[16px] font-semibold">
                    <input type="checkbox" name="Terms" id="Terms" required />
                    <p>By continuing, I agree to the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup