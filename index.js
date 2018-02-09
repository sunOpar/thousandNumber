/**
 * 将数字变成千分位
 * @param {number} arg 被处理的数据
 * @param {number} decimalsNum 保留小数位，默认为两位，传null表示不对小数做处理
 * @returns string
 */
function thousandNumber(arg = 0, decimalsNum = 2) {
  arg = arg ? arg : 0;
  let str;
  // 不对小数位做特殊处理
  if (decimalsNum === null) {
    str = `${arg}`;
  } else {
    str = (+`${toFixed(arg, decimalsNum)}`).toFixed(decimalsNum);
  }
  const DIGIT_PATTERN = /(^|\s)\d+(?=\.?\d*($|\s))/g;
  const MILLI_PATTERN = /(?=(?!\b)(\d{3})+$)/g;
  str = str.replace(DIGIT_PATTERN, m => m.replace(MILLI_PATTERN, ","));
  return str;
}

function toFixed(num, precision = 2) {
  return Number(
    (+(Math.round(+(num + "e" + precision)) + "e" + -precision)).toFixed(
      precision
    )
  );
}
module.exports = thousandNumber;
