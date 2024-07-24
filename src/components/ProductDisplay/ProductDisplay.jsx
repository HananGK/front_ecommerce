/* eslint-disable react/prop-types */
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { ShopContext } from "../../context/ShopContext"
import { useContext } from "react"


const ProductDisplay = (props) => {
    const {product} = props
    const {addToCart} = useContext(ShopContext)
    return (
        <div className="flex flex-col sm:flex-row mx-[10px] md:mx-[30px] lg:mx-[60px] xl:mx-[70px] my-0">
            <div className="flex flex-row m-auto sm:flex-col-reverse md:flex-row items-center gap-[10px] sm:gap-[5px] lg:gap-[10px] xl:gap-[17px]">
                <div className="flex flex-col sm:flex-row md:flex-col gap-[8px] sm:gap-[0px] md:gap-[5px] md:gap-[10px] xl:gap-[16px]">
                    <img className="h-[75px] sm:h-[60px] md:h-[80px] lg:h-[120px] xl:h-[125px]" src={product.image} alt="" />
                    <img className="h-[75px] sm:h-[60px] md:h-[80px] lg:h-[120px] xl:h-[125px]" src={product.image} alt="" />
                    <img className="h-[75px] sm:h-[60px] md:h-[80px] lg:h-[120px] xl:h-[125px]" src={product.image} alt="" />
                    <img className="h-[75px] sm:h-[60px] md:h-[80px] lg:h-[120px] xl:h-[125px]" src={product.image} alt="" />
                </div>
                <div>
                    <img className="h-[330px] sm:h-[300px] md:h-[350px] lg:h-[510px] xl:h-[550px] w-auto xl:w-[500px]" src={product.image} alt="" />
                </div>
            </div>
            <div className="my-[5px] sm:my-0 mx-[5px] sm:mx-[30px] xl:mx-[70px] flex flex-col w-[100%] sm:w-[586px]"> 
                <h1 className="text-[#3d3d3d] mt-[15px] sm:mt-0 text-[20px] sm:text-[14px] md:text-[18px] lg:text-[22px] xl:text-[30px] font-semibold sm:font-bold">{product.name}</h1>
                <div className="flex items-center mt-[13px] gap-[3px] xl:gap-[5px] text-[#1c1c1c] text-[13px] xl:text-[16px]">
                    <img className="w-[15px] sm:w-[13px] md:w-[12px] lg:w-[18px]" src={star_icon} alt="Star icon" />
                    <img className="w-[15px] sm:w-[13px] md:w-[12px] lg:w-[18px]" src={star_icon} alt="Star icon" />
                    <img className="w-[15px] sm:w-[13px] md:w-[12px] lg:w-[18px]" src={star_icon} alt="Star icon" />
                    <img className="w-[15px] sm:w-[13px] md:w-[12px] lg:w-[18px]" src={star_icon} alt="Star icon" />
                    <img className="w-[15px] sm:w-[13px] md:w-[12px] lg:w-[18px]" src={star_dull_icon} alt="Dull star icon" />
                    <p>(122)</p>
                </div>
                <div className="flex my-[10px] xl:my-[30px] mx-0 gap-[30px] text-[18px] xl:text-[24px] font-bold">
                    <div className="text-[#818181] line-through">
                        ${product.old_price}
                    </div>
                    <div className="text-[#ff4141]">
                        ${product.new_price}
                    </div>
                </div>
                <div className="text-[10px] md:text-[12px] lg:text-[16px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, asperiores voluptas, ea animi fugit repudiandae vel ducimus deleniti atque quod saepe rerum reprehenderit voluptates laudantium excepturi iste architecto ex quia.
                </div>
                <div>
                    <h1 className="mt-[10px] md:mt-[20px] xl:mt-[35px] text-[#656565] text-[20px] font-semibold">Select Size</h1>
                    <div className="flex my-[20px] sm:my-[10px] lg:my-[15px] mx-0 gap-[10px] sm:gap-[5px] md:gap-[20px]">
                        <div className="py-[10px] sm:py-[4px] md:py-[10px] lg:py-[14px] xl:py-[18px] px-[16px] sm:px-[11px] md:px-[16px] lg:px-[20px] xl:px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer text-[14px] sm:text-[12px] lg:text-[16px]">S</div>
                        <div className="py-[10px] sm:py-[4px] md:py-[10px] lg:py-[14px] xl:py-[18px] px-[16px] sm:px-[11px] md:px-[16px] lg:px-[20px] xl:px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer text-[14px] sm:text-[12px] lg:text-[16px]">M</div>
                        <div className="py-[10px] sm:py-[4px] md:py-[10px] lg:py-[14px] xl:py-[18px] px-[16px] sm:px-[11px] md:px-[16px] lg:px-[20px] xl:px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer text-[14px] sm:text-[12px] lg:text-[16px]">L</div>
                        <div className="py-[10px] sm:py-[4px] md:py-[10px] lg:py-[14px] xl:py-[18px] px-[16px] sm:px-[11px] md:px-[16px] lg:px-[20px] xl:px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer text-[14px] sm:text-[12px] lg:text-[16px]">XL</div>
                        <div className="py-[10px] sm:py-[4px] md:py-[10px] lg:py-[14px] xl:py-[18px] px-[16px] sm:px-[11px] md:px-[16px] lg:px-[20px] xl:px-[24px] bg-[#fbfbfb] border-[1px] border-solid border-[#ebebeb] rounded-[3px] cursor-pointer text-[14px] sm:text-[12px] lg:text-[16px]">XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className="py-[12px] sm:py-[10px] lg:py-[15px] xl:py-[25px] px-[0px] xl:px-[40px] w-[130px] sm:w-[100px] md:w-[120px] lg:w-[150px] xl:w-[200px] text-[15px] sm:text-[12px] md:text-[14px] lg:text-[16px] font-semibold text-white bg-[#ff4141] mb-[10px] lg:mb-[20px] xl:mb-[40px] border-none outline-none cursor-pointer">ADD TO CART</button>
                <p className="mt-[5px] xl:mt-[10px] text-[16px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]"><span className="font-semibold">Category: </span>Women, T-shirt, Crop Top</p>
                <p className="mt-[5px] xl:mt-[10px] text-[16px] sm:text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]"><span className="font-semibold">Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default ProductDisplay