const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

numbers.map(item => item.filter((item2, index) => {
    if (item2 % 2 != 0) {
        item.splice(index, 1)
    }
}))

console.log(numbers)