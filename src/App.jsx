import { useMemo, useState, useEffect } from 'react'
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster} from 'react-hot-toast';
import CalculatorPage from "./components/calculatorPage/CalculatorPage.jsx"
import Header from "./components/Header.jsx";
import NotFound from "./components/NotFound";

const App = () => {
    const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
      localStorage.setItem("theme", mode);
      if (mode === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, [mode]);

    const appTheme = useMemo(() =>
      createTheme({
        palette: {
          mode: mode,
        },
      }), [mode]);

  return (
      <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <div className="min-h-screen flex flex-col">
          <Router>
            <Header setMode={setMode} currentMode={mode}/>
            <Toaster position="bottom-center" reverseOrder={false} />
            <Routes>
              <Route path="/" element={<CalculatorPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            {/*       <Footer /> */}
          </Router>
      </div>
      </ThemeProvider>
  );
};

export default App;
