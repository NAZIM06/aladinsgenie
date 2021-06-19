export function caculateTotal(arr) {
  return arr.reduce((accumulator, pd) => accumulator + pd.totalprice, 0);
}
