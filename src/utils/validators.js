export const validateDate = (string) => {
    if (/^\d{2}\.\d{2}\.\d{4}$/.test(string)) {
      const arrDate = string.split('.');
      const dateNow = new Date().getTime();
      const dateString = new Date(`${arrDate[2]}/${arrDate[1]}/${arrDate[0]}`).getTime();
      return dateNow > dateString;
    };
    return false;
};

export const validatePassportSeries = (string) => {
    return /^\d{4}$/.test(string);
};

export const validatePassportNumber = (string) => {
    return /^\d{6}$/.test(string);
};

export const validateBirthNumber = (string) => {
    return /^[v,i,x,m]{1,4}[а-я]{1,2}\d{6}$/.test(string);
};

export const validatePhoneNumber = (number) => {
    const numberWithoutSpace = number.replace(/\s/g, "");
    const joinNum = (splitNum) => {
      splitNum[1] = splitNum[1] + " ";
      splitNum[4] = splitNum[4] + " ";
      splitNum[7] = splitNum[7] + " ";
      splitNum[9] = splitNum[9] + " ";
      return splitNum.join("");
    }
    if (numberWithoutSpace.length === 11 && /\d/g.test(numberWithoutSpace) && /^(8|7)/.test(numberWithoutSpace)) {
        const num = numberWithoutSpace.replace(/^(8|7)/, "+7");
        return joinNum(num.split(""));
    };

    if (numberWithoutSpace.length === 12 && /^\+\d{11}/.test(numberWithoutSpace)) {
    return joinNum(numberWithoutSpace.split(""));
    };
    
    return '';
}

export const validateEmail = (string) => {
    return /@/.test(string) && /\.[a-z]{2,3}$/.test(string);
};