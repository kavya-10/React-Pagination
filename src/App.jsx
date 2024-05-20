// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// // Importing the pages to apply routing
// import CharacterDetails from './pages/CharacterDetailspage';
// import CharacterListPage from './pages/CharacterListPage';
// import Errorpage from './pages/404Errorpage';
// import Provider from './Components/Provider';
// import HomePage from './pages/HomePage';
// import Navbar from './Components/Navbar';
// import Footer from './pages/Footer';
// import Favorites from './pages/Favorites';
// import Staff from './pages/Staff';
// import Students from './pages/Students';

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Provider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage/>} />
//           <Route path="/characters" element={<CharacterListPage />} />
//           <Route path="character/:id" element={<CharacterDetails />} />
//           <Route path="/staff" element={<Staff />} />
//           <Route path="/students" element={<Students />} />
//           <Route path="error" element={<Errorpage />} />
//           <Route path="favorites" element={<Favorites />} />
//         </Routes>
//         <Footer />
//       </Provider>
//     </BrowserRouter>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Importing the pages to apply routing
import CharacterDetails from './pages/CharacterDetailspage';
import CharacterListPage from './pages/CharacterListPage';
import Errorpage from './pages/404Errorpage';
import Provider from './Components/Provider';
import HomePage from './pages/homePage';
import Navbar from './Components/Navbar';
import Footer from './pages/Footer';
import Favorites from './pages/Favorites';
import Staff from './pages/Staff';
import Students from './pages/Students';

const App = () => {
  return (
    <BrowserRouter>
      <Provider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterListPage />} />
          <Route path="character/:id" element={<CharacterDetails />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/students" element={<Students />} />
          <Route path="error" element={<Errorpage />} />
          <Route path="favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
};

export default App