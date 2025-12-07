// src/store/programs.ts
export type Program = {
  id: string;
  name: string;
  weeks: { week: number; days: Day[] }[];
};

export type Day = {
  name: string;          // e.g., "Push", "Legs"
  workoutName?: string;  // name for the specific session
  exercises: string[];   // simple list for now
};

const KEY = 'programs';

function loadAll(): Record<string, Program> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveAll(map: Record<string, Program>) {
  localStorage.setItem(KEY, JSON.stringify(map));
}

export function getProgram(id: string): Program | null {
  const map = loadAll();
  return map[id] ?? null;
}

export function saveProgram(program: Program): void {
  const map = loadAll();
  map[program.id] = program;
  saveAll(map);
}

export function createNewProgram(): Program {
  const id = Date.now().toString();
  const program: Program = {
    id,
    name: '',
    weeks: [{ week: 1, days: [] }],
  };
  saveProgram(program);
  return program;
}