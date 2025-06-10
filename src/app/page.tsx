'use client'; // This directive ensures the component is rendered on the client side

import { useEffect } from 'react';
import Image from 'next/image';
import '../app/globals.css'; // Import the CSS file

export default function Home() {
  useEffect(() => {
    const handleNavigation = (e: Event) => {
      e.preventDefault();
      const target = e.target as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('nav a');
    links.forEach(link => link.addEventListener('click', handleNavigation));

    // Cleanup event listeners on unmount
    return () => {
      links.forEach(link => link.removeEventListener('click', handleNavigation));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-200 to-indigo-200 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 text-center relative">
        <div className="relative inline-block w-[360px] h-[360px] overflow-hidden rounded-full">
          <Image
            src="/profile2.JPG"
            alt="Karl Joseph Estipona"
            width={360}
            height={360}
            className="rounded-full border-4 border-white shadow-lg object-cover scale-110"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4">Karl Joseph Estipona</h1>
        <p className="mt-2 text-lg">Back-End Developer & Designer</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">Skills</a></li>
            <li><a href="#certificates" className="hover:text-indigo-300">Certificates</a></li>
            <li><a href="#resume" className="hover:text-indigo-300">Resume</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi! I am Karl Joseph, a back-end developer with experience in React.js, Next.js, Tailwind CSS, and C# enthusiast. I enjoy building responsive and user-friendly websites, with a focus on innovative solutions like my MediFind project.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>
          <div className="grid grid-cols-1 gap-6 justify-center">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-white animate-fade-in hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-center">MediFind</h3>
              <Image
                src="/logos/logo2.png"
                alt="MediFind Logo"
                width={60}
                height={60}
                className="mb-4 rounded-full"
              />
              <p className="text-white mb-4 text-center">
                A smart app that locates nearby pharmacies and checks medicine prices.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">JavaScript</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">SQL</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">Python</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">React Native Expo</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">CSS</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-white animate-fade-in hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-center">Rental Management System</h3>
              <Image
                src="/logos/logo3.png"
                alt="Rental Management System Logo"
                width={60}
                height={60}
                className="mb-4 rounded-full"
              />
              <p className="text-white mb-4 text-center">
                A console-based rental management system for small-scale boarding house or apartment monitoring.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">C#</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">SQL</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">Console App</span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-cyan-600 p-6 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-white animate-fade-in hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2 text-center">ManPro Biometrics</h3>
              <Image
                src="/logos/logo4.png"
                alt="ManPro Biometrics Logo"
                width={60}
                height={60}
                className="mb-4 rounded-full"
              />
              <p className="text-white mb-4 text-center">
                A console app that stores and controls employees login attendance.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">C#</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">PHP</span>
                <span className="inline-block bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded">Console App</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Languages</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>C#</li>
            <li>C++</li>
            <li>PHP</li>
          </ul>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/1.png" alt="Certificate 1" width={200} height={150} className="mx-auto" />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/2.png" alt="Certificate 2" width={200} height={150} className="mx-auto" />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/3.png" alt="Certificate 3" width={200} height={150} className="mx-auto" />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/4.png" alt="Certificate 4" width={200} height={150} className="mx-auto" />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/5.png" alt="Certificate 5" width={200} height={150} className="mx-auto" />
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <Image src="/certificates/6.png" alt="Certificate 6" width={200} height={150} className="mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            View or download my resume to learn more about my professional experience and qualifications.
          </p>
          <div className="flex justify-center">
            <a
              href="./public/resume.pdf"
              download="resume.pdf"
              className="inline-block bg-indigo-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <div className="space-y-2">
            <p className="flex items-center space-x-2">
              <span className="font-medium">Yahoo:</span>
              <a href="mailto:estiponakarl@yahoo.com" className="text-blue-600 hover:underline">estiponakarl@yahoo.com</a>
              <a href="https://mail.yahoo.com/" target="_blank" rel="noopener noreferrer">
                <Image src="/logos/yahoo.png" alt="Yahoo" width={24} height={24} />
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-medium">GitHub:</span>
              <a href="https://github.com/zeppyfloof" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">zeppyfloof</a>
              <a href="https://github.com/zeppyfloof" target="_blank" rel="noopener noreferrer">
                <Image src="/logos/github.png" alt="GitHub" width={24} height={24} />
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>© 2025 Karl Joseph Estipona. All rights reserved.</p>
      </footer>
    </div>
  );
}