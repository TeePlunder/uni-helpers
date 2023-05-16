const numbers = [0,1,2,3,4,5,6,7,8,9,10,11]

const results = []

const calcDivider = (expected) => {
    console.log("----------------------");
    console.log(`Expected result: ${expected}`)
    for(var num in numbers) {
        for(var t in numbers) {
            const result = num * t
            if(result == expected) {
                console.log(`${num} * ${t} = ${result}`)
                results.push(num)
                results.push(t)
            }
        }
    }
}


const main = 12
var toExpected = []
for(var x = 1; x < 10; x++) {
    toExpected.push(main * x)
}

for(var x = 0; x < toExpected.length; x++) {
    calcDivider(toExpected[x])
}
var unique = results.filter((value, index, array) => array.indexOf(value) === index)

console.log("🚀 ~ file: calcNullZeroDivider.js:32 ~ unique:", unique)
