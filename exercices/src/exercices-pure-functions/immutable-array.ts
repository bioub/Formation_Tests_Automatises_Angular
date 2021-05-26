export function push<T>(array: T[], value: T) {
  return [...array, value];
}

// SPREAD Operator (ES2015)
// convertion syntaxique : tableau -> liste d'élément
// ex: [2, 3, 4] -> 2, 3, 4
// const nbs = [2, 3, 4];
// const clone = [...nbs]; // [2, 3, 4]

// REST Params (ES2015)
// convertion syntaxique : liste d'élément -> tableau
// function sum(...nbs) {
//   // boucler sur nbs
// }
// sum(1, 2, 3, 4)

// Depuis ES2018 on a aussi REST et SPREAD sur les objets
// const coords = {x: 1, y: 2};
// const clone = {...coords};
