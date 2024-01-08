// Object Array Of Running - Cycling & Walking Exercises
const outdoorExerciseObjects = [
  [
    "Running",
    [
      {
        Name: "Easy Pace",
        Instructions: [
          "Run at a gentle pace for your selected time",
          "Try to maintain a pace that feels comfortable and doesn't leave you breathing heavy",
          "If you begin to feel out of breath, try to slow your run while avoiding walking",
          "Focus on running for the selected time, not pace",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "Race Pace",
        Instructions: [
          "This is the run you train for",
          "You are aiming for maximum pace, Give it everything you've got for your selected time",
          "This is a max effort run, aim for PB, when you feel tired, push forward",
          "If running more than 30 minutes remember to hydrate at 30 minute intervals",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "The Pyramid",
        Instructions: [
          "Today is Sprints that increase in length, then when you're exhausted they begin to decrease",
          "Sprint for 200 metres, walk or recovery run for 200 metres",
          "Repeat for 300m Run, 200m recovery, then 400m Run 200m, Then 500m Run, 200m Recovery",
          "You've reached the top of of the Pyramid, now down to 400m run, 200m recovery, then repeat the steps for 300m then 200m",
          "That was a demanding workout, remember to stretch and hydrate, and pat yourself on the back",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "Jeffing",
        Instructions: [
          "Jeffing of the process of breaking your runs into shorter runs with walks in between",
          "Start by running until you begin to feel tired but are not completely out of breath",
          "Walk for 130 seconds, this should be long enough to recover your breathing pattern and lower your heart rate",
          "Repeat the second step, don't be put of if you run a shorter distance, that is to be expected",
          "Continue repeating these steps for your selected time",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      ,
      {
        Name: "Hills",
        Instructions: [
          "Time for some hill train to really strengthen those leg muscles",
          "Find your nearest, short but steep hill",
          "Run up the hill giving it maximum effort",
          "Gentle jog back down, allow gravity to do the work here while you recover",
          "Repeat for as many reps as you are aiming for",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "The Long Run",
        Instructions: [
          "This is all about distance",
          "Find a comfortable, but fast past, you will maintain this throughout with any recovery",
          "Goal is to cover as much distance in the time you have",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "Sprints",
        Instructions: [
          "For this you will want a short (500m), flat, stretch of road",
          "Have a gentle jog to warm up the muscles",
          "Sprint for 200m, 100% effort as fast as your legs will go",
          "Walk to recover, let your breathing stabilise",
          "Repeat for as many reps as you are aiming for",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
      {
        Name: "Heart Rate Run",
        Instructions: [
          "For this run you will let your heart rate dictate your effort",
          "Run and getyour heart rate to around 110-120bpm",
          "Maintain this for alloted time",
          "If heart rate goes higher, ease off, if it drops below 110 push harder",
        ],
        GifUrl: "./assets/images/06851301-Run_Cardio-FIX_360.gif",
      },
    ],
  ],
  [
    "Walking",
    [
      {
        Name: "Step Goal",
        Instructions: [
          "A gentle walk aiming for just a step goal",
          "Try to get around 5,000 steps",
        ],
        GifUrl: "./assets/images/36561301-Short-Stride-Run_Cardio_360.gif",
      },
      {
        Name: "Brisk Walk",
        Instructions: [
          "Here you are looking at getting your heart rate up",
          "Walk at a steady, but fast pace",
          "You should be looking at getting slightly out of breath",
          "Maintain for your selected time",
        ],
        GifUrl: "./assets/images/36561301-Short-Stride-Run_Cardio_360.gif",
      },
      {
        Name: "Nordick Walk",
        Instructions: [
          "This action involves a straight armswing, good stride and a roll through the foot",
          "This in turn engages 90% of the major muscles and shares the load between upper and lower body.",
          "Every step you take becomes a full body exercise which includes the core and of course your heart and lungs",
        ],
        GifUrl: "./assets/images/36561301-Short-Stride-Run_Cardio_360.gif",
      },
      {
        Name: "Hill Walking",
        Instructions: [
          "Find a Nice Hilly Route",
          "This in turn engages 90% of the major muscles and shares the load between upper and lower body.",
          "Every step you take becomes a full body exercise which includes the core and of course your heart and lungs",
        ],
        GifUrl: "./assets/images/36561301-Short-Stride-Run_Cardio_360.gif",
      },
    ],
  ],
  [
    "Cycling",
    [
      {
        Name: "Gentle Bike Ride",
        Instructions: [
          "Take it easy, no nead to break a sweat",
          "Just take gentle, maintain a steady pace",
          "Continue for you selected time",
        ],
        GifUrl:
          "./assets/images/52141301-Riding-Outdoor-Bicycle_Cardio_360.gif",
      },
      {
        Name: "Hills Ride",
        Instructions: [
          "Get up those hills",
          "Focus on remaining seated and using leg power not body weight to power up",
          "Relax On downhills and prepare to go again",
          "Repeat for as you long as you are able to",
        ],
        GifUrl:
          "./assets/images/52141301-Riding-Outdoor-Bicycle_Cardio_360.gif",
      },
      {
        Name: "Go the Distance",
        Instructions: [
          "Set yourself a distance goal",
          "Look to achieve thatgoal maintaining a consistent pace throughout the ride",
          "The key here is not to go to quick as it is all about that steady pace",
        ],
        GifUrl:
          "./assets/images/52141301-Riding-Outdoor-Bicycle_Cardio_360.gif",
      },
      {
        Name: "Short Sprints",
        Instructions: [
          "Getting those starts right is important in any race",
          "Start from stationary, push as hard as possible for 500m",
          "Come to a complete stop before repeating",
          "Repeat for as many repetitions as you are aiming for",
        ],
        GifUrl:
          "./assets/images/52141301-Riding-Outdoor-Bicycle_Cardio_360.gif",
      },
    ],
  ],
  [
    "Wheelchair",
    [
      {
        Name: "Easy Pace",
        Instructions: [
          "Take it easy, no nead to break a sweat",
          "Just take gentle, maintain a steady pace",
          "Continue for you selected time",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Starts",
        Instructions: [
          "Begin stationary, wheel straight",
          "On go, give 10 very rapid short pushes",
          "Continue for ten full, long pushes",
          "Return to the start or if on rollers, allow the wheels to stop",
          "Repeat. Aim to do a minimum of 5 starts",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Fartlek",
        Instructions: [
          "Warm Up with an easy 1k",
          "Go 200m maximum effort",
          "Recover with gentle roll for 200m",
          "Repeat for as many repetitions as you are aiming for",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Pyramid",
        Instructions: [
          "Today is Sprints that increase in length, then when you're exhausted they begin to decrease",
          "Push hard for 200 metres, gentle roll for 200 metres",
          "Repeat for 300m hard, 200m recovery, then 400m hard 200m, Then 500m hard, 200m Recovery",
          "You've reached the top of of the Pyramid, now down to 400m hard, 200m recovery, then repeat the steps for 300m then 200m",
          "That was a demanding workout, remember to stretch and hydrate, and pat yourself on the back",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Rollers",
        Instructions: [
          "Roller specific workout can be done with or without added weights",
          "If using weights aim for 3kg on each roller",
          "Push hard for 500m, aim to have enough pace that you can stop for ten 10 seconds without the wheels losing all momentum",
          "For 200m keep pushing just enough to maintain momentum",
          "Repeat, looking for a minimum of 3k total distance",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Steering",
        Instructions: [
          "This is all about pace around corners",
          "Take it easy on the straights, use both hands but easy pace",
          "On the corners, use compensator and steer with one hand only, using the other to keep pushing",
          "Recover again on the straights",
          "Important to change direction periodically to ensure both arms get similar workout",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
      {
        Name: "Alternating hands",
        Instructions: [
          "Start with a gentle 1k warm up",
          "Push hard for 100m, but using only 1 arm to push",
          "Switch to other arm for the next 100m",
          "100m recivery using both arms, just enough push to maintain momentum",
          "Repeat for as many repetitions as you are aiming for",
        ],
        GifUrl: "./assets/images/wheelchair.gif",
      },
    ],
  ],
];

// 29 Back Up exercises to be used if API fails - !! All Cardio with No-Equipment Needed
const backUpExercises =
[
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/BHBJvBf7A20DAn",
      "id": "3220",
      "name": "astride jumps (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Bend your knees and lower your body into a squat position.",
          "Jump explosively upwards, extending your legs and arms.",
          "While in the air, spread your legs apart and bring your arms out to the sides.",
          "Land softly with your feet shoulder-width apart, bending your knees to absorb the impact.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/Vp69qqOvvJ-2Bk",
      "id": "3672",
      "name": "back and forth step",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Step forward with your right foot, bending your knee and lowering your body into a lunge position.",
          "Push off with your right foot and step back to the starting position.",
          "Repeat the movement with your left foot, alternating legs with each step.",
          "Continue stepping back and forth, maintaining a steady pace.",
          "Repeat for the desired duration or number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/dqlyIy-K3IkMw5",
      "id": "3360",
      "name": "bear crawl",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "core",
          "shoulders",
          "triceps"
      ],
      "instructions": [
          "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
          "Lift your knees slightly off the ground, keeping your back flat and your core engaged.",
          "Move your right hand and left foot forward simultaneously, followed by your left hand and right foot.",
          "Continue crawling forward, alternating your hand and foot movements.",
          "Maintain a steady pace and keep your core tight throughout the exercise.",
          "Continue for the desired distance or time."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/y6Eo7gmESqRLzk",
      "id": "1160",
      "name": "burpee",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves",
          "shoulders",
          "chest"
      ],
      "instructions": [
          "Start in a standing position with your feet shoulder-width apart.",
          "Lower your body into a squat position by bending your knees and placing your hands on the floor in front of you.",
          "Kick your feet back into a push-up position.",
          "Perform a push-up, keeping your body in a straight line.",
          "Jump your feet back into the squat position.",
          "Jump up explosively, reaching your arms overhead.",
          "Land softly and immediately lower back into a squat position to begin the next repetition."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/Y7f3JeRnYQP0-6",
      "id": "3221",
      "name": "half knee bends (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Bend your knees and lower your body down as if you were sitting back into a chair.",
          "Keep your chest up and your weight in your heels.",
          "Pause for a moment at the bottom, then push through your heels to return to the starting position.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/3ZCCLIEvCQlMEl",
      "id": "3636",
      "name": "high knee against wall",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes",
          "calves"
      ],
      "instructions": [
          "Stand facing a wall with your feet hip-width apart.",
          "Place your hands on the wall for support.",
          "Engage your core and lift your right knee up towards your chest, while keeping your left foot on the ground.",
          "Quickly switch legs, bringing your left knee up towards your chest and lowering your right foot back down.",
          "Continue alternating legs in a running motion, bringing your knees up as high as possible.",
          "Maintain a fast pace and keep your upper body stable throughout the exercise.",
          "Repeat for the desired duration or number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/vZbLo1aTncGsI0",
      "id": "0501",
      "name": "jack burpee",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves",
          "shoulders",
          "triceps",
          "core"
      ],
      "instructions": [
          "Start in a standing position with your feet shoulder-width apart.",
          "Lower your body into a squat position, placing your hands on the ground in front of you.",
          "Kick your feet back, landing in a push-up position.",
          "Perform a push-up, lowering your chest to the ground and then pushing back up.",
          "Jump your feet forward, landing in a squat position.",
          "Jump up explosively, reaching your arms overhead.",
          "Land softly and immediately lower back into the squat position to begin the next repetition."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/RjSgPvxJV0aHvt",
      "id": "3224",
      "name": "jack jump (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "calves"
      ],
      "instructions": [
          "Stand with your feet together and your arms by your sides.",
          "Jump up, spreading your feet apart and raising your arms above your head.",
          "As you land, quickly jump back to the starting position.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/lkKCUUaSFzhlzk",
      "id": "0630",
      "name": "mountain climber",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "core",
          "shoulders",
          "triceps"
      ],
      "instructions": [
          "Start in a high plank position with your hands directly under your shoulders and your body in a straight line.",
          "Engage your core and bring your right knee towards your chest, then quickly switch and bring your left knee towards your chest.",
          "Continue alternating legs in a running motion, keeping your hips low and your core engaged.",
          "Maintain a steady pace and breathe evenly throughout the exercise.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/fvuTVVYxGf073B",
      "id": "3638",
      "name": "push to run",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Start in a push-up position with your hands shoulder-width apart and your body in a straight line.",
          "Lower your chest towards the ground by bending your elbows, keeping your body straight.",
          "Push through your hands to extend your arms and return to the starting position.",
          "Quickly bring one knee towards your chest, then quickly switch and bring the other knee towards your chest.",
          "Continue alternating knees as fast as you can while maintaining good form.",
          "Continue for the desired duration or number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/y50Qzf4bUKacac",
      "id": "0685",
      "name": "run",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Start by standing upright with your feet hip-width apart.",
          "Engage your core and keep your upper body relaxed.",
          "Begin jogging in place, lifting your knees up towards your chest and landing softly on the balls of your feet.",
          "Maintain a steady pace and continue jogging for the desired duration or distance.",
          "Remember to breathe deeply and maintain good posture throughout the exercise."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/ntxYLrQQtxLMa9",
      "id": "0684",
      "name": "run (equipment)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Start by standing upright with your feet hip-width apart.",
          "Engage your core and keep your upper body relaxed.",
          "Begin jogging in place, lifting your knees up towards your chest and landing softly on the balls of your feet.",
          "Maintain a steady pace and continue jogging for the desired duration or distance.",
          "Remember to breathe deeply and maintain good posture throughout the exercise."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/AQN7poUBzqj2KV",
      "id": "3219",
      "name": "scissor jumps (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Jump off the ground and simultaneously cross your right leg in front of your left leg.",
          "As you land, quickly switch legs, crossing your left leg in front of your right leg.",
          "Continue alternating legs and jumping as quickly as possible.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/FwoehAIzlcJbT4",
      "id": "3222",
      "name": "semi squat jump (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Bend your knees and lower your body into a squat position.",
          "Jump explosively, extending your hips and knees while swinging your arms for momentum.",
          "Land softly on the balls of your feet and immediately go into the next repetition.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/dckGHBnkTudj5W",
      "id": "3656",
      "name": "short stride run",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Find an open space or a treadmill to perform the exercise.",
          "Stand tall with your feet hip-width apart.",
          "Start jogging in place, lifting your knees high and pumping your arms.",
          "After a few seconds, start taking short strides forward, maintaining a quick pace.",
          "Continue running with short strides for the desired duration or distance."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/WEEH8CK3ys1sC3",
      "id": "3361",
      "name": "skater hops",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Bend your knees slightly and jump to the right, landing on your right foot.",
          "As you land, swing your left leg behind your right leg and tap the ground with your left toes.",
          "Immediately jump to the left, landing on your left foot.",
          "As you land, swing your right leg behind your left leg and tap the ground with your right toes.",
          "Continue alternating sides, jumping and tapping the ground with each leg.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/qzyN8GVbKi642T",
      "id": "3671",
      "name": "ski step",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart.",
          "Bend your knees slightly and keep your back straight.",
          "Jump to the right, landing on your right foot while swinging your left leg behind your right leg.",
          "Immediately jump to the left, landing on your left foot while swinging your right leg behind your left leg.",
          "Continue alternating jumps from side to side, mimicking a skiing motion.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/483GU47ywvQCIB",
      "id": "3223",
      "name": "star jump (male)",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart and your arms by your sides.",
          "Bend your knees slightly and jump up explosively.",
          "As you jump, spread your legs and extend your arms out to the sides, forming a star shape with your body.",
          "Land softly on the balls of your feet with your knees slightly bent.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/3u-rvrmoPA4LPr",
      "id": "3318",
      "name": "swing 360",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "shoulders",
          "core"
      ],
      "instructions": [
          "Stand with your feet shoulder-width apart and knees slightly bent.",
          "Hold your arms straight out in front of you, parallel to the ground.",
          "Engage your core and swing your arms in a circular motion, rotating your torso as you do so.",
          "Continue the circular motion, swinging your arms and rotating your torso for the desired number of repetitions.",
          "Remember to breathe throughout the exercise."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/45uP2CY-Pqt7c5",
      "id": "3655",
      "name": "walking high knees lunge",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "glutes",
          "calves"
      ],
      "instructions": [
          "Stand with your feet hip-width apart.",
          "Lift your right knee up towards your chest as high as you can while balancing on your left leg.",
          "Step forward with your right foot and lower your body into a lunge position, bending both knees to a 90-degree angle.",
          "Push off with your right foot and bring your left knee up towards your chest.",
          "Step forward with your left foot and lower your body into a lunge position.",
          "Continue alternating legs and lunging forward, keeping your core engaged and maintaining a steady pace.",
          "Repeat for the desired number of repetitions."
      ]
  },
  {
      "bodyPart": "cardio",
      "equipment": "body weight",
      "gifUrl": "https://v2.exercisedb.io/image/H0cM3kC66Qp0d0",
      "id": "3637",
      "name": "wheel run",
      "target": "cardiovascular system",
      "secondaryMuscles": [
          "quadriceps",
          "hamstrings",
          "calves"
      ],
      "instructions": [
          "Start in a plank position with your hands on the wheel and your body straight.",
          "Engage your core and start rolling the wheel forward by extending your arms.",
          "Continue rolling until your body is fully extended and your arms are overhead.",
          "Reverse the movement by pulling the wheel back towards your body, using your core and arms.",
          "Repeat for the desired number of repetitions."
      ]
  }
]