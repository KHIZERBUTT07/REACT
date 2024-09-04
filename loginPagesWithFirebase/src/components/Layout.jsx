import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-900 text-white p-4 shadow-md text-center">
        <div className="container mx-auto">
          <h1 className="text-xl font-bold">My Application</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <Outlet />
      </main>
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 My Application. All rights reserved by Khizer Butt.</p>
      </footer>
    </div>
  );
}

export default Layout;
