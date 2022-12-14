import { Download } from '@src/pages/download';
import { Home } from '@src/pages/home';
import { Ibank } from '@src/pages/ibank';
import { Fnd } from '@src/pages/ibank/fnd';
import { Query } from '@src/pages/ibank/query';
import { Twd } from '@src/pages/ibank/twd';
import { Login } from '@src/pages/login';
import { useRoutes } from 'react-router-dom';

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