import {useState} from 'react';
import Header from './components/base/Header';
import Footer from './components/base/Footer';

function App() {

  const [theme, setTheme] = useState<string>('light');

  return (
    <div data-theme={theme} className="App">
      <Header theme={theme} setTheme={setTheme} />
      <main className={"main-content"}>

      </main>
      <Footer />
    </div>
  );
}

export default App;
