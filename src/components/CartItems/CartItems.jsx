import { useContext } from "react"
import { ShopContext } from "../../context/ShopContext"
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className="my-[60px] xl:my-[100px] mx-[50px] xl:mx-[170px]">
            <div className="hidden sm:grid grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] xl:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[20px] xl:gap-[75px] py-[15px] xl:py-[20px] px-0 text-[#454545] text-[15px] xl:text-[18px] font-semibold">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr className="h-[3px] bg-[#e2e2e2] border-0"/>
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id}>  
                            <div className="grid grid-cols-[0.5fr_3fr_0.5fr] sm:grid-cols-[0.5fr_3fr_0.5fr_0.5fr_0.5fr_0.5fr] xl:grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[10px] sm:gap-[20px] xl:gap-[75px] py-[15px] xl:py-[20px] px-0 text-[#454545] text-[15px] xl:text-[17px] font-medium">
                                <img className="h-[50px] xl:h-[62px]" src={e.image} alt="" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="w-[40px] xl:w-[64px] h-[30px] xl:h-[50px] border-[2px] border-solid border-[#ebebeb] bg-[#fff]">{cartItems[e.id]}</button>
                                <p>${e.new_price*cartItems[e.id]}</p>
                                <img className="w-[15px] m-auto xl:my-0 xl:mx-[40px] cursor-pointer" src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" />
                            </div>
                            <hr />
                        </div>
                    )
                }
                return null
            })} 
            <div className="flex flex-col xl:flex-row mx-0 my-[80px] xl:my-[100px] gap-[80px]">
                <div className="flex-1 flex flex-col m-0 xl:mr-[200px] gap-[20px]">
                    <h1 className="text-[#171717] text-[30px] font-bold">Cart Totals</h1>
                    <div>
                        <div className="flex justify-between py-[15px] px-0">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="flex justify-between py-[15px] px-0">
                            <h3 className="font-bold">Total</h3>
                            <h3 className="font-bold">${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button className="max-w-[200px] xl:max-w-[300px] xl:w-[262px] h-[45px] xl:h-[58px] outline-none border-none bg-[#ff5a5a] text-[#fff] text-[13px] xl:text-[16px] font-semibold cursor-pointer">PROCEED TO CHECKOUT</button>
                </div>
                <div className="w-auto max-w-[500px] flex-1 text-[16px] font-medium">
                    <p className="text-[#555]">If you have a promo code, Enter it here</p>
                    <div className="w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex items-center">
                        <input className="border-none outline-none bg-transparent text-[16px] w-[100%] xl:w-[330px] h-[50px]" type="text" placeholder="promo code" />
                        <button className="w-[120px] xl:w-[170px] ml-[-120px] xl:ml-[0px] h-[58px] bg-black text-white text-[16px] cursor-pointer">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems