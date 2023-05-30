import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './config/AppRouter';
import Store from './Redux/Store/store';
function App() {
  return (
    <Provider store={Store}>
      <AppRouter />
    </Provider>

  );
}

export default App;
