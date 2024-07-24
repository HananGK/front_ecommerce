import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
    return (
        
        <div className="flex-col sm:flex-row h-[100vh] bg-[linear-gradient(180deg,_#fde1ff,_#e1ffea22_60%)] flex" >

            <div className="flex-1 flex flex-col justify-center gap-[20px] w-[80px] pl-[30px] md:pl-[100px] xl:pl-[180px] leading-[1.1]">
                <h2 className="text-[#090909] text-[18x] sm:text-[16px] md:text-[20px] lg:text-[22px] xl:text-[26px] font-semibold">NEW ARRIVALS ONLY</h2>

                <div>
                    <div className="flex items-center gap-[20px]">
                        <p className="text-[#171717] text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold">new</p>
                        <img className="w-[55px] sm:w-[50px] md:w-[65px] lg:w-[80px] xl:w-[105px]" src={hand_icon} alt="hand icon" />
                    </div>

                    <p className="text-[#171717] text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold">collections</p>
                    <p className="text-[#171717] text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold">for everyone</p>

                    <div className="flex justify-center items-center gap-[10px] xl:gap-[15px] w-[200px] sm:w-[175px] md:w-[220px] xl:w-[250px] xl:w-[310px] h-[45px] sm:h-[40px] md:h-[50px] xl:h-[60px] xl:h-[70px] rounded-[75px] mt-[20px] xl:mt-[30px] bg-[#ff4141] text-white text-[14px] sm:text-[13px] md:text-[16px] xl:text-[18px] xl:text-[22px] font-medium">
                        <div>
                            Latest Collections
                        </div>
                        <img className="" src={arrow_icon} alt="arrow icon" />
                    </div>
                </div>
            </div>

            <div className="flex-1 hidden sm:flex justify-center"> 
                <img className="w-[300px] md:w-[400px] lg:w-[500px]" src={hero_image} alt="hero image" />
            </div>
            
        </div >
    )
}

export default Hero