let num = [5,8,2,9,3]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O valor do primeiro vetor é ${num[0]}`)
let pos = num.indexOF(8)
if (pos == -1) {
    console.log(`O valor náo foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}


/* nesse caso let = valores
for(let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/* nesse também
for(let pos in valores){
     console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
     */