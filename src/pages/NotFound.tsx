import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

import './NotFound.css'


// src/pages/NotFound.tsx
export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="not-found">
        <h1>Not Found</h1>
      </section>
      <Footer />
    </>
  )
}
