import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { AuthProvider } from "./context/auth-context";
import { PostProvider } from "./context/Post-Context";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChatContextProvider } from "./context/ChatContext";
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ChatContextProvider>
          <PostProvider>
            <RouterProvider router={router} />
          </PostProvider>
        </ChatContextProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
