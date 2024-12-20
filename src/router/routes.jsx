import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Logout = lazy(() => import('@/pages/Logout.jsx'));
const NotFound = lazy(() => import('@/pages/NotFound.jsx'));

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Customer = lazy(() => import('@/pages/Customer'));
const Amenity = lazy(() => import('@/pages/Amenity'));
const Service = lazy(() => import('@/pages/Service'));
const RoomType = lazy(() => import('@/pages/RoomType'));
const Room = lazy(() => import('@/pages/Room'));
const RoomCreate = lazy(() => import('@/pages/Room/RoomCreate'));
const RoomUpdate = lazy(() => import('@/pages/Room/RoomUpdate'));
const RoomRead = lazy(() => import('@/pages/Room/RoomRead'));
const RoomBooking = lazy(() => import('@/pages/RoomBooking'));
const RoomBookingRead = lazy(() => import('@/pages/RoomBooking/RoomBookingRead'));

const Tour = lazy(() => import('@/pages/Tour'));
const TourCreate = lazy(() => import('@/pages/Tour/TourCreate'));
const TourUpdate = lazy(() => import('@/pages/Tour/TourUpdate'));
const TourRead = lazy(() => import('@/pages/Tour/TourRead'));

const Profile = lazy(() => import('@/pages/Profile'));

const About = lazy(() => import('@/pages/About'));

let routes = {
  expense: [],
  default: [
    {
      path: '/login',
      element: <Navigate to="/" />,
    },
    {
      path: '/logout',
      element: <Logout />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/user',
      element: <Customer />,
    },
    {
      path: '/amenity',
      element: <Amenity />,
    },
    {
      path: '/service',
      element: <Service />,
    },
    {
      path: '/roomtype',
      element: <RoomType />,
    },
    {
      path: '/room',
      element: <Room />,
    },
    {
      path: '/room/create',
      element: <RoomCreate />,
    },
    {
      path: '/room/update/:id',
      element: <RoomUpdate />,
    },
    {
      path: '/room/read/:id',
      element: <RoomRead />,
    },
    {
      path: '/roombooking',
      element: <RoomBooking />,
    },
    {
      path: '/roombooking/read/:id',
      element: <RoomBookingRead />,
    },
    {
      path: '/tour',
      element: <Tour />,
    },
    {
      path: '/tour/create',
      element: <TourCreate />,
    },
    {
      path: '/tour/update/:id',
      element: <TourUpdate />,
    },
    {
      path: '/tour/read/:id',
      element: <TourRead />,
    },

    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
};

export default routes;
