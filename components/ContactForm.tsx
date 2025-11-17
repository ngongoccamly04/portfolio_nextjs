'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

interface FormData {
  name: string
  email: string
  phone: string
  reason: string
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    reason: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {

      
      // Giả lập delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Form data:', formData)
      
      setSubmitStatus('success')
      
      // Reset form sau 3 giây
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', reason: '' })
        setSubmitStatus('idle')
      }, 3000)
      
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-4 text-purple-400">Liên Hệ Với Tôi</h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Bạn có dự án thú vị hoặc muốn hợp tác? Hãy để lại thông tin, tôi sẽ phản hồi sớm nhất!
      </p>
      
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 border border-gray-700">
          
          {/* Họ và Tên */}
          <div className="mb-6">
            <label htmlFor="name" className="flex items-center text-lg font-semibold text-white mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2 text-purple-400" />
              Họ và Tên <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Nguyễn Văn A"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="flex items-center text-lg font-semibold text-white mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-purple-400" />
              Email <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="example@email.com"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            />
          </div>

          {/* Số Điện Thoại */}
          <div className="mb-6">
            <label htmlFor="phone" className="flex items-center text-lg font-semibold text-white mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-purple-400" />
              Số Điện Thoại <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="0912345678"
              pattern="[0-9]{10,11}"
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300"
            />
            <p className="text-sm text-gray-400 mt-1">Định dạng: 10-11 chữ số</p>
          </div>

          {/* Lý Do Liên Hệ */}
          <div className="mb-8">
            <label htmlFor="reason" className="flex items-center text-lg font-semibold text-white mb-2">
              <FontAwesomeIcon icon={faComment} className="mr-2 text-purple-400" />
              Lý Do Liên Hệ <span className="text-red-500 ml-1">*</span>
            </label>
            <textarea
              id="reason"
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Vui lòng cho tôi biết lý do bạn muốn liên hệ..."
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full md:w-auto px-8 py-4 rounded-lg font-bold text-lg transition duration-300 flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Đang gửi...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                  Gửi Liên Hệ
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg text-green-300 text-center animate-pulse">
                ✅ Gửi thành công! Tôi sẽ liên hệ lại bạn sớm nhất.
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mt-6 p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-center">
                ❌ Có lỗi xảy ra. Vui lòng thử lại sau!
              </div>
            )}
          </div>
        </form>

        {/* Thông tin liên hệ khác */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition duration-300">
            <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
            <a href="mailto:ngongoccamly414@gmail.com" className="text-gray-400 hover:text-purple-400 transition duration-300">
              ngongoccamly414@gmail.com
            </a>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition duration-300">
            <FontAwesomeIcon icon={faPhone} className="text-4xl text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Điện Thoại</h3>
            <a href="tel:+84349156286" className="text-gray-400 hover:text-purple-400 transition duration-300">
              (84) 349 156 286
            </a>
          </div>
          
          <div className="p-6 bg-gray-800 rounded-lg border border-gray-700 hover:border-purple-500 transition duration-300">
            <FontAwesomeIcon icon={faUser} className="text-4xl text-purple-400 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Địa Chỉ</h3>
            <p className="text-gray-400">
              TP. Hồ Chí Minh, Việt Nam
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}