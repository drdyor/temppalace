import { Route, Switch, Router } from 'wouter';
import { useHashLocation } from 'wouter/use-hash-location';
import { LanguageProvider } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { DialogueProgressProvider } from './context/DialogueProgressContext';
import HomePage from './pages/HomePage';
import RoomListPage from './pages/RoomListPage';
import RoomPage from './pages/RoomPage';
import ReviewPage from './pages/ReviewPage';
import AuditPage from './pages/AuditPage';
import VocabPreviewPage from './pages/VocabPreviewPage';

function App() {
  return (
    <Router hook={useHashLocation}>
      <LanguageProvider>
        <ProgressProvider>
          <DialogueProgressProvider>
            <Switch>
              <Route path="/" component={HomePage} />
              <Route path="/rooms" component={RoomListPage} />
              <Route path="/rooms/:roomId" component={RoomPage} />
              <Route path="/review" component={ReviewPage} />
              <Route path="/audit" component={AuditPage} />
              <Route path="/preview" component={VocabPreviewPage} />
            </Switch>
          </DialogueProgressProvider>
        </ProgressProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
