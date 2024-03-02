import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ArtWebsite() {
  return (
    <div className="bg-black text-white mx-auto min-h-screen">
      <header className="flex justify-between items-center py-6 px-6 bg-gray-800">
        <h1 className="text-4xl font-bold text-yellow-500"> Prince </h1>
        <nav className="flex space-x-4">
          {/* <a href="#about" className="text-gray-300 hover:text-yellow-500">Selected Work</a> */}
          <a href="#about" className="text-gray-300 hover:text-yellow-500">About</a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-500">Contact</a>
        </nav>
      </header>

      <main>
        <section className="h-[500px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1530305408560-82d13781b33a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)' }}>
          <div className="mx-auto px-6 flex flex-col items-center justify-center h-full">
            <h1 className="text-6xl font-bold text-white mb-8"> Welcome</h1>
            <h2 className="text-4xl font-bold text-white mb-4">DEV by</h2>
            <h3 className="text-3xl font-bold text-white">hi i am good</h3>
          </div>
        </section>

        {/* <section className="about py-20 bg-gray-800">
          <div className="container mx-auto px-6 space-y-10">
            <p className="text-xl text-gray-300">2024 by PrinceMishra..</p>
          </div>
        </section> */}

        <section className="contact py-20 bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-yellow-500 mb-10">Contact</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-lg font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" className="w-full border border-gray-700 p-2 rounded-md shadow-sm bg-gray-800 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full border border-gray-700 p-2 rounded-md shadow-sm bg-gray-800 text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" rows="5" className="w-full border border-gray-700 p-2 rounded-md shadow-sm bg-gray-800 text-white"></textarea>
              </div>
              <button type="submit" className="inline-flex items-center px-3 py-2 font-medium rounded-md text-center text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none">Send</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="text-center py-4 bg-gray-800">
        <p className="text-gray-300">Copyright &copy; 2024 Prince Mishra. All rights reserved.</p>
      </footer>
    </div>
  );
}


function App() {
  return (
    <>
      <ArtWebsite />
    </>
  )
}

export default App