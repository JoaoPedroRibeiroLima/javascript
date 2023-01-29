var num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(num)
for(var pos = 0;pos < num.length;pos++) {
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}
