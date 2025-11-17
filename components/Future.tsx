'use client'

import { useEffect } from 'react'

export default function Future() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.future-item')
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
    <section id="future" className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-12 text-red-400">Định Hướng Tương Lai</h2>
      <div className="future-item animated-item opacity-0 translate-y-10 max-w-4xl mx-auto p-8 bg-gray-800 rounded-xl shadow-2xl border-t-8 border-red-500">
        <p className="text-xl text-gray-300 leading-relaxed">
          Trong 5 năm tới, tôi đặt mục tiêu trở thành một <strong>Kiến trúc sư Phần mềm (Solution Architect)</strong> chuyên sâu vào lĩnh vực <span className="font-bold text-red-400">Trí tuệ Nhân tạo (AI) và Học máy (ML)</span>. Tôi sẽ tập trung vào việc học hỏi để thiết kế các hệ thống có khả năng tự động hóa và xử lý dữ liệu lớn, đồng thời tiếp tục đóng góp vào các dự án mã nguồn mở để chia sẻ kiến thức.
        </p>
      </div>
    </section>
  )
}