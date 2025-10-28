import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Homepage';
import AboutUs from './AboutUs';
import Contacts from './Contacts';



export default function App() {
return (
<Router>
    <div className="min-h-screen bg-[#f9f8f3]">
<Navbar />

<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/products" element={<div className='text-center mt-20 text-2xl'>Products Page</div>} />
  <Route path="/contacts" element={<Contacts />} />
  <Route path="/about" element={<AboutUs />} />  
</Routes>

</div>
</Router>
);
}