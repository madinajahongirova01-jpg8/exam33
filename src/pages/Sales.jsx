import React from 'react'
import im1 from "../assets/Rectangle 63.png"
import im2 from "../assets/Rectangle 64.png"
import im3 from "../assets/Rectangle 65.png"
import { useNavigate } from 'react-router'

export const url = "https://to-dos-api.softclub.tj/api/to-dos";



const arr=[
    {
        id:1,
        img:im1
    },
     {
        id:2,
        img:im2
    }, {
        id:3,
        img:im3
    }
]

export default function Sales() {

const navigate=useNavigate()

  return (
   <section className='px-[16px] md:px-0'>
    <div className="flex flex-col gap-[12px] md:gap-[20px]">
<p className="text-[#446B80] font-light text-[13px] md:text-[16px]">Главная › Акции</p>
<p className="custom text-[26px] md:text-[48px] font-medium">Акции</p>
  </div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] md:gap-[30px] mt-[16px] md:mt-[20px]">
{
    arr.map(el=>(
        <div key={el.id} onClick={()=>navigate(`/sales2/${el.id}`)} className="cursor-pointer">
            <img src={el.img} alt="" className="w-full h-auto" />
            <p className="text-[#446B80]">25.05.2020</p>
            <p className="text-[16px] md:text-[20px] custom font-medium ">Вкусные скдидки до -25% на все детское питание</p>
        </div>
    ))
}
</div>


   </section>
  )
}