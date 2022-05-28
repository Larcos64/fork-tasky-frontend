import React from 'react';
import {
  PublicPage, HomePage, AboutPage, DummyPage, TagPage,
} from '../pages';

const MainRoutes = {
  path: '/',
  element: <PublicPage />,
  children: [
    {
      path: 'home',
      element: <HomePage />,
    },
    {
      path: 'about',
      element: <AboutPage />,
    },
    {
      path: 'dummies',
      element: <DummyPage />,
    },
    {
      path: 'tags',
      element: <TagPage />,
    },
  ],
};

export default MainRoutes;
