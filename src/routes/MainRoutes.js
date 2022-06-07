import React from 'react';
import {
  PublicPage, HomePage, AboutPage, DummyPage, TagPage, TaskListPage,
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
    {
      path: 'tasklist',
      element: <TaskListPage />,
    },
  ],
};

export default MainRoutes;
