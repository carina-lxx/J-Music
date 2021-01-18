export const getCount = (count) => {
    if (count < 0) return;
    if (count < 10000) {
      return count;
    } else if (Math.floor (count / 10000) < 10000) {
      return Math.floor (count/1000)/100 + "K";
    } else  {
      return Math.floor (count / 100000)/ 10 + "M";
    }
  }