// In your Layout.js (or wherever your Layout component is defined)
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer'; // Import the Footer component
import Header from './Header';

export default function Layout() {
    return (
        <main>
            <Header />
            <Outlet />
            <Footer /> 
        </main>
    );
}