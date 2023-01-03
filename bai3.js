function checkStrInsideStr(str1,str2){
    let i
    let j
    for (i = 0; i < str2.length; i++) {
        for(j=0;j<str1.length;j++){
           if(str1[j]==str2[i+j]){
               continue
           }else{
               break
           }
        }
        if(j==str1.length){
            return true
        }
    }
    return false
}
console.log(checkStrInsideStr("hello","hello World"))