import { createStore } from "redux";

const initialState = {
  jugadores: [
    {
      id: 1,
      nombre: "Abel Rodriguez",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 2,
      nombre: "Jesus Rodriguez",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 3,
      nombre: "Jeremias Romero",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 4,
      nombre: "Christian Salazar",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 5,
      nombre: "Christopher Pereira",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 6,
      nombre: "Jose Antonio",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 7,
      nombre: "Wilmer Potela",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 8,
      nombre: "Alvin Rodriguez",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 9,
      nombre: "Santiago Rodriguez",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 10,
      nombre: "Alejandro Portillo",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 11,
      nombre: "Alejandro Hernandez",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 12,
      nombre: "Victor Carreño",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
    {
      id: 13,
      nombre: "Adrian Camejo",
      foto: "https://avatars.githubusercontent.com/u/69878476?v=4",
    },
  ],
  titulares: [],
  suplentes: [],
};

const reducerEntrenador = (state = initialState, action) => {
  switch (action.type) {
    case "AGREGAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "AGREGAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.jugador),
        jugadores: state.jugadores.filter((j) => j.id !== action.jugador.id),
      };
    case "QUITAR_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    case "QUITAR_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter((j) => j.id !== action.jugador.id),
        jugadores: state.jugadores.concat(action.jugador),
      };
    default:
      return state;
  }
};

export default createStore(reducerEntrenador);
