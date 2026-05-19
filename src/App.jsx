
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import { HiX } from "react-icons/hi";

import office1 from "./assets/projects/office-1.jpg";
import office2 from "./assets/projects/office-2.jpg";
import office3 from "./assets/projects/office-3.jpg";

import epdm1 from "./assets/projects/epdm-1.jpg";

import kitchen1 from "./assets/projects/kitchen-1.jpg";

import livingRoom1 from "./assets/projects/living-room-1.jpg";

import ceiling1 from "./assets/projects/ceiling-design-1.jpg";

import wardrobe3 from "./assets/projects/wardrobe-3.jpg";

import residential2 from "./assets/projects/residential-2.jpg";

import safetydoor1 from "./assets/projects/safetydoor-1.jpg";

import wardrobe1 from "./assets/projects/wardrobe-1.jpg";

import beforeLivingRoom1 from "./assets/projects/before_living-room-1.jpg";

import sbiOffice from "./assets/projects/sbi-office.jpg";
import residential1 from "./assets/projects/residential-1.jpg";

import logo from "./assets/projects/logo.png";;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function App() {

    const [menuOpen, setMenuOpen] = useState(false);

    const [selectedImage, setSelectedImage] = useState(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

  const timer = setTimeout(() => {
    setLoading(false);
  }, 2200);

  return () => clearTimeout(timer);

}, []);

if (loading) {
  return (

    <div className="h-screen bg-black flex items-center justify-center">

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >

        <img
          src={logo}
          alt="KKS Projects"
          className="h-12 object-contain"
        />

        <p className="text-gray-500 mt-6 uppercase tracking-[6px] text-sm">
          Premium Fit-Out Solutions
        </p>

      </motion.div>

    </div>

  );
}

    return (
    <div className="bg-[#0f0f0f] text-white overflow-hidden">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.3)] shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <img
            src={logo}
            alt="KKS Projects"
            className="h-16 w-auto object-contain"
          />

          <div className="hidden md:flex gap-10 text-sm uppercase tracking-wider">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div
            className="md:hidden text-3xl cursor-pointer z-[100]"
            onClick={() => setMenuOpen(true)}
        >
          <HiMenuAlt3 />
        </div>  

        </div>
      </nav>

{/* MOBILE MENU */}
{
  menuOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black z-[99] flex flex-col items-center justify-center gap-10 text-3xl uppercase tracking-[5px]"
    >

      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-8 right-8 text-5xl"
      >
        ×
      </button>

      <a href="#home" onClick={() => setMenuOpen(false)}>
        Home
      </a>

      <a href="#services" onClick={() => setMenuOpen(false)}>
        Services
      </a>

      <a href="#projects" onClick={() => setMenuOpen(false)}>
        Projects
      </a>

      <a href="#contact" onClick={() => setMenuOpen(false)}>
        Contact
      </a>

    </motion.div>
  )
}


      {/* HERO SECTION */}
      <section
        id="home"
        className="h-screen relative flex items-center justify-center"
      >

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6"
        >

          <p className="uppercase tracking-[6px] text-sm mb-6 text-gray-300">
            Commercial & Residential Fit-Out Solutions
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent leading-tight max-w-4xl mx-auto">
            Premium Commercial & Residential Fit-Out Solutions
          </h1>

          <div className="mt-10 flex justify-center gap-5 flex-wrap">

            <a
              href="#projects"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-full hover:scale-105 duration-300"
            >
              Contact Us
            </a>

          </div>

        </motion.div>
      </section>

{/* TRUST STRIP */}
<section className="py-10 border-y border-white/10 bg-black">

  <div className="max-w-7xl mx-auto overflow-hidden">

    <div className="flex gap-20 whitespace-nowrap text-gray-500 uppercase tracking-[5px] text-sm animate-pulse">

      <span>SBI OFFICE FIT-OUT</span>
      <span>COMMERCIAL INTERIORS</span>
      <span>RESIDENTIAL EXECUTION</span>
      <span>WORKSPACE SOLUTIONS</span>
      <span>INTERIOR FIT-OUT</span>
      <span>CIVIL & MEP</span>

    </div>

  </div>

