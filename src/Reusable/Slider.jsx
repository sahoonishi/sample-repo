
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import { Pagination, Autoplay } from 'swiper/modules';

const industries = [
  {
    title: 'Car Rental',
    icon: '/slider/Group-1000001852.png.webp',
    description: 'Elevate your car rental business with AI solutions. Optimise fleet operations, reduce maintenance costs, or enhance the booking experience, AI can revolutionise your car rental business.',
  },
  {
    title: 'SaaS',
    icon: '/slider/Group-1000001858.png.webp',
    description: 'Boost your SaaS platform with AI solutions for predictive analytics, automation, and personalized experiences, ensuring higher engagement, reduced churn, and seamless scalability.',
    highlight: true,
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001859.png (1).webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001859.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001862.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001864.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001866.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001868.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
  {
    title: 'Retail & E-Commerce',
    icon: '/slider/Group-1000001871.png.webp',
    description: 'AI-enhanced personalisation, optimised pricing, and streamlined inventory management. We help businesses adapt quickly to market changes and create better customer experiences.',
  },
];

export default function Slider() {
  return (
    <div className="w-screen border-black overflow-hidden px-4 py-10">
      <Swiper
        spaceBetween={40}
        className='custom mt-14'
        slidesPerView={1.2}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Autoplay]}
      >
        {industries.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`rounded-2xl mb-12 px-6 py-16 h-full transition-all border ${
                item.highlight
                  ? 'border-orange-500 bg-gradient-to-br from-orange-100 to-pink-100'
                  : 'border-gray-200 bg-white'
              } drop-shadow-xl`}
            >
              <div className="text-3xl mb-4 border border-black w-fit p-4 rounded-full"><img src={`${item.icon}`} alt="slider icons" className='w-12' /></div>
              <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-xl max-w-[90%] mb-4">{item.description}</p>
              <button className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
