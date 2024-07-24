/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"


const Item = (props) => {
    return (
        <div className="w-[120px] text-[12px] md:w-[170px] md:text-[13px] lg:w-[220px] lg:text-[14px] xl:text-[16px] xl:w-[280px] hover:scale-[1.05] hover:transition-[0.6s]">
            <Link to={`/product/${props.id}`}><img className="sm:w-[120px] md:w-[170px] lg:w-[220px] xl:w-[280px]" onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
            <p className="my-[6px] mx-[5px]">{props.name}</p>
            <div className="flex gap-[20px]">
                <div className="text-[#374151] text-[18px] font-bold">
                    ${props.new_price}
                </div>
                <div className="text-[#8c8c8c] text-[12px] md:text-[13px] lg:text-[14px] xl:text-[18px] font-semibold line-through">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item