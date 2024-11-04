import { LOTTO } from "../constants/lotto.js";
import { isUnitFormmat } from "../utils/isUnitFormmat.js";

class PurcahseAmount{
  #amount;

  constructor(amount){
    this.#validate(amount);
    this.#amount = Number(amount);
  }

  #validate(amount){
    const numericStringRegex = /^[\d]+$/;
    if (!numericStringRegex.test(amount)){
      throw new Error('[ERROR] 당첨금액은 숫자로만 입력가능합니다.');
    }
    if (!isUnitFormmat(amount, LOTTO.PRICE)) {
      throw new Error('[ERROR] 당첨금액은 1000원 단위로 입력해야합니다.');
    }
  }

  get amount () {
    return this.#amount;
  }
}

export default PurcahseAmount;
