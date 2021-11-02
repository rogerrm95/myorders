import { BrowserRouter } from 'react-router-dom';
import { OrderContextProvider } from './contexts/OrderContext';
import { StepProvider } from './contexts/StepContext';
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer />
      <OrderContextProvider>
        <StepProvider>
          <Routes />
        </StepProvider>
      </OrderContextProvider>
    </BrowserRouter>
  );
}

export default App;
