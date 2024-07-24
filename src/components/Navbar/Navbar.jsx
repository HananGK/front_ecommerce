import { useContext, useRef, useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../context/ShopContext'
import nav_dropdown from '../Assets/nav_dropdown.png'


const Navbar = () => {
    const [menu, setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const menuRef = useRef()

    const dropdown_toggle = () => {
        menuRef.current.classList.toggle("hidden")
        const dropdown = document.getElementById("dropdown")
        dropdown.classList.toggle("rotate-[-90deg]")
    
    }

    return (
        <div className="flex justify-between py-[10px] px-0 sm:py-[12px] sm:px-[30px] md:py-[12px] md:px-[50px] lg:p-[16px] shadow-md w-full font-poppins">
            <div className="flex items-center gap-[10px]">
                <img className="md:w-[40px]" src={logo} alt="logo" />
                <p className="text-[#171717] md:text-[25px] lg:text-[38px] font-bold">SHOPPER</p>
            </div>
            <img id='dropdown' className='w-[30px] h-[30px] mt-[15px] md:w-[40px] md:h-[40px] md:mt-0 block rotate-[-90deg] transition-[0.5s] lg:hidden' onClick={dropdown_toggle} src={nav_dropdown} alt="Dropdown Icon" />
            <ul ref={menuRef} className="hidden flex lg:flex h-[60px] w-[100%] absolute bg-white lg:bg-transparent justify-center top-[65px] left-0 lg:top-[15px] items-center gap-[25px] md:gap-[30px] lg:gap-[50px] text-[#626262] text-[14px] md:text-[16px] lg:text-[20px] font-semibold">
                <li onClick={() => { setMenu("shop") }} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to="/">Shop</Link>{menu === "shop" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to="/mens">Men</Link>{menu === "mens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to="/womens">Women</Link>{menu === "womens" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }} className="flex flex-col items-center justify-center gap-[3px] cursor-pointer"><Link to="/kids">Kids</Link>{menu === "kids" ? <hr className='border-none w-[80%] h-[3px] rounded-[10px] bg-[#FF4141]' /> : <></>}</li>
            </ul>
            <div className="flex items-center z-10 lg:gap-[45px]">
                {localStorage.getItem("auth-token")?<button className="w-[80px] md:w-[120px] lg:w-[157px] h-[35px] md:h-[45px] lg:h-[58px] outline-none border-[1px] border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[14px] md:text-[16px] lg:text-[20px] font-semibold bg-white cursor-pointer active:bg-[#f3f3f3]" onClick={()=>{localStorage.removeItem("auth-token");window.location.replace("/")}}>Logout</button>:<Link to="/login"><button className="w-[80px] md:w-[120px] lg:w-[157px] h-[35px] md:h-[45px] lg:h-[58px] outline-none border-[1px] border-solid border-[#7a7a7a] rounded-[75px] text-[#515151] text-[14px] md:text-[16px] lg:text-[20px] font-semibold bg-white cursor-pointer active:bg-[#f3f3f3]">Login</button></Link>}
                
                <Link to="/cart"><img className="sm:w-[30px]" src={cart_icon} alt="Cart icon"/></Link>
            
                <div className="w-[18px] lg:w-[22px] h-[18px] lg:h-[22px] flex justify-center items-center mt-[-35px]  md:mt-[-40px] lg:ml-[-55px] rounded-[11px] md:text-[12px] lg:text-[14px] bg-red-500 text-white">{getTotalCartItems()}</div>
            </div>
        </div>
        
    )
}

export default Navbar