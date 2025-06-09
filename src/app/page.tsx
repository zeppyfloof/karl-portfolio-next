import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-purple-200 to-indigo-200 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gray-900 text-white p-6 text-center relative">
        <Image
          src="/profile.jpg"
          alt="Karl Joseph Estipona"
          width={120}
          height={120}
          className="mx-auto rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">Karl Joseph Estipona</h1>
        <p className="mt-2 text-lg">Web Developer & Designer</p>
        <nav className="absolute top-4 right-4">
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-indigo-300">About</a></li>
            <li><a href="#projects" className="hover:text-indigo-300">Projects</a></li>
            <li><a href="#skills" className="hover:text-indigo-300">Skills</a></li>
            <li><a href="#certificates" className="hover:text-indigo-300">Certificates</a></li>
            <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <section id="about" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            Hi! I'm Karl, a passionate web developer with experience in React.js, Next.js, and Tailwind CSS. I enjoy building responsive and user-friendly websites, with a focus on innovative solutions like my MediFind project.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium">MediFind</h3>
              <p className="text-gray-600">A smart app that locates nearby pharmacies and checks medicine prices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
          </ul>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 px-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium">Certificate 1</h3>
              <p className="text-gray-600">Details about your first certificate.</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-medium">Certificate 2</h3>
              <p className="text-gray-600">Details about your second certificate.</p>
            </div>
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
                <Image src="/logos/yahoo.png" alt="yahoo" width={24} height={24} />
              </a>
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-medium">GitHub:</span>
              <a href="https://github.com/zeppyfloof" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">zeppyfloof</a>
              <a href="https://github.com/zeppyfloof" target="_blank" rel="noopener noreferrer">
                <Image src="/logos/github.png" alt="github" width={24} height={24} />
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