const NewsLetter = () => {
    return (
        <div className="w-[100%] sm:w-[85%] h-[25vh] sm:h-[35vh] md:h-[40vh] flex flex-col items-center justify-center m-auto py-0 px-0 sm:px-[80px] xl:px-[140px] mb-[30px] md:mb-[60px] lg:mb-[120px] xl:mb-[150px] bg-[linear-gradient(180deg,_#fde1ff_0%,_#e1ffea22_60%)] gap-[15px] lg:gap-[20px] xl:gap-[30px]">
            <h1 className="text-[#4545454] text-[16px] sm:text-[18px] md:text-[30px] lg:text-[36px] xl:text-[55px] font-semibold">Get  Exclusive Offers On Your Email</h1>
            <p className="text-[#454545] text-[13px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-center">Subscribe to our newsletter and stay updated</p>
            <div className="flex items-center justify-between bg-white w-[290px] sm:w-[400px] md:w-[500px] lg:w-[600px] xl:w-[730px] h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px] rounded-[80px] border-[1px] border-solid border-[#e3e3e3]">
                <input className="w-[130px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[500px] ml-[30px] border-none outline-none text-[#616161] font-Poppins text-[13px] md:text-[14px] lg:text-[16px]" type='email' placeholder='Your email id'></input>
                <button className="w-[100px] md:w-[120px] lg:w-[160px] xl:w-[210px] h-[40px] md:h-[50px] lg:h-[60px] xl:h-[70px] rounded-[80px] bg-black text-white text-[13px] md:text-[14px] lg:text-[16px] cursor-pointer">Subcribe</button>
            </div>
        </div>
    )
}

export default NewsLetter