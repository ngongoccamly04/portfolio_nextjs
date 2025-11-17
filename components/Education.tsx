'use client'
import { useEffect } from 'react'

export default function Education() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.education-item')
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
    <section id="education" className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-400">Trường Học & Bằng Cấp</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="education-item animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-blue-500 transform hover:scale-[1.02] transition duration-300">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-semibold text-white">Công nghệ vật lý điện tử và tin học</h3>
            <span className="text-sm font-medium text-gray-400 bg-gray-700 px-3 py-1 rounded-full">2022 - 2026</span>
          </div>
          <p className="text-xl text-blue-300 mt-1">Trường Đại học Khoa học tự nhiên, ĐHQG-HCM</p>
          <p className="text-gray-400 mt-3">Định hướng Trí tuệ nhân tạo và học máy.</p>
        </div>
      </div>
    </section>
  )
}