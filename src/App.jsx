import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AppContextProvider from './AppContextProvider/AppContext';
import GenerePage from './Pages/GenerePage';
import CaraouselPage from './Pages/CaraouselPage';
import DashboardPage from './Pages/DashboardPage';
import MoviesPage from './Pages/MoviesPage';

// comment 

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/HomePage' element={<HomePage/>}/>
          <Route path='/GenerePage' element={<GenerePage/>}/>
          <Route path='/CaraouselPage' element={<CaraouselPage/>}/>
          <Route path='/DashboardPage' element={<DashboardPage/>}/>
          <Route path='/MoviesPage' element={<MoviesPage/>}/>
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App;
