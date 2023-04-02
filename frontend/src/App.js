import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.route';
import Dashboard from './routes/dashboard.route';
import Login from './routes/login.route';

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

  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Dashboard></Dashboard>
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
