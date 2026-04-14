import { Route, Switch } from 'wouter';
import { LanguageProvider } from './context/LanguageContext';
import { ProgressProvider } from './context/ProgressContext';
import { DialogueProgressProvider } from './context/DialogueProgressContext';
import HomePage from './pages/HomePage';
import RoomListPage from './pages/RoomListPage';
import RoomPage from './pages/RoomPage';

function App() {
  return (
    <LanguageProvider>
      <ProgressProvider>
        <DialogueProgressProvider>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/rooms" component={RoomListPage} />
            <Route path="/rooms/:roomId" component={RoomPage} />
          </Switch>
        </DialogueProgressProvider>
      </ProgressProvider>
    </LanguageProvider>
  );
}

export default App;
