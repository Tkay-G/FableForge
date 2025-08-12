import Navbar from "./Navbar";
import Home from "./Home";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="min-h-screen flex items-center justify-center bg-gray-00">
        <h1 className="text-4x1 font-bold text-blue-600">
          Welcome to FableForge
        </h1>
      </div>
    </>
  );
}
//app as it appears in browser. linked with other components via imports