</section>


      {/* SERVICES */}
      <section
        id="services"
        className="py-36  px-6"
      >

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
>

            <p className="uppercase tracking-[5px] text-gray-500 mb-4">
              What We Do
          </p>

          <h2 className="text-5xl md:text-6xl font-bold mb-20">
            Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white/[0.03] hover:bg-white/[0.06] duration-500 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">
                Commercial Fit-Out
              </h3>

              <p className="text-gray-400 leading-8">
                Office interiors, workspace execution,
                ceilings, flooring, electrical coordination
                and complete commercial setup solutions.
              </p>
            </div>

            <div className="bg-white/[0.03] hover:bg-white/[0.06] duration-500 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">
                Residential Interiors
              </h3>

              <p className="text-gray-400 leading-8">
                Modern kitchen, bedroom interiors,
                painting, carpentry, lighting
                and premium residential finishing.
              </p>
            </div>

            <div className="bg-white/5 p-10 rounded-3xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6">
                Civil & MEP
              </h3>

              <p className="text-gray-400 leading-8">
                HVAC coordination, plumbing,
                electrical execution, utility planning
                and civil project management.
              </p>
            </div>

          </div>

        </motion.div>

      </section>
      {/* PROJECTS */}
<section
  id="projects"
  className="py-32 px-6 bg-[#111111]"
>

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto"
>

  <div className="flex justify-between items-end mb-20 flex-wrap gap-6">

    <div>
      <p className="uppercase tracking-[5px] text-gray-500 mb-4">
        Our Work
      </p>

      <h2 className="text-5xl md:text-6xl font-bold">
        Featured Projects
      </h2>
    </div>

    <p className="max-w-xl text-gray-400 leading-8">
      We execute commercial and residential fit-out
      projects focused on modern aesthetics,
      functionality and premium finishing standards.
    </p>

  </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* PROJECT 1 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group overflow-hidden rounded-[30px] relative hover:-translate-y-2 duration-500"
>

        <img
          src={sbiOffice}
          className="w-full h-[650px] object-cover group-hover:scale-105 ease-out duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-black/50 duration-500"></div>

        <div className="absolute bottom-10 left-10">

          <p className="text-gray-300 uppercase tracking-[3px] text-sm mb-3">
            Commercial Interior
          </p>

          <h3 className="text-5xl font-bold mb-4">
            SBI Office Fit-Out
          </h3>

          <p className="text-gray-300">
            10,000 SQFT • Airoli
          </p>

        </div>

      </motion.div>

      {/* PROJECT 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="group overflow-hidden rounded-[30px] relative mt-20 hover:-translate-y-2 duration-500"
      >
        

        <img
          src={residential1}
          className="w-full h-[650px] object-cover group-hover:scale-105 ease-out duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:bg-black/50 duration-500"></div>

        <div className="absolute bottom-10 left-10">

          <p className="text-gray-300 uppercase tracking-[3px] text-sm mb-3">
            Residential Interior
          </p>

          <h3 className="text-5xl font-bold mb-4">
            Premium 2BHK Interior
          </h3>

          <p className="text-gray-300">
            Mumbai Residential Project
          </p>

        </div>

        </motion.div>

    </div>

   </motion.div>

</section>

{/* STATS */}
<section className="py-36 px-6">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10"
>

    <div>
      <h2 className="text-6xl font-bold mb-4">
        25+
      </h2>

      <p className="text-gray-400 uppercase tracking-[3px]">
        Projects Completed
      </p>
    </div>

    <div>
      <h2 className="text-6xl font-bold mb-4">
        10k+
      </h2>

      <p className="text-gray-400 uppercase tracking-[3px]">
        SQFT Executed
      </p>
    </div>

    <div>
      <h2 className="text-6xl font-bold mb-4">
        100%
      </h2>

      <p className="text-gray-400 uppercase tracking-[3px]">
        Client Focused
      </p>
    </div>

    <div>
      <h2 className="text-6xl font-bold mb-4">
        24/7
      </h2>

      <p className="text-gray-400 uppercase tracking-[3px]">
        Project Coordination
      </p>
    </div>

   </motion.div>

