const mystery = {
  num: 6,
  x: {
    z: 1,
  },
};
console.log(mystery.num > 5 ? mystery?.x?.y ?? 2 : mystery.x.y);

const mystery2 = {
  num: 4,
  x: {
    z: 1,
  },
};
console.log(mystery2.num > 5 ? mystery2?.x?.y ?? 2 : mystery2.x.y);

const mystery3 = {
  num: 6,
  x: {
    z: 1,
    y: 8,
  },
};
console.log(mystery3.num > 5 ? mystery3?.x?.y ?? 2 : mystery3.x.y);
