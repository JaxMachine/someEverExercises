//Has Odd Number Function
function hasOddNumber(array) {
  return array.some((val) => {
    return val % 2 !== 0;
  });
}

//Has a Zero
function hasAZero(num) {
  return num
    .toString()
    .split("")
    .some((val) => {
      return val === "0";
    });
}

//Has only Odd Numbers
function hasOnlyOddNumbers(array) {
  return array.every((val) => {
    return val % 2 !== 0;
  });
}

//Has No Duplicates
function hasNoDuplicates(array) {
  return array.every((val) => {
    return array.indexOf(val) === array.lastIndexOf(val);
  });
}

//Has Certain Key
function hasCertainKey(array, key) {
  return array.every((val) => {
    return key in val;
  });
}
//Has certain Value
function hasCertainValue(array, key, searchValue) {
  return array.every((val) => {
    return val[key] === searchValue;
  });
}
