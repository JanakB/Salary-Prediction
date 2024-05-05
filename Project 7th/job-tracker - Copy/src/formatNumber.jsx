/**
 * The function `formatNumber` converts a number into a formatted string with a suffix (K, M, B, T)
 * based on its magnitude.
 * @returns The `formatNumber` function returns a formatted string representation of a number based on
 * its magnitude. If the absolute value of the input number `num` is greater than or equal to a certain
 * threshold, the function appends a suffix ('T', 'B', 'M', 'K') to the number after dividing it by the
 * corresponding threshold. The formatted number is returned with the suffix attached. If
 */

export default function formatNumber(num, precision = 2) {
    const map = [
      { suffix: 'T', threshold: 1e12 },
      { suffix: 'B', threshold: 1e9 },
      { suffix: 'M', threshold: 1e6 },
      { suffix: 'K', threshold: 1e3 },
      { suffix: '', threshold: 1 },
    ];
  
    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
      return formatted;
    }
  
    return num;
  }
  