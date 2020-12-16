a = [78, 28, 30]
b = [99, 16, 8]

var totalA = 0
var totalB = 0

for (var index = 0; index < 3;index++){
    
    if(a[index] > b [index]){
        totalA += 1  
    } else if (a[index] === b [index]){

    } else {
        totalB += 1 
    }
    
}

 console.log(totalA, totalB)