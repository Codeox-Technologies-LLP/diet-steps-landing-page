Dimport React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Policy = lazy(() => import("./pages/Policy"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Delete = lazy(() => import("./pages/Delete"));
const Preloader = () => <div>Loading...</div>;
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Suspense fallback={<Preloader />} ><Home /></Suspense>} />
        <Route path="/privacy_policies" element={<Suspense fallback={<Preloader />} ><Policy /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<Preloader />} ><Contact /></Suspense>} />
        <Route path="/terms" element={<Suspense fallback={<Preloader />} ><Terms /></Suspense>} />
        <Route path="/delete_account" element={<Suspense fallback={<Preloader />} ><Delete /></Suspense>} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
