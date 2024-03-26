import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  return (
    <Routes>
      {routes.map(({ path, Layout, Component }) => (
        <Route
          key={path}
          path={path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        ></Route>
      ))}
    </Routes>
  );
};

export default App;
