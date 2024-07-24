import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return(
        <div className="flex flex-col justify-center items-center gap-[20px] md:gap-[50px]">
            <div className=" flex items-end md:items-center gap-[10px] md:gap-[20px]">
                <img className="w-[40px] md:w-[90px]" src={footer_logo} alt="Footer logo"/>
                <p className="text-[#383838] text-[25px] md:text-[46px] font-bold">SHOPPER</p>
            </div>
            <ul className="flex gap-[10px] md:gap-[50px] text-[#252525] text-[14px] md:text-[20px]">
                <li className="cursor-pointer">Company</li>
                <li className="cursor-pointer">Products</li>
                <li className="cursor-pointer">Offices</li>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact</li>
            </ul>
            <div className='flex gap-[20px]'>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
                    <img className="w-[20px] md:w-[30px]" src={instagram_icon} alt="Instagram Icon" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
                    <img className="w-[20px] md:w-[30px]" src={pintester_icon} alt="Pintester Icon" />
                </div>
                <div className="p-[10px] pb-[6px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb]">
                    <img className="w-[20px] md:w-[30px]" src={whatsapp_icon} alt="Whatsapp Icon" />
                </div>
            </div>
            <div className="flex flex-col items-center gap-[30px] w-[100%] mb-[30px] text-[#1a1a1a] text-[13px] md:text-[20px]">
                <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]"/>
                <p>Copyright © 2024 - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer