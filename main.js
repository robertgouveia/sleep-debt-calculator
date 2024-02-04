const getSleepHours = (day) => {
  switch (day){
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 9;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 7;
      break;
    case 'saturday':
      return 10;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 'error';
      break;
  }
}

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
}

const getIdealSleepHours = () => {
  let idealHours = 7
  return idealHours * 7
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours()
  let idealSleepHours = getIdealSleepHours()

  if(actualSleepHours == idealSleepHours){
    console.log('perfect sleep')
  } else if (actualSleepHours > idealSleepHours){
    console.log('more sleep')
    console.log(actualSleepHours - idealSleepHours)
  } else {
    console.log('less sleep')
    console.log(idealSleepHours - actualSleepHours)
  }
}

calculateSleepDebt()
