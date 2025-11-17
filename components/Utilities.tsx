'use client'

import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon, faCloudSun, faCloudMoon, faCloud, faSmog, faCloudShowersHeavy, faCloudBolt } from '@fortawesome/free-solid-svg-icons'

interface WeatherData {
  temp: number
  icon: any
  text: string
}

interface RateData {
  value: number
  date: string
}

function getWeatherInfo(code: number, isDay: boolean) {
  let info = { icon: isDay ? faSun : faMoon, text: 'Trời quang' }
  if ([1, 2].includes(code)) {
    info = { icon: isDay ? faCloudSun : faCloudMoon, text: 'Ít mây' }
  } else if (code === 3) {
    info = { icon: faCloud, text: 'Trời u ám' }
  } else if ([45, 48].includes(code)) {
    info = { icon: faSmog, text: 'Sương mù' }
  } else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) {
    info = { icon: faCloudShowersHeavy, text: 'Trời mưa' }
  } else if ([95, 96, 99].includes(code)) {
    info = { icon: faCloudBolt, text: 'Dông bão' }
  }
  return info
}

export default function Utilities() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [rate, setRate] = useState<RateData | null>(null)
  const [loadingWeather, setLoadingWeather] = useState(true)
  const [loadingRate, setLoadingRate] = useState(true)

  useEffect(() => {
    fetchWeather()
    fetchExchangeRate()
  }, [])

  async function fetchWeather() {
    setLoadingWeather(true)
    const latitude = 10.7769
    const longitude = 106.7009
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch weather')
      const data = await response.json()
      const current = data.current_weather
      const { icon, text } = getWeatherInfo(current.weathercode, current.is_day === 1)
      setWeather({ temp: current.temperature, icon, text })
    } catch (error) {
      console.error(error)
    }
    setLoadingWeather(false)
  }

  async function fetchExchangeRate() {
    setLoadingRate(true)
    const url = 'https://api.exchangerate.host/latest?base=USD&symbols=VND'
    try {
      const response = await fetch(url)
      if (!response.ok) throw new Error('Failed to fetch rate')
      const data = await response.json()
      setRate({ value: data.rates.VND, date: data.date })
    } catch (error) {
      console.error(error)
    }
    setLoadingRate(false)
  }

  return (
    <section id="utilities" className="mb-24">
      <h2 className="text-5xl font-bold text-center mb-12 text-teal-400">Tiện ích</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Card Thời tiết */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-teal-500">
          <h3 className="text-2xl font-semibold text-white mb-3">Thời tiết (TP.HCM)</h3>
          <div id="weather-widget">
            {loadingWeather ? (
              <p className="text-lg text-gray-300">Đang tải thời tiết...</p>
            ) : weather ? (
              <div className="flex items-center">
                <FontAwesomeIcon icon={weather.icon} className="text-5xl mr-4 text-indigo-400" />
                <div>
                  <p className="text-3xl font-bold text-white">{weather.temp.toFixed(1)}°C</p>
                  <p className="text-lg text-gray-300 capitalize">{weather.text}</p>
                </div>
              </div>
            ) : (
              <p className="text-lg text-red-400">Lỗi tải thời tiết.</p>
            )}
          </div>
        </div>

        {/* Card Tỉ giá */}
        <div className="p-6 bg-gray-800 rounded-xl shadow-xl border-l-4 border-yellow-500">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-2xl font-semibold text-white">Tỉ giá USD/VND</h3>
            <button 
              onClick={fetchExchangeRate} 
              className="text-sm bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-3 rounded-full transition duration-300"
              disabled={loadingRate}
            >
              {loadingRate ? '...' : 'Làm mới'}
            </button>
          </div>
          <div id="exchange-rate-widget">
            {loadingRate ? (
              <p className="text-lg text-gray-300">Đang tải tỉ giá...</p>
            ) : rate ? (
              <>
                <p className="text-3xl font-bold text-white">{rate.value.toLocaleString('vi-VN')} VND</p>
                <p className="text-lg text-gray-300">1 USD</p>
                <p className="text-sm text-gray-500 mt-2">Cập nhật: {new Date(rate.date).toLocaleDateString('vi-VN')}</p>
              </>
            ) : (
              <p className="text-lg text-red-400">Lỗi tải tỉ giá.</p>
            )}
          </div>
        </div>
        
      </div>
    </section>
  )
}
