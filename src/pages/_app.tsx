import 'src/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import { SSRProvider } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </SSRProvider>
  );
}
