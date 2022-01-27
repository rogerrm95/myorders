import { BrowserRouter } from 'react-router-dom';
import { OrderContextProvider } from './contexts/OrderContext';
import { StepProvider } from './contexts/StepContext';
import Routes from './routes'
import { ToastContainer } from 'react-toastify'

import GlobalStyle from './styles/global';
import { AuthContextProvider } from './contexts/AuthContext';
function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <GlobalStyle />
        <ToastContainer />
        <OrderContextProvider>
          <StepProvider>
            <Routes />
          </StepProvider>
        </OrderContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
