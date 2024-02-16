import AppRouter from './router/AppRouter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BusinessNameProvider } from './utility/BusinessContext';

const queryClient = new QueryClient();



function App() {


  return (
    <BusinessNameProvider>
    <QueryClientProvider client={queryClient}>
    <AppRouter/>
    <ToastContainer />
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
    </BusinessNameProvider>
  )
}

export default App
