const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag
  }

  setABC() {
    const arr = []

    for (let i = 65; i < 91; i++) {
      arr.push(String.fromCharCode(i))
    }

    return arr
  }



  getMatrix() {
    const matrix = []
    let abc = this.setABC()
    for (let i = 0; i < abc.length; i++) {
      matrix.push(abc)
      abc = abc.slice(1).concat(abc.slice(0, 1))
    }
    return matrix
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    let k = Math.ceil(message.length / key.length)
    const keyLong = key.repeat(k)

    const mesArr = message.toUpperCase().split('')
    const keyArr = keyLong.toUpperCase().split('')

    const result = []
    const abc = this.setABC()
    const matrix = this.getMatrix()
    let keyIndex = 0

    for (let i = 0; i < mesArr.length; i++) {
      if (!abc.includes(mesArr[i])) {
        result.push(mesArr[i])
      } else {
        result.push(matrix[abc.indexOf(mesArr[i])][abc.indexOf(keyArr[keyIndex])])
        keyIndex += 1
      }
    }
    if (!this.flag) {
      result.reverse()
    }
    return result.join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error(`Incorrect arguments!`)

    let k = Math.ceil(message.length / key.length)
    const keyLong = key.repeat(k)

    const mesArr = message.toUpperCase().split('')
    const keyArr = keyLong.toUpperCase().split('')

    const result = []
    const abc = this.setABC()
    const matrix = this.getMatrix()
    let keyIndex = 0

    for (let i = 0; i < mesArr.length; i++) {
      if (!abc.includes(mesArr[i])) {
        result.push(mesArr[i])
      } else {
        let j = matrix[abc.indexOf(keyArr[keyIndex])].indexOf(mesArr[i])
        result.push(abc[j])
        keyIndex += 1
      }
    }
    if (!this.flag) {
      result.reverse()
    }
    return result.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
