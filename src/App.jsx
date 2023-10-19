import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { AuthProvider } from "./context/auth-context";
import { PostProvider } from "./context/Post-Context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <PostProvider>
          <RouterProvider router={router} />
        </PostProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
