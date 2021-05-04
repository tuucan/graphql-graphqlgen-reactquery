import { QueryClient, QueryClientProvider } from 'react-query'
import MainhubManagement from "pages/MainhubManagement";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainhubManagement />
    </QueryClientProvider>
  );
}

export default App;
