import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Utilities from '@/components/Utilities'
import Timeline from '@/components/Timeline'
import Future from '@/components/Future'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Skills />
        <Education />
        <Utilities />
        <Timeline />
        <Future />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}