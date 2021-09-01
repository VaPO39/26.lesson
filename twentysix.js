/*function* strGenerator() {//! звездочка после функшена это обозначение генератоа
    yield 'H'//!специальное ключевое слово доступное только в генераторах
    yield 'e'
    yield 'l'
    yield 'l'
    yield 'o'

}
const str = strGenerator()




function* numberGen(n = 10) {
    for (let i = 0; i < n; i++){
        yield i
    }
}
const number= numberGen(7)
const iterator = {
    [Symbol.iterator](n=10) {//! добавялем специальный ключ( специальный класс в джс), имя строгое и итератор нельзя заменить на другое
        let i = 0
        return {
            next() {
                if (i < n) {
                    return { value: ++i, done: false }//!специальные ключи велью и дан
                    
                }
                else {
                    return{value: undefined, done: true}
                }
            }
     }    
    }

}*/
function* itr(n = 10) {//!!!  не забываем, что йелд можно использовать только в генераторах, то естбь после фуннкции ставим звездочку
    for (let i = 0; i < n; i++){
        yield i
    }
}

for (let k of itr()) {//? цикл фор оф, в данном случае выводит по символьно слово хеллоу, работает со строками
    console.log(k);
    

}
    console.log('Пауза...');
    
for (let z of [1, 2, 3, 5, 8, 13]) {//!  а тут с массивом чисел фибоначи
    console.log(z);
    
}