import { Toaster } from "react-hot-toast";
import AppLayout from "./layouts/AppLayout";
import Router from "./routers/Router";

function App() {
  return (
    <div className="container mx-auto">
      <Toaster />
      <AppLayout>
        <Router />
      </AppLayout>
    </div>
  );
}

export default App;
