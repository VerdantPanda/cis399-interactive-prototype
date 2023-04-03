import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.route';
import Dashboard from './routes/dashboard.route';
import Login from './routes/login.route';
import { useState } from 'react';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        // {
        //   path: 'Dashboard',
        //   element: <Dashboard />,
        // },
        // {
        //   path: 'songs',
        //   element: <Songs />,
        // },
        // {
        //   path: 'artists',
        //   element: <Artists />,
        // },
        // {
        //   path: 'recommendations',
        //   element: <Recommendations />,
        // },
        // {
        //   path: 'trivia',
        //   element: <Trivia />,
        // },
      ],
    },
  ]);

  const [login, setLogin] = useState(true);

  return (
    <div className="App" style={{ height: '100vh' }}>
      {/* <RouterProvider router={router} /> */}
      {/* <Dashboard></Dashboard> */}

      {login ? <Login switchPage={setLogin}></Login> : <Dashboard></Dashboard>}
    </div>
  );
}

export default App;
