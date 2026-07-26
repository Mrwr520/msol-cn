import { Routes, Route } from 'react-router-dom';
import { RootLayout } from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import FeaturePage from './pages/FeaturePage';
import FeatureMissionPage from './pages/FeatureMissionPage';
import FeatureBrandPage from './pages/FeatureBrandPage';
import BusinessPage from './pages/BusinessPage';
import BusinessServicePage from './pages/BusinessServicePage';
import BusinessSoftwarePage from './pages/BusinessSoftwarePage';
import BusinessTrainingPage from './pages/BusinessTrainingPage';
import CompanyPage from './pages/CompanyPage';
import CompanyDataPage from './pages/CompanyDataPage';
import CompanyDirectorPage from './pages/CompanyDirectorPage';
import CompanyHistoryPage from './pages/CompanyHistoryPage';
import NewsListPage from './pages/NewsListPage';
import NewsDetailPage from './pages/NewsDetailPage';
import BooksListPage from './pages/BooksListPage';
import BookPmoGuidePage from './pages/BookPmoGuidePage';
import ContactPage from './pages/ContactPage';
import CareersPage from './pages/CareersPage';
import PrivacyPage from './pages/PrivacyPage';
import MarketingPage from './pages/MarketingPage';
import TvcmPage from './pages/TvcmPage';
import ComingSoonPage from './pages/ComingSoonPage';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/feature/mission" element={<FeatureMissionPage />} />
        <Route path="/feature/brand" element={<FeatureBrandPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/business/service" element={<BusinessServicePage />} />
        <Route path="/business/software" element={<BusinessSoftwarePage />} />
        <Route path="/business/training" element={<BusinessTrainingPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/company/company-data" element={<CompanyDataPage />} />
        <Route path="/company/director" element={<CompanyDirectorPage />} />
        <Route path="/company/history" element={<CompanyHistoryPage />} />
        <Route path="/news" element={<NewsListPage />} />
        <Route path="/news/:slug" element={<NewsDetailPage />} />
        <Route path="/books" element={<BooksListPage />} />
        <Route path="/books/pmo-guide" element={<BookPmoGuidePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/tvcm" element={<TvcmPage />} />
        <Route path="*" element={<ComingSoonPage title="页面未找到" />} />
      </Route>
    </Routes>
  );
}

export default App;
