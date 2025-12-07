import React, { createContext, useContext, useState, useEffect } from 'react';

type Exercise = string;

type Day = {
  name: string;
  workoutName?: string;
  exercises: Exercise[];
};

type Week = {
  week: number;
  days: Day[];
};

export type Program = {
  id: string;
  name: string;
  weeks: Week[];
};

type ProgramContextType = {
  programs: Program[];
  addProgram: () => Program;
  updateProgram: (program: Program) => void;
  removeProgram: (id: string) => void;
};

const ProgramContext = createContext<ProgramContextType | undefined>(undefined);

export const ProgramProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load programs from localStorage on init (with safe parsing + minimal normalization)
  const [programs, setPrograms] = useState<Program[]>(() => {
    try {
      const stored = localStorage.getItem('programs');
      if (stored) {
        const parsed = JSON.parse(stored);
        return parsed.map((p: any) => ({
          id: p.id ?? Date.now().toString(),
          name: p.name ?? 'Untitled Program',
          weeks: (p.weeks ?? []).map((wk: any, idx: number) => ({
            week: wk.week ?? idx + 1,
            days: (wk.days ?? []).map((d: any, dIdx: number) => ({
              name: d.name ?? `Day ${dIdx + 1}`,
              workoutName: d.workoutName ?? '',
              exercises: d.exercises ?? [],
            })),
          })),
        }));
      }
    } catch (err) {
      console.error('Failed to parse localStorage programs:', err);
    }
    return [];
  });

  // Persist programs on change
  useEffect(() => {
    localStorage.setItem('programs', JSON.stringify(programs));
  }, [programs]);

  // Smart defaults: scaffold Week 1 with three sensible days
  const addProgram = (): Program => {
    const newProgram: Program = {
      id: Date.now().toString(),
      name: 'Untitled Program',
      weeks: [
        {
          week: 1,
          days: [
            { name: 'Day 1', workoutName: 'Chest, Trisep, Back, Bisep', exercises: [] },
            { name: 'Day 2', workoutName: 'Shoulders, Trapizious', exercises: [] },
            { name: 'Day 3', workoutName: 'Legs', exercises: [] },
          ],
        },
      ],
    };
    setPrograms((prev) => [...prev, newProgram]);
    return newProgram;
  };

  const updateProgram = (program: Program) => {
    setPrograms((prev) => prev.map((p) => (p.id === program.id ? program : p)));
  };

  const removeProgram = (id: string) => {
    setPrograms((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProgramContext.Provider value={{ programs, addProgram, updateProgram, removeProgram }}>
      {children}
    </ProgramContext.Provider>
  );
};

export const usePrograms = () => {
  const ctx = useContext(ProgramContext);
  if (!ctx) throw new Error('usePrograms must be used within ProgramProvider');
  return ctx;
};