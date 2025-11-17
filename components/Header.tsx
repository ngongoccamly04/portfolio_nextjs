import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  return (
    <header 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/ffffff?text=Portfolio+Background')" }}
    >
      <div className="text-center p-8 bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-2xl max-w-4xl mx-4">
        <div className="w-32 h-32 mx-auto mb-6 relative">
          <Image 
            src="/avatar.png" 
            alt="Ảnh đại diện của Ngô Ngọc Cẩm Ly" 
            width={128}
            height={128}
            className="w-full h-full object-cover rounded-full ring-4 ring-[#10b981] p-1"
            priority
          />
        </div>
        <h1 className="text-6xl font-extrabold text-white mb-2 tracking-tight">
          Xin chào, Tôi là Ngô Ngọc Cẩm Ly 👋
        </h1>
        <p className="text-2xl text-indigo-400 font-light mb-6">
          Sinh viên năm 4 tại HCMUS | Nhà Phát Triển Phần Mềm
        </p>
        <p className="text-lg max-w-xl mx-auto text-gray-400">
          Chào mừng đến với hồ sơ của tôi. Tôi là một sinh viên có niềm đam mê với lập trình web và phát triển phần mềm.
        </p>
        
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://github.com/ngongoccamly04" target="_blank" rel="noopener noreferrer" title="GitHub" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/ly-ng%C3%B4-ng%E1%BB%8Dc-c%E1%BA%A9m-a95b37246/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7" />
          </a>
          <a href="mailto:ngongoccamly414@gmail.com" title="Email" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faEnvelope} className="w-7 h-7" />
          </a>
          <a href="https://www.facebook.com/nncamly.41" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-gray-400 hover:text-indigo-400 transition-colors">
            <FontAwesomeIcon icon={faFacebook} className="w-7 h-7" />
          </a>
        </div>
      </div>
    </header>
  )
}