const { NotImplementedError } = require("../extensions/index.js");

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
  constructor(reverse) {
    this.reverse = reverse;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alpha = alpha.toUpperCase();
    let str = string;
    let strl = str.length;
    let keyl = key.length;
    let a, b;
    let res = "";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let save = {};
    let n = 0;
    for (let i = 0; i < strl; i++) {
      if (!alpha.includes(str.charAt(i))) {
        save[i + n] = str.charAt(i);
        console.log(str.charAt(i));
        str = str.slice(0, i) + str.slice(i + 1);
        strl -= 1;
        i--;
        n++;
      }
    }

    console.log(save);
    if (strl > keyl) {
      for (let i = 0; i < strl - keyl; i++) {
        key += `${key.charAt(i)}`;
      }
    }

    for (let i = 0; i < strl; i++) {
      a = alpha.indexOf(str.charAt(i), 0);
      b = alpha.indexOf(key.charAt(i), 0);

      res += alpha.charAt(a + b);
    }

    res = res.split("");
    for (i in save) {
      res.splice(+i, 0, save[i]);
    }
    res = res.join("");

    if (this.reverse == false) {
      return res.split("").reverse().join("");
    }

    return res;
  }
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Incorrect arguments!");
    }

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
    alpha = alpha.toUpperCase();
    let str = string;
    let strl = str.length;
    let keyl = key.length;
    let a, b;
    let res = "";
    str = str.toUpperCase();
    key = key.toUpperCase();
    let save = {};
    let n = 0;
    for (let i = 0; i < strl; i++) {
      if (!alpha.includes(str.charAt(i))) {
        save[i + n] = str.charAt(i);
        console.log(str.charAt(i));
        str = str.slice(0, i) + str.slice(i + 1);
        strl -= 1;
        i--;
        n++;
      }
    }

    console.log(save);
    if (strl > keyl) {
      for (let i = 0; i < strl - keyl; i++) {
        key += `${key.charAt(i)}`;
      }
    }

    for (let i = 0; i < strl; i++) {
      a = alpha.indexOf(str.charAt(i), 0);
      b = alpha.indexOf(key.charAt(i), 0);

      res += alpha.charAt(a + 26 - b);
    }

    res = res.split("");
    for (i in save) {
      res.splice(+i, 0, save[i]);
    }
    res = res.join("");

    if (this.reverse == false) {
      return res.split("").reverse().join("");
    }
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
