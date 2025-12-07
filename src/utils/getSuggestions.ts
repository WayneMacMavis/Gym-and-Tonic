import { workouts } from "../data/workouts";
import type { Workout } from "../data/workouts";

// Map your custom workout names to categories
const workoutNameToCategories: Record<string, string[]> = {
  "Chest, Trisep, Back, Bisep": ["Chest", "Back", "Arms"],
  "Shoulders, Trapizious": ["Shoulders"],
  "Legs": ["Legs", "Glutes"],
  "Core": ["Core"],
  "Full Body": ["Full Body"],
};

// Function to get suggestions for a given workoutName
export function getSuggestionsForWorkoutName(workoutName: string): Workout[] {
  const categories = workoutNameToCategories[workoutName] ?? [];
  return workouts.filter((w) => categories.includes(w.category));
}