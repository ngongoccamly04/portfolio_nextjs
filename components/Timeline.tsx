'use client'

import { useEffect } from 'react'

export default function Timeline() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.timeline-item-left, .timeline-item-right')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10')
        } else {
          entry.target.classList.add('opacity-0', 'translate-y-10')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })
    
    animatedItems.forEach(item => observer.observe(item))
    
    return () => {
      animatedItems.forEach(item => observer.unobserve(item))
    }
  }, [])

  return (
    <section id="timeline" className="mb-32">
      <h2 className="text-5xl font-bold text-center mb-20 text-indigo-400">Các Cột Mốc Sự Nghiệp</h2>
      <div className="timeline-container max-w-6xl mx-auto">
        
        {/* Cột Mốc 1: BÊN TRÁI */}
        <div className="animated-item opacity-0 translate-y-10 mb-72 md:mb-96 timeline-item-left">
          <div className="flex flex-col md:flex-row md:justify-start items-center w-full"> 
            <div className="order-2 md:order-1 md:w-5/12 p-8 md:p-10 rounded-lg bg-gray-800 shadow-2xl shadow-indigo-500/30 mr-0 md:mr-10 mt-4 md:mt-0 relative">
              <span className="text-6xl absolute top-4 left-4 opacity-10">🚀</span>
              <span className="text-xl font-bold text-indigo-400 block mb-3">2021 - Khởi Đầu Sự Nghiệp</span>
              <h3 className="text-3xl font-extrabold text-white mb-3">Bắt đầu với lập trình web</h3>
              <p className="text-lg text-gray-300 leading-relaxed">Trong giai đoạn dịch Covid-19, có cơ hội được tiếp xúc với web thấy thú vị và bắt đầu tìm tòi về nó.</p>
              <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-800"></div>
            </div>
            <div className="order-1 md:order-2 md:w-2/12 z-20 milestone-dot flex justify-center">
              <div className="w-8 h-8 rounded-full bg-indigo-500 shadow-md ring-4 ring-indigo-300 flex items-center justify-center">
                <span className="text-md font-bold text-white">1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cột Mốc 2: BÊN PHẢI */}
        <div className="animated-item opacity-0 translate-y-10 mb-72 md:mb-96 timeline-item-right">
          <div className="flex flex-col md:flex-row-reverse md:justify-start items-center w-full">
            <div className="order-2 md:order-1 md:w-5/12 p-8 md:p-10 rounded-lg bg-gray-800 shadow-2xl shadow-green-500/30 ml-0 md:ml-10 mt-4 md:mt-0 relative">
              <span className="text-6xl absolute top-4 right-4 opacity-10">✅</span>
              <span className="text-xl font-bold text-green-400 block mb-3">2022 - Dự án đầu tiên</span>
              <h3 className="text-3xl font-extrabold text-white mb-3">Discord Bot</h3>
              <p className="text-lg text-gray-300 leading-relaxed">Sản phẩm đầu tiên là Discord Bot với các chức năng đơn giản như phát nhạc từ Youtube, hiển thị thời gian thực</p>
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-800"></div>
            </div>
            <div className="order-1 md:order-2 md:w-2/12 z-20 milestone-dot flex justify-center">
              <div className="w-8 h-8 rounded-full bg-green-500 shadow-md ring-4 ring-green-300 flex items-center justify-center">
                <span className="text-md font-bold text-white">2</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cột Mốc 3: BÊN TRÁI */}
        <div className="animated-item opacity-0 translate-y-10 mb-72 md:mb-96 timeline-item-left">
          <div className="flex flex-col md:flex-row md:justify-start items-center w-full">
            <div className="order-2 md:order-1 md:w-5/12 p-8 md:p-10 rounded-lg bg-gray-800 shadow-2xl shadow-blue-500/30 mr-0 md:mr-10 mt-4 md:mt-0 relative">
              <span className="text-6xl absolute top-4 left-4 opacity-10">👑</span>
              <span className="text-xl font-bold text-blue-400 block mb-3">2022 - Dự án đột phá</span>
              <h3 className="text-3xl font-extrabold text-white mb-3">Trang web bán hàng</h3>
              <p className="text-lg text-gray-300 leading-relaxed">Xây dựng trang web bán hàng với các chức năng giỏ hàng, thanh toán, flash sale, ...</p>
              <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 w-0 h-0 border-t-[10px] border-b-[10px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-800"></div>
            </div>
            <div className="order-1 md:order-2 md:w-2/12 z-20 milestone-dot flex justify-center">
              <div className="w-8 h-8 rounded-full bg-blue-500 shadow-md ring-4 ring-blue-300 flex items-center justify-center">
                <span className="text-md font-bold text-white">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cột Mốc 4: BÊN PHẢI */}
        <div className="animated-item opacity-0 translate-y-10 timeline-item-right">
          <div className="flex flex-col md:flex-row-reverse md:justify-start items-center w-full">
            <div className="order-2 md:order-1 md:w-5/12 p-8 md:p-10 rounded-lg bg-gray-800 shadow-2xl shadow-red-500/30 ml-0 md:ml-10 mt-4 md:mt-0 relative">
              <span className="text-6xl absolute top-4 right-4 opacity-10">⭐</span>
              <span className="text-xl font-bold text-red-400 block mb-3">2025 - Phát triển cá nhân</span>
              <h3 className="text-3xl font-extrabold text-white mb-3">Học tại trường</h3>
              <p className="text-lg text-gray-300 leading-relaxed">Bẵng đi một thời gian tiếp xúc lại với lập trình web tại trường, xây dựng trang web cá nhân.</p>
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-full -translate-y-12 w-0 h-0 border-t-[10px] border-b-[10px] border-r-[10px] border-t-transparent border-b-transparent border-r-gray-800"></div>
            </div>
            <div className="order-1 md:order-2 md:w-2/12 z-20 milestone-dot flex justify-center">
              <div className="w-8 h-8 rounded-full bg-red-500 shadow-md ring-4 ring-red-300 flex items-center justify-center">
                <span className="text-md font-bold text-white">4</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}