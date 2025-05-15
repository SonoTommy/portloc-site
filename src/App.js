
  import React, { useState } from 'react';
  import logo from './assets/logo512.png';
  import logoFull from './assets/PortLoc - esteso logo (2).png';
  import dashboardImg from './assets/first_image.png';

  export default function App() {
    const [dark, setDark] = useState(false);
    const toggleDark = () => setDark(!dark);

    // Download file URLs
    const downloads = [
      { label: 'macOS (arm) (.dmg)', href: '/downloads/PortLoc-1.0.0-arm64.dmg' },
      { label: 'Linux (.AppImage)', href: '/downloads/PortLoc-1.0.0.AppImage' },
      { label: 'Windows (.exe)', href: '/downloads/PortLoc.Setup.1.0.0.exe' },
    ];

    const [services] = useState([
      { id: 1, title: 'Website n°1', port: 8080, folder: 'Website-1', status: 'running', links: ['http://localhost:8080', 'http://192.168.1.8:8080'] },
    ]);
    const [query, setQuery] = useState('');
    const filtered = services.filter(s => s.title.toLowerCase().includes(query.toLowerCase()));

    return (
      <div className={(dark ? 'dark ' : '') + 'min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors'}>

        {/* Header */}
        <header className="flex items-center justify-between p-6 max-w-6xl mx-auto">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Icon" className="w-10 h-10" />
            <span className="text-2xl font-bold">PortLoc</span>
          </div>
          <div className="flex items-center space-x-4">
           
          </div>
        </header>

        <main className="max-w-6xl mx-auto p-6 space-y-12">

          {/* Hero */}
          <section className="text-center space-y-4">
            <img src={logoFull} alt="PortLoc Full Logo" className="mx-auto w-48" />
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Manage <span className="text-blue-600 dark:text-blue-400">Local</span> Services Effortlessly
            </h1>
            <p className="text-lg opacity-80">
              Scan, track, and share your local port services through one intuitive dashboard.
            </p>

            {/* Download Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {downloads.map(d => (
                <a key={d.href} href={d.href} className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition" download>
                  {d.label}
                </a>
              ))}
              <a href="https://github.com/SonoTommy/PortLoc" target="_blank" rel="noopener noreferrer" className="bg-white text-blue-600 font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition">
                View on GitHub
              </a>
            </div>
          </section>

          {/* Dashboard Preview */}
          <section>
            <img src={dashboardImg} alt="PortLoc Dashboard" className="w-full rounded-lg shadow-lg mb-8" />

            {/* Interactive Dashboard Section 
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                placeholder="Search services..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="px-4 py-2 w-full max-w-xs rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              <span className="ml-4 opacity-70">{filtered.length} services found</span>
            </div>
            <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-lg shadow">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    {['Title','Port','Folder','Status','Links','Actions'].map(h => (
                      <th key={h} className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filtered.map(s => (
                    <tr key={s.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                      <td className="px-6 py-4">{s.title}</td>
                      <td className="px-6 py-4">{s.port}</td>
                      <td className="px-6 py-4">{s.folder}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${s.status==='running' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} transition`}>{s.status}</span>
                      </td>
                      <td className="px-6 py-4 space-y-1">
                        {s.links.map(link => (
                          <div key={link} className="flex items-center space-x-1">
                            <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">{link}</a>
                            <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"><small>📋</small></button>
                          </div>
                        ))}
                      </td>
                      <td className="px-6 py-4 space-x-2">
                        <button className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition">■</button>
                        <button className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full transition">✎</button>
                        <button className="p-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full transition">🗑</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>*/}
          </section>
        </main>

        <footer className="py-6 text-center opacity-80">© {new Date().getFullYear()} SonoTommy</footer>
      </div>
    );
  }