import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RootStoreProvider } from "./providers";
import Loading from './components/custom/LoadingScreen'


ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Loading />}>
      <RootStoreProvider>
        <App />
      </RootStoreProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
