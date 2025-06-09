import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-blue-700 text-white p-6 text-center relative animate-fadeIn">
        <Image
          src="/profile.jpg"
          alt="Karl Joseph Estipona"
          width={96}
          height={96}
          className="mx-auto rounded-full mb-4 object-cover"
        />
        <h1 className="text-4xl font-bold">Karl Joseph Estipona</h1>
        <p className="mt-2 text-lg">Web Developer & Designer</p>
        <nav className="absolute top-4 right-4">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-200">Skills</a></li>
            <li><a href="#certificates" className="hover:text-blue-200">Certificates</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto animate-slideUp">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi! I'm Karl, a passionate web developer with experience in React.js, Tailwind CSS, and more. I love creating user-friendly and responsive websites.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 max-w-4xl mx-auto bg-gradient-to-r from-blue-100 to-white animate-slideUp delay-200">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 animate-popIn">
            <h3 className="text-xl font-medium">MediFind</h3>
            <p>A smart app that can locate nearby pharmacies and check its medicine prices.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 max-w-4xl mx-auto animate-slideUp delay-400">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="list-disc list-inside text-lg space-y-2">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-6 max-w-4xl mx-auto bg-gradient-to-r from-gray-100 to-white animate-slideUp delay-600">
        <h2 className="text-3xl font-semibold mb-6">Certificates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 animate-popIn">
            <h3 className="text-xl font-medium">Certificate 1</h3>
            <p>Details about your first certificate go here.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 animate-popIn delay-100">
            <h3 className="text-xl font-medium">Certificate 2</h3>
            <p>Details about your second certificate go here.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto bg-gradient-to-r from-gray-200 to-white animate-slideUp delay-800">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="text-lg leading-relaxed space-y-2">
          <p className="flex items-center space-x-2">
            <span>Yahoo: </span>
            <a href="mailto:estiponakarl@yahoo.com" className="hover:text-blue-500">estiponakarl@yahoo.com</a>
            <a href="https://mail.yahoo.com/" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/yahoo.png" alt="Yahoo" width={24} height={24} />
            </a>
          </p>
          <p className="flex items-center space-x-2">
            <span>GitHub: </span>
            <a href="https://github.com/zeppyfloof" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">zeppyfloof</a>
            <a href="https://github.com/zeppyfloof" target="_blank" rel="noopener noreferrer">
              <Image src="/logos/github.png" alt="GitHub" width={24} height={24} />
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white p-4 text-center animate-fadeIn delay-1000">
        <p>© 2025 Karl Joseph Estipona. All rights reserved.</p>
      </footer>
    </div>
  );
}