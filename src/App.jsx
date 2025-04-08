import React, { useState } from "react";
import { Routes, Route, Link } from 'react-router-dom'
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import Postcode from './pages/Postcode'
import Wastetype from './pages/Wastetype'
import Selectskip from './pages/Selectskip'
import Permitcheck from './pages/Permitcheck'
import Choosedate from './pages/Choosedate'
import Payment from './pages/Payment'

export default function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="p-4 min-h-screen bg-[#121212] text-white ">
      <div className="max-w-7xl mx-auto px-4 py-8">

      <nav className="bg-[#121212] px-4 py-8 shadow-sm fixed top-0 left-0 right-0 z-50 flex gap-4 mb-8 overflow-x-auto items-center">

      <div className="mx-auto flex justify-between">        

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
        <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span className="ml-2 text-white">Postcode</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
          
          <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-6 h-6"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg><span className="ml-2 text-white">Waste Type</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <Link to="/select-skip" className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="ml-2 text-white">Select Skip</span></Link><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg><span className="ml-2 text-white">Permit Check</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span className="ml-2 text-white">Choose Date</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-6 h-6"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><span className="ml-2 text-white">Payment</span></button>
        </div>
      </div>

        {/* Mobile menu toggle */}
        <button className="absolute md:hidden" onClick={toggleMenu}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      

      {/* Mobile dropdown w/ animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden mt-2 shadow-lg rounded-b-lg px-4 py-4 space-y-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
             <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-6 h-6"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg><span className="ml-2 text-white">Postcode</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
          
          <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2 w-6 h-6"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg><span className="ml-2 text-white">Waste Type</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <Link to="/select-skip" className="flex items-center whitespace-nowrap transition-colors text-[#0037C1] cursor-pointer hover:text-[#0037C1]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck w-6 h-6"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg><span className="ml-2 text-white">Select Skip</span></Link><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg><span className="ml-2 text-white">Permit Check</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-6 h-6"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg><span className="ml-2 text-white">Choose Date</span></button><div className="w-16 h-px bg-[#2A2A2A]"></div>
            
            <button disabled="" className="flex items-center whitespace-nowrap transition-colors text-white/60 cursor-not-allowed opacity-50"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-credit-card w-6 h-6"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg><span className="ml-2 text-white">Payment</span></button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>











        <Routes>
          <Route path="/" element={<Postcode />} />
          <Route path="/waste-type" element={<Wastetype />} />
          <Route path="/select-skip" element={<Selectskip />} />
          <Route path="/permit-check" element={<Permitcheck />} />
          <Route path="/choose-date" element={<Choosedate />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </div>
  )
}