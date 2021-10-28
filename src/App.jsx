import "./App.css";
import Routes from "./Routes";
import { DataContextProvider } from "./context";

function App() {
  return (
    <DataContextProvider>
      <Routes />
    </DataContextProvider>
  );
}

export default App;
