function phoneNumberMnemonics(phoneNumber) {
  const currentMnemonic = new Array(phoneNumber.length).fill('0')
  const answer = []
  
  phoneNumberMnemonicsHelper(0, phoneNumber, currentMnemonic, answer);
  console.log(answer);
}

function phoneNumberMnemonicsHelper(i, phoneNumber, currentMnemonic, answer) {
  if (i === phoneNumber.length) { //if we get outside the bounds of the phoneNumber then: 
    const mnemonic = currentMnemonic.join('') // 0(n)
    answer.push(mnemonic)
  } else {
    const digit = phoneNumber[i];
    const letters = LETTER_MAP[digit];
    // console.log(letters)
    // console.log('hi')
    for (const letter of letters) {
      currentMnemonic[i] = letter;
      phoneNumberMnemonicsHelper(i+1, phoneNumber, currentMnemonic, answer)
    }
  }
}

const LETTER_MAP = {
  '0': ['0'],
  '1': ['1'],
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
};

phoneNumberMnemonics('7259')