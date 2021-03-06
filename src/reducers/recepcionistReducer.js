import { types } from '../types/types';

const initial = {
    medicos: [],
    activePaciente: {},
    eventos: [],
    activeEvent: {}
}

export const recepcionistReducer = (state = initial, action) => {
    switch (action.type) {
        case types.startGetMedicos:
            return {
                ...state,
                medicos: action.payload
            }

        case types.createPaciente:
            return {
                ...state,
                activePaciente: action.payload
            }

        case types.getInfoPaciente:
            return {
                ...state,
                activePaciente: action.payload
            }

        case types.clearActivePaciente:
            return {
                ...state,
                activePaciente: {}
            }

        case types.getAgenda:
            return {
                ...state,
                eventos: action.payload
            }

        case types.activeEvent:
            console.log('me active');
            return {
                ...state,
                activeEvent: action.payload
            }

        case types.clearActiveEvent:
            console.log('hola voy a borrar');
            return {
                ...state,
                activeEvent: {}
            }

        case types.deleteEvent:
            return {
                ...state,
                eventos: state.eventos.filter(e => e.id !== state.activeEvent.id)
            }

        case types.finalizarCita:
            return {
                ...state,
                eventos: state.eventos.filter(e => e.id !== action.payload)
            }
        default:
            return state;
    }
}