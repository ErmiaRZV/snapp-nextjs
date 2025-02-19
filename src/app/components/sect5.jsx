import React from 'react'

export default function Sect5() {
  return (
    <section dir='rtl' className='w-full flex lg:px-[10%] 2xl:container mx-auto  mt-14 px-5 gap-8 justify-center flex-wrap  ' >
        <div className='flex flex-wrap w-full md:w-[46%] mt-8 lg:w-[30%] lg:translate-y-[-120px] xl:translate-y-[-150px]  ' >
            <figure className='w-full h-[30vh] bg-[#f2f5f7] rounded-xl    ' >
                <img className='w-full h-full object-contain ' src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-easy.png" alt="" />
            </figure>
            <h3 className='w-full flex justify-start mt-3'>آسان</h3>
            <p className='text-sm text-[#404040] mt-5' >برای استفاده از هر کدام از خدمات سوپر‌اپ اسنپ کافی است وارد اپلیکیشن اسنپ شوید و روی آیکون مورد نظر بزنید.</p>
        </div>
        <div className='flex flex-wrap w-full md:w-[46%] mt-8 lg:w-[30%] lg:translate-y-[-120px] xl:translate-y-[-150px] ' >
            <figure className='w-full h-[30vh] bg-[#f2f5f7] rounded-xl   ' >
                <img className='w-full h-full object-contain ' src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-fast.png" alt="" />
            </figure>
            <h3 className='w-full flex justify-start mt-3'>سریع</h3>
            <p className='text-sm text-[#404040] mt-5' >قرار گرفتن خدمات مختلف در یک پلت‌فرم به صرفه‌جویی در زمان کمک می‌کند. سوپراپ اسنپ پاسخی سریع به نیازهای رومزه‌ی شماست.</p>
        </div>
        <div className='flex flex-wrap w-full md:w-[46%] mt-8 lg:w-[30%] lg:translate-y-[-120px] xl:translate-y-[-150px] ' >
            <figure className='w-full h-[30vh] bg-[#f2f5f7]  rounded-xl  ' >
                <img className='w-full h-full object-contain ' src="https://web-cdn.snapp.ir/snapp-website/images/homepage/210x190-eco.png" alt="" />
            </figure>
            <h3 className='w-full flex justify-start mt-3'>به صرفه</h3>
            <p className='text-sm text-[#404040] mt-5' >سوپراپ اسنپ علاوه بر زمان در هزینه‌های شما نیز صرفه‌جویی می‌کند تا بهترین خدمات را با قیمتی منطقی دریافت کنید.</p>
        </div>
        
    </section>
  )
}
