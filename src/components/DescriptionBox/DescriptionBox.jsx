const DescriptionBox = () => {
    return (
        <div className="my-[60px] mx-[20px] lg:m-[60px] xl:my-[120px] xl:mx-[70px]">
            <div className="flex">
                <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0]">
                    Description
                </div>
                <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[70px] border-[1px] border-solid border-[#d0d0d0] bg-[#fbfbfb] text-[#555]">Reviews (122)</div>
            </div>
            <div className="text-[14px] xl:text-[16px] flex flex-col gap-[25px] border-[1px] border-solid border-[#d0d0d0] p-[48px] pb-[70px]">
                <p> An e-commerce website is an online platform Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit molestias voluptas officia. Blanditiis eos possimus ut temporibus, rerum quod maiores non nisi doloribus corporis accusantium similique molestias, eaque autem.</p>
                <p>E-commerce website Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti corporis necessitatibus fugiat impedit ex molestiae doloremque architecto explicabo modi quam.</p>
            </div>
        </div>
    )
}

export default DescriptionBox