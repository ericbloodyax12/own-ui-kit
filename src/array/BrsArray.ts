/** Creates an array with all falsey values removed.
 *  The values false, null, 0, "", undefined,
 *  and NaN are falsey. **/
export class BrsArray {
  constructor() {
  }
Compact<T> (arr: Array<T>): Array<T> {
  let clearArr
  clearArr = arr.filter((el) => {
    return  el == true
  })
  return clearArr
}
Union<T> (arrays: Array<T[]>, unicItems: boolean): T[] {
  unicItems = true
  let resArray: T[] = []
   arrays.forEach((arr) => {
    arr.forEach((el) => {
      if (unicItems ? !resArray.includes(el) : true ) {
        return resArray.push(el)
      }
    })
  })
  return resArray
}
Take<T> (array: T[], n:number): T[] {
  if (n <= array.length) {
    return array.slice(0, n);
  } else {
    console.error('Ошибка: Значение n превышает длину массива');
    return array;
  }
}
Uniq<T> (array:T[]): T[] {
    return  array.filter((el, index) => {
     return array.indexOf(el) === index
    })
}
}
