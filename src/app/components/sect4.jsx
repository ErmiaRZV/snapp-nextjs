import React from 'react'

export default function Sect4() {
  return (
    <section dir='rtl' className=' 2xl:container mx-auto mt-20 flex flex-wrap' >
        <Img />
        <Content />
    </section>
  )
}


function Img(){
    return(
        <figure className='w-full flex h-[30vh] lg:h-auto lg:w-1/2' >
            <img className='w-full h-full  object-cover' src="https://web-cdn.snapp.ir/snapp-website/images/homepage/super-app.jpg" alt="" />
        </figure>
    )
}

function Content(){
    return(
        <div className='w-full flex flex-wrap lg:w-1/2' >
            <h2 className='w-full text-right text-2xl font-bold text-[#404040] py-8 px-5 ' >سوپر اپ اسنپ؛ پاسخی به تمام نیازها</h2>
            <p className='px-5 flex text-right text-sm text-[#404040] ' >اسنپ، اولین تاکسی اینترنتی ایران، بعد از پنج سال فعالیت در حوزه‌ی تردد شهری، به یک سوپر‌اپ با خدمات متنوع تبدیل شد. سوپراپ اسنپ راه‌حلی جدید و ساده است که با استفاده از آن تنها با یک اپلیکیشن می‌توانید علاوه بر درخواست خودرو، موتور و وانت از خدمات متعددی از جمله سفارش غذا، پزشک و مشاور آنلاین، خرید از سوپرمارکت‌ها و فروشگاه‌ها، اسباب‌کشی، خرید بلیط (هواپیما، اتوبوس، قطار)، رزرو هتل، پرداخت قبض و خرید شارژ استفاده کنید.</p>
        </div>
    )
}