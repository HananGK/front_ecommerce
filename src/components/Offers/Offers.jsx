import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
    return (
        <div className="w-[85%] h-[25vh] sm:h-[40vh] lg:h-[60vh] flex m-auto mt-[100px] py-0 px-[60px] lg:px-[80px] xl:px-[140px] mb-[50px] sm:mb-[60px] md:mb-[80px] lg:mb-[120px] xl:mb-[150px] bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)]">
            <div className="flex flex-1 flex-col justify-center">
                <h1 className="text-[#171717] text-[16px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[65px] font-semibold">Exclusive</h1>
                <h1 className="text-[#171717] text-[16px] sm:text-[22px] md:text-[30px] lg:text-[40px] xl:text-[65px] font-semibold">Offers For You</h1>
                <p className="text-[#171717] text-[10px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[22px] font-semibold">ONLY ON BEST SELLERS PRODUCTS</p>
                <button className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[220px] xl:w-[282px] h-[25px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white text-[10px] sm:text-[12px] md:text-[16px] lg:text-[18px] text-[20px] font-semibold mt-[12px] sm:mt-[30px] cursor-pointer">Check Now</button>
            </div>
            <div className="flex flex-1  justify-end pt-[10px] lg:pt-[30px] xl:pt-[50px]">
                <img className="w-[120px] sm:w-[180px] md:w-[200px] lg:w-[300px] " src={exclusive_image} alt="Exclusive Image" />
            </div>
        </div>
    )
}

export default Offers