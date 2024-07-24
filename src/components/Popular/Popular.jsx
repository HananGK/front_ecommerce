import { useEffect, useState } from 'react'
import Item from '../Item/Item'

const Popular = () => {

    const [popularProducts, setPopularProducts] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_URL}/popularinwomen`)
        .then((res)=>res.json())
        .then((data)=>setPopularProducts(data))
    },[])

    return (
        <div className="flex flex-col items-center sm:gap-[6px] md:gap-[10px] h-[90vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[90vh]">
            <h1 className="text-[#171717] text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold">POPULAR IN WOMEN</h1>
            <hr className="w-[100px] md:w-[120px] lg:w-[160px] xl:w-[200px] md:h-[3px] lg:h-[4px] xl:h-[6px] rounded-[10px] bg-[#252525]"/>
            <div className="mt-[15px] md:mt-[20px] lg:mt-[30px] xl:mt-[50px] grid grid-cols-2 sm:flex gap-[20px] sm:gap-[5px] md:gap-[15px] lg:gap-[20px] xl:gap-[30px]">
                {popularProducts.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular