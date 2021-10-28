import { BrowserRouter } from 'react-router-dom';
import { OrderContextProvider } from './contexts/OrderContext';
import Routes from './routes'
import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <OrderContextProvider>
        <Routes />
      </OrderContextProvider>
    </BrowserRouter>
  );
}

export default App;
