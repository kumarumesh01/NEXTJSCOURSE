// src/pages/index.tsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Umesh Kumar Portfolio</title>
        <meta name="description" content="This is the homepage of my Next.js application." />
        <link rel="icon" href="/logo_umesh.png" />
      </Head>
      <div className="w-full bg-violet-600 flex justify-between items-center px-8 py-8 text-white" style={{ height: '420px' }}>
        <div className="text-left pr-4">
          <p className="text-2xl font-bold">Hello,</p>
          <p className="text-4xl font-bold">I'm Umesh Kumar,</p>
          <p className="text-2xl font-bold">B.Tech in Electrical Engineering from IIT Delhi.</p>
          <p className="text-2xl font-bold text-black">Software Developer | Embedded Engineer.</p>
        </div>
        <img src="/photo_umesh.jpg" alt="Umesh's Photo" className="h-34 w-34 rounded-full cursor-pointer ml-auto relative" style={{ paddingRight: '1rem', zIndex: 10 }} />
      </div>
      {/* Main content section */}
  
      <div id="projects" className="w-full bg-black text-white py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Projects</h2>
        <div className="grid grid-cols-4 gap-8 mx-auto max-w-6xl p-8">  {/* Adjusted max-width and added padding */}
        <div className="w-64  bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 1</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 2</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 3</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 4</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 5</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 1</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 2</div>
          <div className="w-64 h-64 bg-purple-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 3</div>
        </div>
      </div>


      <div id="internships" className="w-full bg-purple-700 text-white py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Internships</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl p-8">  {/* Adjusted max-width and added padding */}
          <div className="w-64 bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ height: '18.5rem', boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Intern 1</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 2</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 3</div>
        </div>
      </div>

      <div id="contacts" className="w-full bg-black text-white py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">Contacts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl p-8">  {/* Adjusted max-width and added padding */}
          <div className="w-64 bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ height: '18.5rem', boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Intern 1</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 2</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 3</div>
        </div>
      </div>

      <div id="aboutme" className="w-full bg-black text-white py-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-10">About me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl p-8">  {/* Adjusted max-width and added padding */}
          <div className="w-64 bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ height: '18.5rem', boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Intern 1</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 2</div>
          <div className="w-64  bg-cyan-700 flex items-center justify-center p-4 rounded-lg" style={{ boxShadow: '0 10px 10px rgba(128, 128, 128, 1)' }}>Project 3</div>
        </div>
      </div>


      




        
    </div>
  );
};

export default HomePage;
