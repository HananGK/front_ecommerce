import { useEffect, useState } from "react"
import Item from "../Item/Item"

const NewColllections = () => {

    const [new_collection, setNewCollection] = useState([])

    useEffect(()=>{
        fetch(`${import.meta.env.VITE_BACKEND_URL}/newcollection`)
        .then((res)=>res.json())
        .then((data)=>setNewCollection(data))
    },[])

    return (
        <div className="flex flex-col items-center sm:gap-[6px] md:gap-[10px] mb-[150px] ">
            <h1 className="text-[#171717] text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-bold ">NEW COLLECTIONS</h1>
            <hr className="w-[100px] md:w-[120px] lg:w-[160px] xl:w-[200px] md:h-[3px] lg:h-[4px] xl:h-[6px] rounded-[10px] bg-[#252525]"/>
            <div className="grid grid-cols-2 sm:grid-cols-4 mt-[15px] md:mt-[20px] lg:mt-[30px] xl:mt-50px gap-[20px] sm:gap-[5px] md:gap-[15px] lg:gap-[20px] xl:gap-[30px]">
                {new_collection.map((item, i) => {
                    return < Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewColllections