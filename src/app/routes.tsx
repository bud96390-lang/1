import { createBrowserRouter } from 'react-router';
import ClubHome from './pages/ClubHome';
import EnergyLawsHome from './pages/EnergyLawsHome';
import SpherePage from './pages/SpherePage';
import LawDetailPage from './pages/LawDetailPage';
import MeditationsPage from './pages/MeditationsPage';
import SchedulePage from './pages/SchedulePage';
import PodcastsPage from './pages/PodcastsPage';
import IntensivesPage from './pages/IntensivesPage';
import ReviewsPage from './pages/ReviewsPage';
import BroadcastsPage from './pages/BroadcastsPage';
import UsefulMaterialsPage from './pages/UsefulMaterialsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ClubHome />,
  },
  {
    path: '/energy-laws',
    element: <EnergyLawsHome />,
  },
  {
    path: '/sphere/:sphereId',
    element: <SpherePage />,
  },
  {
    path: '/sphere/:sphereId/law/:lawId',
    element: <LawDetailPage />,
  },
  {
    path: '/meditations',
    element: <MeditationsPage />,
  },
  {
    path: '/schedule',
    element: <SchedulePage />,
  },
  {
    path: '/podcasts',
    element: <PodcastsPage />,
  },
  {
    path: '/intensives',
    element: <IntensivesPage />,
  },
  {
    path: '/reviews',
    element: <ReviewsPage />,
  },
  {
    path: '/broadcasts',
    element: <BroadcastsPage />,
  },
  {
    path: '/materials',
    element: <UsefulMaterialsPage />,
  },
]);