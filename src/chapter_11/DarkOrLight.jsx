import { useState, useCallback } from 'react';
import ThemeContext from './Themecontext';
import MainContent from './MainContext';

function DarkOrLight(props) {
  const [theme, setTheme] = useState("Light");

  const toggleTheme = useCallback(() => {
    if (theme === "Light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;