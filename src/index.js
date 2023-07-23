import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from 'components/App';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <ChakraProvider>
        <App />
      </ChakraProvider>{' '}
    </BrowserRouter>{' '}
  </Provider>
);