</section>

{/* TESTIMONIALS */}
<section className="py-36 px-6 bg-black">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >

    <p className="uppercase tracking-[5px] text-gray-500 mb-4">
      Client Feedback
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mb-20">
      Trusted By Clients
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      {/* TESTIMONIAL 1 */}
      <div className="bg-white/[0.03] hover:-translate-y-2 hover:bg-white/[0.06] duration-500 p-10 rounded-3xl border border-white/10">

        <p className="text-gray-300 leading-8 mb-8">
          “Professional execution and smooth coordination
          throughout the SBI Office Fit-Out project with
          excellent finishing quality.”
        </p>

        <div>
          <h3 className="font-bold text-lg">
            Mr. Sameem
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            SBI Office Project
          </p>
        </div>

      </div>

      {/* TESTIMONIAL 2 */}
      <div className="bg-white/[0.03] hover:-translate-y-2 hover:bg-white/[0.06] duration-500 p-10 rounded-3xl border border-white/10">

        <p className="text-gray-300 leading-8 mb-8">
          “High-quality workspace execution with reliable
          coordination and modern commercial interior standards.”
        </p>

        <div>
          <h3 className="font-bold text-lg">
            Mr.Vinyak Patade
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Commercial Workspace
          </p>
        </div>

      </div>

      {/* TESTIMONIAL 3 */}
      <div className="bg-white/[0.03] hover:bg-white/[0.06] duration-500 p-10 rounded-3xl border border-white/10">

        <p className="text-gray-300 leading-8 mb-8">
          “Residential interior execution completed with
          clean finishing, proper planning and timely delivery.”
        </p>

        <div>
          <h3 className="font-bold text-lg">
            Mr.Arun Kamani
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Residential Interior
          </p>
        </div>

      </div>

    </div>

  </motion.div>

</section>

{/* GALLERY */}
<section className="py-36 px-6 bg-[#111111]">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >

    <p className="uppercase tracking-[5px] text-gray-500 mb-4">
      Project Gallery
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mb-20">
      Crafted Spaces
    </h2>

    <div className="grid md:grid-cols-3 gap-6">

      {/* IMAGE 1 */}
      <div className="overflow-hidden rounded-[30px] md:col-span-2">

        <img
          src={office1}
          onClick={() => setSelectedImage(office1)}
          className="w-full h-[600px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 2 */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src={ceiling1}
          onClick={() => setSelectedImage(office1)}
          className="w-full h-[600px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 3 */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src={livingRoom1}
          onClick={() => setSelectedImage(livingRoom1)}
          className="w-full h-[400px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 4 */}
      <div className="overflow-hidden rounded-[30px] md:col-span-2">

        <img
          src={sbiOffice}
          onClick={() => setSelectedImage(sbiOffice)}
          className="w-full h-[400px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 5 */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src={safetydoor1}
          onClick={() => setSelectedImage(safetydoor1)}
          className="w-full h-[400px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 6 */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src={wardrobe1}
          onClick={() => setSelectedImage(wardrobe1)}
          className="w-full h-[400px] object-cover hover:scale-105 duration-700"
        />

      </div>

      {/* IMAGE 7 */}
      <div className="overflow-hidden rounded-[30px] md:col-span-3">

        <img
          src={kitchen1}
          onClick={() => setSelectedImage(kitchen1)}
          className="w-full h-[500px] object-cover hover:scale-105 duration-700"
        />

      </div>


    </div>

  </motion.div>

</section>

{/* BEFORE AFTER */}
<section className="py-36 px-6 bg-black">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto"
  >

    <p className="uppercase tracking-[5px] text-gray-500 mb-4">
      Transformations
    </p>

    <h2 className="text-5xl md:text-6xl font-bold mb-20">
      Before & After
    </h2>

    <div className="grid md:grid-cols-2 gap-10">

      {/* BEFORE */}
      <div className="relative overflow-hidden rounded-[30px]">

        <img
          src={beforeLivingRoom1}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute top-6 left-6 bg-black/70 px-5 py-2 rounded-full text-sm uppercase tracking-[3px]">
          Site Condition
        </div>

      </div>

      {/* AFTER */}
      <div className="relative overflow-hidden rounded-[30px]">

        <img
          src={livingRoom1}
          className="w-full h-[500px] object-cover"
        />

        <div className="absolute top-6 left-6 bg-white text-black px-5 py-2 rounded-full text-sm uppercase tracking-[3px]">
          Premium Execution
        </div>

      </div>

    </div>

  </motion.div>

