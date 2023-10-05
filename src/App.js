import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCampsites } from "./features/campsites/campsitesSlice";
import { fetchPartners } from "./features/partners/partnersSlice"; // Make sure to update this path to the actual path in your project
import { Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import "./App.css";

function App() {
  // Initialize the Redux dispatch function
  const dispatch = useDispatch();

  // Use the useEffect hook to fetch campsites and partners data when the App component mounts
  useEffect(() => {
    dispatch(fetchCampsites());
    dispatch(fetchPartners()); // Added this line to fetch partners
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/directory" element={<CampsitesDirectoryPage />} />
        <Route path="/directory/:campsiteId" element={<CampsiteDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
