/** Creates an array with all falsey values removed.
 *  The values false, null, 0, "", undefined,
 *  and NaN are falsey. **/

export const Compact = (arr: Array<any>): Array<any> => {
  let clearArr
  clearArr = arr.filter((el) => {
   return  el == true
  })
  return clearArr
}