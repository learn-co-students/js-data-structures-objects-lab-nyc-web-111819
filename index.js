// Write your solution in this file!

// const driver = {name: 'kevin', address: 'home'};

const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){ 
  const newDriver = {...driver};
  newDriver[key] = value;
  return newDriver;
  // return driver[key] = value;
  // return newDriver[key] = value;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}


//   describe('destructivelyDeleteFromDriverByKey(driver, key)', function () {
//     it('returns driver without the deleted key/value pair', function () {
//       let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

//       expect(newdriver['name']).to.equal(undefined);
//     });

//     it('modifies the original driver', function () {
//       let newdriver = destructivelyDeleteFromDriverByKey(driver, 'name');

//       expect(driver['name']).to.equal(undefined);
//       expect(driver).to.equal(newdriver);
//     });
//   });
// });
