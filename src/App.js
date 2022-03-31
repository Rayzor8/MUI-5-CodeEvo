import './App.css';
import ButtonStack from './components/buttonStack';
import TypographyStack from './components/typographyStack';
import CssBaseline from '@mui/material/CssBaseline';
import BtnToggleGroup from './components/btnToggleGroup';

function App() {
   return (
      <div className="App">
         <CssBaseline />
         <ButtonStack />
         <BtnToggleGroup/>
         <TypographyStack />
      </div>
   );
}

export default App;
