// src/data/workouts.ts
export type Workout = {
  name: string;
  category: string;       // Chest | Back | Shoulders | Arms | Legs | Core | Glutes | Full Body
  musclesImage: string;   // path or URL to muscle diagram
  videoUrl: string;       // YouTube tutorial link
};

export const workouts: Workout[] = [
  // --- Chest ---
  { name: "Bench Press", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-1iM" },
  { name: "Incline Barbell Press", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=SrqNf0l6eQw" },
  { name: "Incline Dumbbell Press", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=8iPEnn-ltC8" },
  { name: "Decline Bench Press", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=QZEqB6wUPxQ" },
  { name: "Dumbbell Chest Fly", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0" },
  { name: "Cable Crossover", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=taI4XduLpTk" },
  { name: "Push-Ups", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=IODxDxX7oi4" },
  { name: "Machine Chest Press", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=XHkR2xWtzK0" },
  { name: "Pec Deck", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=V8dZ3dL6RMo" },
  { name: "Weighted Dips (Chest)", category: "Chest", musclesImage: "/images/muscles/chest.png", videoUrl: "https://www.youtube.com/watch?v=6kALZikXxLc" },

  // --- Back ---
  { name: "Pull-Ups", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
  { name: "Chin-Ups", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=bVfZ8bAJX6A" },
  { name: "Lat Pulldown", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
  { name: "Barbell Row", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
  { name: "Pendlay Row", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=5yWaNOvgFCM" },
  { name: "Seated Cable Row", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74" },
  { name: "T-Bar Row", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=V3O9vNiVQ8E" },
  { name: "Single-Arm Dumbbell Row", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=pYcpY20QaE8" },
  { name: "Face Pulls", category: "Back", musclesImage: "/images/muscles/rear-delts.png", videoUrl: "https://www.youtube.com/watch?v=rep-qVOkqgk" },
  { name: "Back Extensions", category: "Back", musclesImage: "/images/muscles/lower-back.png", videoUrl: "https://www.youtube.com/watch?v=c9cS8bC1Zhg" },
  { name: "Deadlifts", category: "Back", musclesImage: "/images/muscles/back.png", videoUrl: "https://www.youtube.com/watch?v=op9kV3pDqLk" },

  // --- Shoulders ---
  { name: "Overhead Press", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog" },
  { name: "Seated Dumbbell Press", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=B-aVuyhvLHU" },
  { name: "Arnold Press", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=vj2w851ZHRM" },
  { name: "Lateral Raises", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=kDqklk1ZESo" },
  { name: "Front Raises", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=-t7fuZ0KhDA" },
  { name: "Rear Delt Fly", category: "Shoulders", musclesImage: "/images/muscles/rear-delts.png", videoUrl: "https://www.youtube.com/watch?v=Y9c6o0JH5Zk" },
  { name: "Upright Row", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=V9W4Zb6WJ1E" },
  { name: "Cable Lateral Raise", category: "Shoulders", musclesImage: "/images/muscles/shoulders.png", videoUrl: "https://www.youtube.com/watch?v=LUpG5yqZ5kI" },
  { name: "Shrugs", category: "Shoulders", musclesImage: "/images/muscles/traps.png", videoUrl: "https://www.youtube.com/watch?v=9Zc4b7pQNRg" },

  // --- Arms (Biceps & Triceps) ---
  { name: "Barbell Bicep Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=kwG2ipFRgfo" },
  { name: "Dumbbell Bicep Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" },
  { name: "Hammer Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4" },
  { name: "Incline Dumbbell Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=soxrZlIl35U" },
  { name: "Preacher Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=3Zb6aVQ_TaE" },
  { name: "Cable Curl", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=2-sP9oJbWJU" },
  { name: "Skull Crushers", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=d_KZxkY_0cM" },
  { name: "Tricep Pushdown", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU" },
  { name: "Overhead Tricep Extension", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=_gsUck-7M74" },
  { name: "Close-Grip Bench Press", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=pG2_zM5tZW8" },
  { name: "Dips (Triceps focus)", category: "Arms", musclesImage: "/images/muscles/arms.png", videoUrl: "https://www.youtube.com/watch?v=0326dy_-CzM" },

  // --- Legs ---
  { name: "Back Squat", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=Dy28eq2PjcM" },
  { name: "Front Squat", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=1oed-UmAxFs" },
  { name: "Romanian Deadlift", category: "Legs", musclesImage: "/images/muscles/hamstrings.png", videoUrl: "https://www.youtube.com/watch?v=2SHsk9AzdTg" },
  { name: "Conventional Deadlift", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=op9kV3pDqLk" },
  { name: "Sumo Deadlift", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=U5zT9C6bA1Y" },
  { name: "Walking Lunges", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=QOVaHwm-Q6U" },
  { name: "Reverse Lunges", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=UNQ8Gv0sQhI" },
  { name: "Leg Press", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
  { name: "Leg Extensions", category: "Legs", musclesImage: "/images/muscles/quads.png", videoUrl: "https://www.youtube.com/watch?v=YyvSfVjQeL0" },
  { name: "Hamstring Curl (Machine)", category: "Legs", musclesImage: "/images/muscles/hamstrings.png", videoUrl: "https://www.youtube.com/watch?v=1Tq3QdYUuGQ" },
  { name: "Standing Calf Raise", category: "Legs", musclesImage: "/images/muscles/calves.png", videoUrl: "https://www.youtube.com/watch?v=YMmgqO8Jo-k" },
  { name: "Seated Calf Raise", category: "Legs", musclesImage: "/images/muscles/calves.png", videoUrl: "https://www.youtube.com/watch?v=H9V8C0dFzqM" },
  { name: "Bulgarian Split Squat", category: "Legs", musclesImage: "/images/muscles/legs.png", videoUrl: "https://www.youtube.com/watch?v=2C-uNgKwPLE" },

  // --- Glutes ---
  { name: "Hip Thrust", category: "Glutes", musclesImage: "/images/muscles/glutes.png", videoUrl: "https://www.youtube.com/watch?v=LM8XHLYJoYs" },
  { name: "Glute Bridge", category: "Glutes", musclesImage: "/images/muscles/glutes.png", videoUrl: "https://www.youtube.com/watch?v=1i2gkJk8k9Y" },
  { name: "Cable Pull-Through", category: "Glutes", musclesImage: "/images/muscles/glutes.png", videoUrl: "https://www.youtube.com/watch?v=wYzY2y7J2Bo" },
  { name: "Step-Ups", category: "Glutes", musclesImage: "/images/muscles/glutes.png", videoUrl: "https://www.youtube.com/watch?v=KCtZyBq6L0w" },

  // --- Core ---
  { name: "Plank", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=pSHjTRCQxIw" },
  { name: "Side Plank", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=K2VljzCC16g" },
  { name: "Hanging Leg Raise", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=JB2oyawG9KI" },
  { name: "Toes-to-Bar", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=lNIfgdgZqFs" },
  { name: "Cable Woodchoppers", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=QPOA9whC8hQ" },
  { name: "Ab Wheel Rollout", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=F4aL6fRkYJk" },
  { name: "Decline Sit-Ups", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=1fbU_MkV7NE" },
  { name: "Russian Twists", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=wkD8rjkodUI" },
  { name: "Bicycle Crunches", category: "Core", musclesImage: "/images/muscles/core.png", videoUrl: "https://www.youtube.com/watch?v=9FGilxCbdz8" },

  // --- Full Body / Compound ---
  { name: "Clean and Press", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=1oed-UmAxFs" },
  { name: "Power Clean", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=O5lxm3XQaFg" },
  { name: "Snatch", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=6TlbDQUWs0s" },
  { name: "Thrusters", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=GJbK2tU2tW8" },
  { name: "Burpees", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=TU8QYVW0gDU" },
  { name: "Kettlebell Swing", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=6tU0w1Z3lXg" },
  { name: "Farmer’s Carry", category: "Full Body", musclesImage: "/images/muscles/fullbody.png", videoUrl: "https://www.youtube.com/watch?v=1cRMRp9ZfXg" }
];