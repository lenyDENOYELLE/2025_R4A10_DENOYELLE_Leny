module.exports = {
  // 1) Renvoyer un tableau contenant les résultats de la logique FizzBuzz remaniée
  /*
  En partant du nombre 1 et en allant jusqu'au nombre 35 inclus, parcourez chaque nombre entre ces deux extrémités.
  Pour chaque nombre :
    - Si le nombre est divisible par 3, ajouter "JavaScript" au tableau
    - Si le nombre est divisible par 5, ajouter "TypeScript" au tableau
    - Si le nombre est divisible par 3 et par 5, ajouter "Python" au tableau
    - Sinon, ajouter simplement le nombre au tableau
  Renvoyer le tableau final.
*/
  F1() {
    let table = [];
    for (let i = 1 ; i <= 35 ; i++){
      if (i % 3 == 0){
        if (i % 5 == 0){
          table.push("Python");
        }
        else{
          table.push("JavaScript");
        }
      }
      else if (i % 5 == 0){
        table.push("TypeScript");
      }
      else{
        table.push(i);
      }
    }
    return table;
  },
};