/* eslint-disable react/prop-types */
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props
    return (
        <div className="flex items-center gap-[8px] text-[#5e5e5e] text-[10px] sm:text-[12px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-semibold my-[30px] xl:my-[60px] mx-[10px] md:mx-[30px] lg:mx-[50px] xl:mx-[70px] transform-capitalize">
            HOME <img src={arrow_icon} alt="arrow icon"/> SHOP <img src={arrow_icon} alt="arrow icon"/> {product.category} <img src={arrow_icon} alt="arrow icon"/> {product.name}
        </div>
    )
}

export default Breadcrum