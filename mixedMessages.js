const generateRandomNumber = (num) => {
  return Math.floor(Math.random() * num);
}


const dailyTasks = {
  today:['play video games', 'go for a hike', 'code', 'sleep'],
  lunch:['pizza', 'nachos', 'hamburgers', 'ramen'],
  plan:['next project', 'camping trip', 'vacation', 'party']
}

let theDay = [];

for (let prop in dailyTasks) {
  let optionIndex = generateRandomNumber(dailyTasks[prop].length)

  switch(prop) {
  case 'today': theDay.push(`Today you will ${dailyTasks[prop][optionIndex]}.`)
  break
  case 'lunch': theDay.push(`For lunch you will have ${dailyTasks[prop][optionIndex]}.`)
  break
  case 'plan': theDay.push(`After lunch you will plan your ${dailyTasks[prop][optionIndex]}.`)
  break
  default: theDay.push('Not enough info.')
}
}

const formatDay = (day) => {
  const formatted = theDay.join('\n')
  console.log(formatted)
}

formatDay(theDay);