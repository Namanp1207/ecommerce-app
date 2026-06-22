import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={"ABOUT"} text2={'US'} />
            </div>

            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>At Forever, we believe shopping should be simple, enjoyable, and reliable. We bring you a wide range of quality products carefully selected to match your everyday needs and lifestyle. Our goal is to provide a smooth online shopping experience with great products, affordable prices, and customer satisfaction at the center of everything we do.</p>
                    <p>At Forever, we focus on bringing value, convenience, and satisfaction to every customer. We are constantly improving our collection to match your needs and help you find products that fit your lifestyle. Your trust and happiness are what inspire us every day.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Our mission at Forever is to make online shopping simple, convenient, and enjoyable for everyone. We aim to provide high-quality products at affordable prices while delivering a smooth and trustworthy shopping experience. We are committed to customer satisfaction and building a brand that people can depend on.</p>
                </div>
            </div>

            <div className='text-4xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>

            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process,shopping has never been easier.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Services:</b>
                    <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                </div>
            </div>

            <NewsletterBox/>

        </div>
    )
}

export default About
