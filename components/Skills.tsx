'use client'

import { useEffect } from 'react'

export default function Skills() {
  useEffect(() => {
    const animatedItems = document.querySelectorAll('.skill-card')
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
    <section id="skills" className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-12 text-green-400">Kỹ Năng</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700">
          <span className="text-4xl mb-3 block">💻</span>
          <h3 className="text-xl font-semibold text-white">JavaScript/TypeScript</h3>
        </div>
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700" style={{ transitionDelay: '100ms' }}>
          <span className="text-4xl mb-3 block">⚛️</span>
          <h3 className="text-xl font-semibold text-white">React & Next.js</h3>
        </div>
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700" style={{ transitionDelay: '200ms' }}>
          <span className="text-4xl mb-3 block">🌐</span>
          <h3 className="text-xl font-semibold text-white">Node.js & Express</h3>
        </div>
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700" style={{ transitionDelay: '300ms' }}>
          <span className="text-4xl mb-3 block">🎨</span>
          <h3 className="text-xl font-semibold text-white">Tailwind CSS</h3>
        </div>
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700">
          <span className="text-4xl mb-3 block">🧠</span>
          <h3 className="text-xl font-semibold text-white">Giao diện người dùng (UI/UX)</h3>
        </div>
        <div className="skill-card animated-item opacity-0 translate-y-10 p-6 bg-gray-800 rounded-lg shadow-xl text-center transition duration-300 hover:scale-105 hover:bg-gray-700" style={{ transitionDelay: '100ms' }}>
          <span className="text-4xl mb-3 block">🔧</span>
          <h3 className="text-xl font-semibold text-white">Kiểm thử & Debug</h3>
        </div>
      </div>
    </section>
  )
}