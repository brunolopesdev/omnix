import "./App.css";
import Routes from "./Routes";
import { DataContextProvider } from "./context";
import { Footer } from "./components/Footer";

function App() {
  return (
    <DataContextProvider>
      <Routes />
      <Footer />
    </DataContextProvider>
  );
}

export default App;
