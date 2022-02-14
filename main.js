// the 3 messages we will output will be: 1. A daily productivity task, 2. Self care activity 3. Creative inspiration

const productivityTasks = [
  "making your bed!",
  "emptying your dishwasher!",
  "taking out the bins!",
  "watering the plants!",
  "folding your laundry!",
  "doing the laundry!",
  "hoovering up!",
  "doing the dusting!",
];
const selfCareActivity = [
  "brushing your teeth",
  "giving yourself a foot scrub",
  "having a bubble bath",
  "giving yourself a facial",
  "going for a walk",
  "meditating",
  "completing a 10 minute yoga workout",
  "putting your phone on 'do not disturb'",
  "picking up a craft",
];
const creativeInspiration = [
  "https://wetransfer.com/thisworks/",
  "http://www.mymodernmet.com/",
  "http://www.itsnicethat.com/",
  "http://www.designboom.com/",
  "http://www.booooooom.com/",
  "http://globalstreetart.com/",
  "http://www.mr-cup.com/blog.html",
];

const randomTask = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

console.log(
  `Start the day off productively by ${randomTask(productivityTasks)}`
);
console.log(
  `Make sure to look after yourself today by ${randomTask(selfCareActivity)}`
);
console.log(
  `Feel creatively inspired today through taking a peek at ${randomTask(
    creativeInspiration
  )}`
);
