import {useState} from 'react';
import ThemeButton from './components/base/ThemeButton';
import Header from './components/base/Header';
import Footer from './components/base/Footer';

function App() {

  const [theme, setTheme] = useState<string>('light');

  return (
    <div data-theme={theme} className="App">
      <Header />
      <div className={"flex flex-col gap-4"}>
          <ThemeButton setTheme={setTheme} currentTheme={theme} btnLabel={"Light"} btnTheme={"light"} />
          <ThemeButton setTheme={setTheme} currentTheme={theme} btnLabel={"Dark"} btnTheme={"dark"} />
          <ThemeButton setTheme={setTheme} currentTheme={theme} btnLabel={"Blue"} btnTheme={"blue"} />
          <ThemeButton setTheme={setTheme} currentTheme={theme} btnLabel={"Green"} btnTheme={"green"} />
          <ThemeButton setTheme={setTheme} currentTheme={theme} btnLabel={"Purple"} btnTheme={"purple"} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
