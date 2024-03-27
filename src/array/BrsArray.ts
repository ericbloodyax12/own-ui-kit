/** Creates an array with all falsey values removed.
 *  The values false, null, 0, "", undefined,
 *  and NaN are falsey. **/
class BrsArray {
  constructor() {
  }
Compact<T> (arr: Array<T>): Array<T> {
  let clearArr
  clearArr = arr.filter((el) => {
    return  el == true
  })
  return clearArr
}
Union (arrays: Array<(number | string)[]>):(number | string)[] {
  let resArray:(number | string)[] = []
   arrays.forEach((arr: (number | string)[]) => {
    arr.forEach((el: number|string) => {
      if (!resArray.includes(el)) {
        return resArray.push(el)
      }
    })
  })
  return resArray
}
Take (array: (number | string)[], n:number): (number | string)[] {
  if (n <= array.length) {
    return array.slice(0, n);
  } else {
    console.error('Ошибка: Значение n превышает длину массива');
    return array;
  }
}
Uniq (array:(number | string)[]): (number | string)[] {
    return  array.filter((el, index) => {
     return array.indexOf(el) === index
    })
}
}

export const arrayHelper = new BrsArray();