</section>

{/* CONTACT */}
<section
  id="contact"
  className="py-32 px-6 bg-[#111111]"
>

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center"
>

    <p className="uppercase tracking-[5px] text-gray-500 mb-5">
      Contact Us
    </p>

    <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-10">
      Let’s Build Your
      Next Project
    </h2>

    <p className="text-gray-400 max-w-2xl mx-auto leading-8 mb-12">
      Commercial interiors, residential fit-outs,
      workspace execution and premium construction
      solutions tailored to your requirements.
    </p>

    <div className="flex justify-center gap-5 flex-wrap">

      <a
        href="https://wa.me/917208201077"
        className="bg-white text-black px-8 py-4 rounded-full font-semibold"
      >
        WhatsApp Us
      </a>

      <a
        href="mailto:info@kksprojects.co.in"
        className="border border-white px-8 py-4 rounded-full"
      >
        Email Us
      </a>

    </div>

    <form
      action="https://formspree.io/f/xojbjvnq"
      method="POST"
      className="grid gap-6 mt-16 text-left"
    >

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        required
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white duration-300"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        required
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white duration-300"
      />

      <input
        type="text"
        name="project"
        placeholder="Project Type"
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white duration-300"
      />

      <input
        type="text"
        name="location"
        placeholder="Project Location"
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white duration-300"
      />

      <textarea
        name="message"
        placeholder="Tell us about your project"
        rows="6"
        required
        className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-white duration-300"
      ></textarea>

      <button
        type="submit"
        className="bg-white text-black rounded-full py-5 font-semibold hover:scale-105 duration-300"
      >
        Send Inquiry
      </button>

    </form>

  </motion.div>

</section>

{/* FOOTER */}
<footer className="py-16 px-6 border-t border-white/10">

  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10"
>

    <div>

      <img
        src={logo}
        alt="KKS Projects"
        className="h-14 object-contain mb-4"
      />

      <p className="text-gray-500 max-w-md leading-7">
        Commercial and residential fit-out solutions
        focused on premium execution, modern interiors,
        and professional project coordination.
      </p>

    </div>

    <div className="flex gap-16 flex-wrap">

      <div>

        <h3 className="font-semibold mb-5 uppercase tracking-[3px] text-sm">
          Navigation
        </h3>

        <div className="flex flex-col gap-3 text-gray-400">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>

      <div>

        <h3 className="font-semibold mb-5 uppercase tracking-[3px] text-sm">
          Contact
        </h3>

        <div className="flex flex-col gap-3 text-gray-400">
          <p>+91 7208201077</p>
          <p>info@kksprojects.co.in</p>
          <p>Mumbai, India</p>
        </div>

      </div>

    </div>

    </motion.div>

  <div className="border-t border-white/10 mt-16 pt-8 text-gray-500 text-sm text-center">
    © 2026 KKS Projects. All rights reserved.
  </div>

</footer>

{/* IMAGE MODAL */}
{
  selectedImage && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-[999] flex items-center justify-center p-6"
    >

      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-8 right-8 text-5xl"
      >
        <HiX />
      </button>

      <img
        src={selectedImage}
        className="max-w-full max-h-full rounded-[20px]"
      />

    </motion.div>
  )
}

<a
  href="https://instagram.com/kks_projects"
  target="_blank"
  className="fixed bottom-28 right-6 bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 hover:scale-110 duration-300"
>
  <FaInstagram />
</a>



<a
  href="https://wa.me/917208201077"
  target="_blank"
  className="fixed bottom-6 right-6 bg-green-500 w-16 h-16 rounded-full flex items-center justify-center text-3xl shadow-2xl z-50 hover:scale-110 duration-300"
>
  <FaWhatsapp />
</a>

    </div>
  );
}

export default App;