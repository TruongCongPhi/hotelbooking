import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

const Demo = lazy(() => import('@/pages/Demo.jsx'));

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

const Invoice = lazy(() => import('@/pages/Invoice'));
const InvoiceCreate = lazy(() => import('@/pages/Invoice/InvoiceCreate'));

const InvoiceRead = lazy(() => import('@/pages/Invoice/InvoiceRead'));
const InvoiceUpdate = lazy(() => import('@/pages/Invoice/InvoiceUpdate'));
const InvoiceRecordPayment = lazy(() => import('@/pages/Invoice/InvoiceRecordPayment'));
const Quote = lazy(() => import('@/pages/Quote/index'));
const QuoteCreate = lazy(() => import('@/pages/Quote/QuoteCreate'));
const QuoteRead = lazy(() => import('@/pages/Quote/QuoteRead'));
const QuoteUpdate = lazy(() => import('@/pages/Quote/QuoteUpdate'));
const Payment = lazy(() => import('@/pages/Payment/index'));
const PaymentRead = lazy(() => import('@/pages/Payment/PaymentRead'));
const PaymentUpdate = lazy(() => import('@/pages/Payment/PaymentUpdate'));

const Settings = lazy(() => import('@/pages/Settings/Settings'));
const PaymentMode = lazy(() => import('@/pages/PaymentMode'));
const Taxes = lazy(() => import('@/pages/Taxes'));

const Profile = lazy(() => import('@/pages/Profile'));

const About = lazy(() => import('@/pages/About'));

let routes = {
  expense: [],
  default: [
    {
      path: '/demo',
      element: <Demo to="/demo" />,
    },
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
      path: '/invoice',
      element: <Invoice />,
    },
    {
      path: '/invoice/create',
      element: <InvoiceCreate />,
    },
    {
      path: '/invoice/read/:id',
      element: <InvoiceRead />,
    },
    {
      path: '/invoice/update/:id',
      element: <InvoiceUpdate />,
    },
    {
      path: '/invoice/pay/:id',
      element: <InvoiceRecordPayment />,
    },
    {
      path: '/quote',
      element: <Quote />,
    },
    {
      path: '/quote/create',
      element: <QuoteCreate />,
    },
    {
      path: '/quote/read/:id',
      element: <QuoteRead />,
    },
    {
      path: '/quote/update/:id',
      element: <QuoteUpdate />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment/read/:id',
      element: <PaymentRead />,
    },
    {
      path: '/payment/update/:id',
      element: <PaymentUpdate />,
    },

    {
      path: '/settings',
      element: <Settings />,
    },
    {
      path: '/settings/edit/:settingsKey',
      element: <Settings />,
    },
    {
      path: '/payment/mode',
      element: <PaymentMode />,
    },
    {
      path: '/taxes',
      element: <Taxes />,
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
