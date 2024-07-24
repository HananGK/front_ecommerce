/* eslint-disable react/prop-types */
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from "../components/Item/Item"

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext)
    return (
        <div>
            <img className="block mx-auto my-[20px] xl:my-[30px] w-[95%] md:w-[90%] xl:w-[100%]" src={props.banner} alt="Category Banner" />
            <div className="flex m-auto xl:my-0 xl:mx-[70px] justify-between items-center w-[90%] ">
                <p className="text-[12px] xl:text-[18px]">
                    <span className="font-semibold">Showing 1-12</span> out of 36 products
                </p>
                <div className="py-[5px] xl:py-[10px] px-[10px] xl:px-[20px] rounded-[40px] border-[1px] border-solid border-[#888] flex items-center gap-[5px] text-[12px] xl:text-[18px]">
                    Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
                </div>
            </div>
            <div className="my-[20px] mx-[20px] grid grid-cols-2 ml-[40px] sm:grid-cols-4 gap-y-[40px] xl:gap-y-[80px] gap-x-[10px]">
                {
                    all_product.map((item, i) => {
                        if (props.category === item.category) {
                            return <Item key = { i } id = { item.id } name = { item.name } image = { item.image } new_price = { item.new_price } old_price = { item.old_price } />
                        }
                        else {
                            return null
                        }
                    })
                }
            </div>
            <div className="flex justify-center items-center my-[60px] md:my-[100px] mx-auto w-[150px] md:w-[200px] xl:w-[323px] rounded-[75px] h-[40px] md:h-[60px] xl:h-[69px] bg-[#ededed] text-[#787878] text-[13px] md:text-[16px] xl:text-[18px] font-semibold">
                Explore More
            </div>
        </div>)
}

            export default ShopCategory