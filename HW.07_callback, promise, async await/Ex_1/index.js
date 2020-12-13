function morningWorkout() {
  return new Promise(function (resolve, reject) {
    let firstAction = Math.random() > 0.5 ? "got up" : "slept"
    console.log(firstAction);
    setTimeout(() => {
      if (firstAction == "got up") {
        resolve("You did a morning workout")
      } else if (firstAction == "slept") {
        reject("You overslept!")
      }
    }, 1000);
  })
}

function takeShower(previousAction) {
  return new Promise(function (resolve, reject) {
    console.log(previousAction);
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("You took a shower")
        : resolve("You didn't take a shower. You'll be dirty!")
    }, 1000);
  })
}

function makeBreakfast(previousAction) {
  return new Promise(function (resolve, reject) {
    console.log(previousAction);
    setTimeout(() => {
      Math.random() > 0.5
        ? resolve("You made a breakfast")
        : resolve("You'll be hungry!")
    }, 1000);
  })
}

function goWork(previousAction) {
  return new Promise(function (resolve, reject) {
    console.log(previousAction);
    setTimeout(() => {
      if (previousAction == "You made a breakfast") {
        resolve("You went to work")
      } else {
        reject("You did't go to work(")
      }
    }, 1000);
  })
}

morningWorkout("got up")
  .then(yourAction => takeShower(yourAction))
  .then(yourAction => makeBreakfast(yourAction))
  .then(yourAction => goWork(yourAction))
  .then(yourAction => console.log(yourAction))
  .catch(yourAction => console.log(yourAction))
