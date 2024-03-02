import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hi" element={<App />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx'; // Assuming your main component is in App.jsx
// import './index.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

// // Components
// const Home = () => {
//   return <div>Home</div>;
// };

// const Courses = () => {
//   return (
//     <div>
//       <h1>this is the hi route, check routes - search and list</h1>
//       {/* Outlet for rendering nested routes */}
//       <Outlet />  
//     </div>
//   );
// };

// const Search = () => {
//   return <div>Search hi now</div>;
// };

// const List = () => {
//   return <div>hi List</div>;
// };


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} /> {/* Update this to include your App component */}
//         <Route path="/hi" element={<Courses />}>
//           <Route path="search" element={<Search />} />
//           <Route path="list" element={<List />} />
//         </Route>
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );
