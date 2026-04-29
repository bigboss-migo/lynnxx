import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import ProjectGrid from './components/ProjectGrid';
import Cursor from './components/Cursor';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('home');
  const [scrollToProject, setScrollToProject] = useState(null);

  // From the homepage floating grid: jump to portfolio + remember which section
  const handleProjectClick = (projectId) => {
    if (projectId === 7) {
      // The index tile / "Show me more" → top of portfolio
      setScrollToProject(null);
    } else {
      setScrollToProject(projectId);
    }
    setPage('portfolio');
  };

  // From the menu / logo
  const navigateTo = (target) => {
    setScrollToProject(null);
    setPage(target);
  };

  const isHome = page === 'home';

  return (
    <div className={`App ${isHome ? 'home h-screen overflow-hidden' : 'min-h-screen'} bg-black`}>
      {isHome && <Cursor />}
      {isHome && <div className="lynxx-background">LYNXX</div>}

      <Header onNavigate={navigateTo} variant={isHome ? 'home' : 'light'} />

      <main className={isHome ? 'h-screen' : 'pt-24'}>
        {page === 'home' && <ProjectGrid onItemClick={handleProjectClick} />}
        {page === 'about' && <About />}
        {page === 'portfolio' && (
          <Portfolio
            scrollToProject={scrollToProject}
            clearScrollTarget={() => setScrollToProject(null)}
          />
        )}
        {page === 'contact' && <Contact />}
      </main>
    </div>
  );
}

export default App;
