import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/Jugadores";
import EquipoSeleccionado from "./components/EquipoSeleccionado";

function App() {
  return (
    <Provider store={store}>
      <main>
        <h1>Abel Team Manager</h1>
        <Jugadores /> 
        <EquipoSeleccionado />
      </main>
    </Provider>
  );
}

export default App;
