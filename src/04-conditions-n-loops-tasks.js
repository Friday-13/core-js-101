/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
function getFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  if (n === 1) {
    return n;
  }
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  if (n1 === n2) {
    return n2;
  }
  return n1 + getSumBetweenNumbers(n1 + 1, n2);
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  const condition = (x, y, z) => x < y + z;

  return condition(a, b, c) && condition(b, c, a) && condition(c, a, b);
}


/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  const isInteract = (c1, c2, l1, l2) => (l1 + l2 >= Math.abs(c2 + l2 - c1));
  return isInteract(rect1.left, rect2.left, rect1.width, rect2.width)
    && isInteract(rect1.top, rect2.top, rect1.height, rect2.height);
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  return (((point.x - circle.center.x) ** 2
    + (point.y - circle.center.y) ** 2) ** 0.5 < circle.radius);
}


/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
function findFirstSingleChar(str) {
  const charStatistic = {};
  for (let i = 0; i < str.length; i += 1) {
    if (charStatistic[str[i]]) {
      charStatistic[str[i]] += 1;
    } else {
      charStatistic[str[i]] = 1;
    }
  }

  const chrs = Object.keys(charStatistic);
  for (let i = 0; i < chrs.length; i += 1) {
    if (charStatistic[chrs[i]] === 1) {
      return chrs[i];
    }
  }
  return null;
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  const leftBracket = (isStartIncluded) ? ('[') : ('(');
  const rightBracket = (isEndIncluded) ? (']') : (')');
  const [leftLimit, rightLimit] = (b > a) ? ([a, b]) : ([b, a]);

  return `${leftBracket}${leftLimit}, ${rightLimit}${rightBracket}`;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  if (str === '') {
    return '';
  }
  return reverseString(str.slice(1)) + str[0];
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  // return reverseString(`${num}`); // It works brilliant :)
  let digit = num;
  let result = 0;
  while (digit) {
    if (result !== 0) {
      result = (result * 10) + (digit % 10);
    } else {
      result = digit % 10;
    }
    digit = Math.floor(digit / 10);
  }
  return result;
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  let checkDigit = 0;
  const cnnArr = `${ccn}`.split('').map(Number);
  if ((cnnArr.length - 1) % 2 === 0) {
    [checkDigit] = cnnArr;
    cnnArr.splice(0, 1);
  }
  for (let i = 0; i < (cnnArr.length - 1); i += 1) {
    if (i % 2 === 0) {
      if (cnnArr[i] * 2 > 9) {
        cnnArr[i] = cnnArr[i] * 2 - 9;
      } else {
        cnnArr[i] *= 2;
      }
    }
    checkDigit += cnnArr[i];
  }
  checkDigit += parseInt(cnnArr.slice(-1), 10);
  return checkDigit % 10 === 0;
}

/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  if (num < 10) {
    return num;
  }

  let head = num;
  let sum = 0;
  while (head > 0) {
    sum += head % 10;
    head = Math.floor(head / 10);
  }
  return getDigitalRoot(sum);
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  const openingBrackets = ['[', '(', '{', '<'];
  const closingBrackets = [']', ')', '}', '>'];
  const stack = [];
  const isOpeningBracket = (symb) => openingBrackets.includes(symb);
  const isBracketsPair = (opening, closing) => openingBrackets.indexOf(opening)
    === closingBrackets.indexOf(closing);
  for (let index = 0; index < str.length; index += 1) {
    if (isOpeningBracket(str[index])) {
      stack.push(str[index]);
    } else if (isBracketsPair(stack[stack.length - 1], str[index])) {
      stack.pop();
    } else {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}


/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  return num.toString(n);
}


/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  const pathElements = [];
  let commonElements = [];
  pathes.forEach((value) => pathElements.push(value.split('/'))); // [['', 'web'], ['', 'web']]
  const comparePathes = () => {
    for (let i = 0; i < pathElements[0].length; i += 1) {
      for (let j = 1; j < pathes.length; j += 1) {
        if (pathElements[0][i] !== pathElements[j][i]) {
          commonElements.push('');
          return commonElements;
        }
      }
      commonElements.push(pathElements[0][i]);
    }
    commonElements.push('');
    return commonElements;
  };
  commonElements = comparePathes();
  return commonElements.join('/');
}


/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  const resultMatrix = [];
  const productRowColumn = (rN, cN) => {
    let product = 0;
    for (let k = 0; k < m1[rN].length; k += 1) {
      product += m1[rN][k] * m2[k][cN];
    }
    return product;
  };
  for (let i = 0; i < m1.length; i += 1) {
    const newRow = [];
    for (let j = 0; j < m2[0].length; j += 1) {
      newRow.push(productRowColumn(i, j));
    }
    resultMatrix.push(newRow);
  }
  return resultMatrix;
}


/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  const l = position.length;
  let winMainDiag = true;
  let winSideDiag = true;
  for (let i = 0; i < l; i += 1) {
    let winRow = true;
    let winColumn = true;
    for (let j = 1; j < position.length; j += 1) {
      // check i row
      if (winRow && (position[i][j - 1] !== position[i][j] || !position[i][j])) {
        winRow = false;
      }
      // check i column
      if (position[j - 1][i] !== position[j][i] || !position[j][i]) {
        winColumn = false;
      }
      // check main diagonal
      if (position[j - 1][j - 1] !== position[j][j] && i === 0) {
        winMainDiag = false;
      }
      // check side diagonal
      if (position[j - 1][l - j] !== position[j][l - 1 - j] && i === 0) {
        winSideDiag = false;
      }

      if (!winRow && !winColumn && !winMainDiag && !winSideDiag) {
        break;
      }
    }
    if (winRow) {
      return position[i][0];
    }
    if (winColumn) {
      return position[0][i];
    }

    if (winMainDiag) {
      return position[0][0];
    }
    if (winSideDiag) {
      return position[0][l - 1];
    }

    winRow = true;
    winColumn = true;
  }
  return undefined;
}


module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
