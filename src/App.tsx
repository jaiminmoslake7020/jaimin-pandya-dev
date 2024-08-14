import {useEffect, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './icons';
import Profile from './components/app-sections/Profile';
import Experience from './components/app-sections/Experience';
import Education from './components/app-sections/Education';
import Projects from './components/app-sections/Projects';
import Skills from './components/app-sections/Skills';

function App() {

  const [theme, setTheme] = useState<string>('light');

  useEffect(() => {
      const mount = () => {
          const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
          if (prefersDarkScheme) {
              const x = localStorage.getItem('theme');
              if (x === 'light') {
                  setTheme('dark');
                  localStorage.setItem('theme', 'dark');
              } else if (x) {
                  setTheme(x);
              }
          } else {
              const x = localStorage.getItem('theme');
              if (x) {
                  setTheme(x);
              }
          }
      }
      return mount();
  }, [])

  return (
    <div data-theme={theme} className="App">
      <Header theme={theme} setTheme={(x:string) => {
          setTheme(x);
          localStorage.setItem('theme', x);
      }} />
      <main className={"main-content"}>
          <Profile />
          <Experience />
          <Education />
          <Projects />
          <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
