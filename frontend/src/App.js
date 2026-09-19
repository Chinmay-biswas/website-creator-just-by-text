import { ClerkProvider} from "@clerk/clerk-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import LoginPage from "./components/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dark } from "@clerk/themes";
import AboutUs from "./pages/AbooutUs";
const clerkPublishableKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const MissingConfiguration = () => (
  <main className="min-h-screen bg-[#120d1d] text-white flex items-center justify-center p-6">
    <section className="max-w-lg rounded-xl border border-white/15 bg-white/5 p-8 text-center shadow-xl">
      <h1 className="text-3xl font-semibold">Chinmay AI Web</h1>
      <p className="mt-4 text-gray-300">
        This deployment is ready for configuration. Add REACT_APP_CLERK_PUBLISHABLE_KEY in Vercel, then redeploy to enable sign-in.
      </p>
    </section>
  </main>
);

const App = () => (
  !clerkPublishableKey ? <MissingConfiguration /> :
  <ClerkProvider
  appearance={{
    baseTheme: [dark],
  }}
  publishableKey={clerkPublishableKey}>
    <Router>
      <Routes>
      <Route path="/" element={<Wrapper CurrentComponent={<LoginPage />} />} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Router>
  </ClerkProvider>

);

export default App;
