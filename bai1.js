let score=[0,4,3,23,4,43,6,5,34]
function sortArr(arr) {
    let temp = new Array(arr.length)
    for (let i = 0; i < arr.length; i++) {
        temp[i] = arr[i]
    }
    let result = []
    let i
    for (let j = 0; j < arr.length; j++) {
        let max = temp[0]
        let maxIndex = 0
        for (i = 0; i < temp.length; i++) {
            if (max < temp[i]) {
                max = temp[i]
                maxIndex = i
            }
        }
        result[j] = temp.splice(maxIndex, 1)
    }
    return result
}
let ans=sortArr(score)[2]
console.log(ans)
