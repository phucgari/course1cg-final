let arr=[0,4,3,23,4,43,6,5,34]
function tryRemoveFromArray(arr,index){
    if(index>(arr.length-1)){
        return arr
    }
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(i<index){
          result[i]=arr[i]
        }else if(i==index){
            continue
        }else{
            result[i-1]=arr[i]
        }
    }
    return result
}
console.log(tryRemoveFromArray(arr,5))