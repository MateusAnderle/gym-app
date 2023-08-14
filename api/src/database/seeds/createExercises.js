exports.seed = async function (knex) {
  await knex("exercises").del();
  await knex("exercises").insert([
    {
      name: "Incline Bench Press with Barbell",
      series: 4,
      repetitions: 12,
      group: "chest",
      demo: "incline_bench_press_with_barbell.gif",
      thumb: "incline_bench_press_with_barbell.png",
    },
    {
      name: "Flat Dumbbell Flyes",
      series: 3,
      repetitions: 12,
      group: "chest",
      demo: "flat_dumbbell_flyes.gif",
      thumb: "flat_dumbbell_flyes.png",
    },
    {
      name: "Flat Bench Press with Barbell",
      series: 3,
      repetitions: 12,
      group: "chest",
      demo: "flat_bench_press_with_barbell.gif",
      thumb: "flat_bench_press_with_barbell.png",
    },
    {
      name: "Lying French Press with Dumbbells",
      series: 3,
      repetitions: 12,
      group: "triceps",
      demo: "lying_french_press_with_dumbbells.gif",
      thumb: "lying_french_press_with_dumbbells.png",
    },
    {
      name: "Cable Rope Pushdown",
      series: 4,
      repetitions: 12,
      group: "triceps",
      demo: "cable_rope_pushdown.gif",
      thumb: "cable_rope_pushdown.png",
    },
    {
      name: "Cable Bar Pushdown",
      series: 3,
      repetitions: 12,
      group: "triceps",
      demo: "cable_bar_pushdown.gif",
      thumb: "cable_bar_pushdown.png",
    },
    {
      name: "Skull Crushers",
      series: 4,
      repetitions: 12,
      group: "triceps",
      demo: "skull_crushers.gif",
      thumb: "skull_crushers.png",
    },
    {
      name: "Deadlift",
      series: 3,
      repetitions: 12,
      group: "back",
      demo: "deadlift.gif",
      thumb: "deadlift.png",
    },
    {
      name: "Front Lat Pulldown",
      series: 3,
      repetitions: 12,
      group: "back",
      demo: "front_lat_pulldown.gif",
      thumb: "front_lat_pulldown.png",
    },
    {
      name: "Behind-the-Neck Lat Pulldown",
      series: 4,
      repetitions: 12,
      group: "back",
      demo: "behind_the_neck_lat_pulldown.gif",
      thumb: "behind_the_neck_lat_pulldown.png",
    },
    {
      name: "Seated Cable Row",
      series: 4,
      repetitions: 12,
      group: "back",
      demo: "seated_cable_row.gif",
      thumb: "seated_cable_row.png",
    },
    {
      name: "One-Arm Dumbbell Row",
      series: 4,
      repetitions: 12,
      group: "back",
      demo: "one_arm_dumbbell_row.gif",
      thumb: "one_arm_dumbbell_row.png",
    },
    {
      name: "Alternating Dumbbell Curl on Incline Bench",
      series: 4,
      repetitions: 12,
      group: "biceps",
      demo: "alternating_dumbbell_curl_on_incline_bench.gif",
      thumb: "alternating_dumbbell_curl_on_incline_bench.png",
    },
    {
      name: "Scott Curl with EZ Bar",
      series: 4,
      repetitions: 12,
      group: "biceps",
      demo: "scott_curl_with_ez_bar.gif",
      thumb: "scott_curl_with_ez_bar.png",
    },
    {
      name: "Barbell Curl",
      series: 3,
      repetitions: 12,
      group: "biceps",
      demo: "barbell_curl.gif",
      thumb: "barbell_curl.png",
    },
    {
      name: "Standing Hammer Curl",
      series: 3,
      repetitions: 12,
      group: "biceps",
      demo: "standing_hammer_curl.gif",
      thumb: "standing_hammer_curl.png",
    },
    {
      name: "Wrist Curl",
      series: 4,
      repetitions: 12,
      group: "forearm",
      demo: "wrist_curl.gif",
      thumb: "wrist_curl.png",
    },
    {
      name: "45-Degree Leg Press",
      series: 4,
      repetitions: 12,
      group: "legs",
      demo: "45_degree_leg_press.gif",
      thumb: "45_degree_leg_press.png",
    },
    {
      name: "Leg Extension",
      series: 4,
      repetitions: 12,
      group: "legs",
      demo: "leg_extension.gif",
      thumb: "leg_extension.png",
    },
    {
      name: "Hip Abductor",
      series: 4,
      repetitions: 12,
      group: "legs",
      demo: "hip_abductor.gif",
      thumb: "hip_abductor.png",
    },
    {
      name: "Stiff-Legged Deadlift",
      series: 4,
      repetitions: 12,
      group: "legs",
      demo: "stiff_legged_deadlift.gif",
      thumb: "stiff_legged_deadlift.png",
    },
    {
      name: "Neck Press",
      series: 4,
      repetitions: 10,
      group: "shoulders",
      demo: "neck_press.gif",
      thumb: "neck_press.png",
    },
    {
      name: "Machine Shoulder Press",
      series: 3,
      repetitions: 10,
      group: "shoulders",
      demo: "machine_shoulder_press.gif",
      thumb: "machine_shoulder_press.png",
    },
    {
      name: "Seated Dumbbell Lateral Raise",
      series: 4,
      repetitions: 10,
      group: "shoulders",
      demo: "seated_dumbbell_lateral_raise.gif",
      thumb: "seated_dumbbell_lateral_raise.png",
    },
    {
      name: "Dumbbell Shrugs",
      series: 4,
      repetitions: 10,
      group: "trapezius",
      demo: "dumbbell_shrugs.gif",
      thumb: "dumbbell_shrugs.png",
    },
    {
      name: "Barbell Shrugs",
      series: 4,
      repetitions: 10,
      group: "trapezius",
      demo: "barbell_shrugs.gif",
      thumb: "barbell_shrugs.png",
    },
  ]);
};
