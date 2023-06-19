import { BrowserRouter } from 'react-router-dom';
import ListPage from './pages/list-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <ListPage />
      </BrowserRouter>
    </>
  );
}

export default App;
