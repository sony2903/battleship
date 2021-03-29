// Your code here
var rowTitle = ['     ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
colTitle = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
line = ' +---------------------------------------+'
separateLine = '|---|---|---|---|---|---|---|---|---|---|'
solidRowTitle = ''

for(let i = 0; i < rowTitle.length; i++){
    solidRowTitle += rowTitle[i]
    if(i>=1){
        solidRowTitle += '   '
    }
}
for(let i=1; i<=10; i++){
    console.log(`${i}  `)
}
console.log(solidRowTitle)
console.log(`separateLine ${rowTitle}`)