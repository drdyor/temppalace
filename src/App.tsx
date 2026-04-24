import { Suspense, lazy } from 'react';
import { Route, Switch, Router } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import { LanguageProvider } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { DialogueProgressProvider } from './context/DialogueProgressContext';
import HomePage from './pages/HomePage';
import RoomListPage from './pages/RoomListPage';

const RoomPage = lazy(() => import('./pages/RoomPage'));
const ReviewPage = lazy(() => import('./pages/ReviewPage'));
const AuditPage = lazy(() => import('./pages/AuditPage'));
const VocabPreviewPage = lazy(() => import('./pages/VocabPreviewPage'));

function PageLoader() {
  return (
    <div className="min-h-screen bg-palace-bg flex items-center justify-center">
      <div className="text-palace-gold font-cinzel animate-pulse">Loading...</div>
    </div>
  );
}

function App() {
  return (
    <Router hook={useHashLocation}>
      <LanguageProvider>
        <ProgressProvider>
          <DialogueProgressProvider>
            <Suspense fallback={<PageLoader />}>
              <Switch>
                <Route path="/" component={HomePage} />
                <Route path="/rooms" component={RoomListPage} />
                <Route path="/rooms/:roomId" component={RoomPage} />
                <Route path="/review" component={ReviewPage} />
                <Route path="/audit" component={AuditPage} />
                <Route path="/preview" component={VocabPreviewPage} />
              </Switch>
            </Suspense>
          </DialogueProgressProvider>
        </ProgressProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
