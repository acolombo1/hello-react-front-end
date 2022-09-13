import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import MyStore from './redux/MyStore';
import Greeting from './Greeting';
import GetAPI from './redux/getAPI';

function App() {
  MyStore.dispatch(GetAPI());
  return (
    <Provider store={MyStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
