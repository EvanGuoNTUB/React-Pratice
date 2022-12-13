import { useRoutes } from 'react-router-dom';
import { Download } from '../pages/download';
import { Home } from '../pages/home';
import { Ibank } from '../pages/ibank';
import { Fnd } from '../pages/ibank/fnd';
import { Query } from '../pages/ibank/query';
import { Twd } from '../pages/ibank/twd';
import { Login } from '../pages/login';

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/ibank',
    element: <Ibank />,
    children: [
      {
        path: 'twd',
        element: <Twd />,
      },
      {
        path: 'fnd',
        element: <Fnd />,
      },
      {
        path: 'query',
        element: <Query />,
      }
    ],
  }
];

export default () => useRoutes(routes);