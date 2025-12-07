// src/state/AppStateContext.tsx
import { createContext, useReducer, useEffect, useMemo } from 'react';
import type { ReactNode } from 'react';  // <-- type-only import


type State = {
  programs: any[];
  session: any | null;
  history: any[];
  settings: { units: 'kg' | 'lb'; theme: 'dark' };
};

const initialState: State = {
  programs: [],
  session: null,
  history: [],
  settings: { units: 'kg', theme: 'dark' },
};

type Action =
  | { type: 'ADD_PROGRAM'; payload: any }
  | { type: 'UPDATE_PROGRAM'; payload: any }
  | { type: 'START_SESSION'; payload: any }
  | { type: 'UPDATE_SESSION'; payload: any }
  | { type: 'END_SESSION'; payload: { historyEntry: any } };

function rootReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_PROGRAM':
      return { ...state, programs: [...state.programs, action.payload] };
    case 'UPDATE_PROGRAM':
      return {
        ...state,
        programs: state.programs.map(p => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'START_SESSION':
      return { ...state, session: action.payload };
    case 'UPDATE_SESSION':
      return { ...state, session: { ...state.session, ...action.payload } };
    case 'END_SESSION':
      return { ...state, history: [...state.history, action.payload.historyEntry], session: null };
    default:
      return state;
  }
}

export const AppStateContext = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
  state: initialState,
  dispatch: () => {},
});

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(rootReducer, initialState, (init) => {
    const saved = localStorage.getItem('gymAppState');
    return saved ? JSON.parse(saved) : init;
  });

  useEffect(() => {
    localStorage.setItem('gymAppState', JSON.stringify(state));
  }, [state]);

  const value = useMemo(() => ({ state, dispatch }), [state]);
  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}