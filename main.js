const EVENING = 'evening'
const MORNING = 'morning'
const AFTERNOON = 'afternoon'

const productivityTasks = {
  [MORNING]: [
    "making your bed!",
    "watering the plants!",
    "opening all your curtians and blinds!",
    "emptying the dishwasher!",
  ],
  [AFTERNOON]: [
    "doing the laundry!",
    "hoovering up!",
    "dusting surfaces!",
    "taking out the bins!"
  ],
  [EVENING]: [
    "loading the dishwasher!",
    "cleaning down the kitchen surfances",
    "folding the laundry!",
    "closing all blinds and turning on lamps!"
  ],
};

const selfCareActivity = {
  [MORNING]: [
    "brushing your teeth!",
    "washing your face!",
    "going outisde for a morning stroll!",
    "complete a 10 minute yoga workout!"
  ],
  [AFTERNOON]: [
    "putting your phone on 'do not disturb!'",
    "meditiating!",
    "taking a 15 minute break from your screen!",
    "drinking 250ml of water!"
  ],
  [EVENING]: [
  "giving yourself a foot scrub!",
  "having a bubble bath!",
  "giving yourself a facial!",
  "picking up a craft!"
  ]
}

const creativeInspiration = [
  "https://wetransfer.com/thisworks/",
  "http://www.mymodernmet.com/",
  "http://www.itsnicethat.com/",
  "http://www.designboom.com/",
  "http://www.booooooom.com/",
  "http://globalstreetart.com/",
  "http://www.mr-cup.com/blog.html",
];

const randomTask = (taskArray) => {
  const index = Math.floor(Math.random() * taskArray.length);
  return taskArray[index];
};

const getTimeOfDay = () => {
  const date = new Date();
  const hours = date.getHours();
  if (hours > 17) {
    return EVENING;
  } else if (hours > 11) {
    return AFTERNOON;
  } else {
    return MORNING;
  }
};
const timeOfDay = getTimeOfDay()

console.log(
  `Start your ${timeOfDay} off productively by ${randomTask(productivityTasks[timeOfDay])}`
);
console.log(
  `Make sure to look after yourself this ${timeOfDay} by ${randomTask(selfCareActivity[timeOfDay])}`
);
console.log(
  `Feel creatively inspired today through taking a peek at ${randomTask(
    creativeInspiration
  )}`
);