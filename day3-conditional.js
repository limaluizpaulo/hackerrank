var N = 3
var status 

if(N % 2 == 1) {
    status = 'Weird' }
if (N % 2 == 0 && (6 <= N && N <= 20 )) {
        status = 'Weird'   
}
        if(N % 2 == 0 && (2 <= N && N<= 5)) {
        status = 'Not Weird'
} 

if (N % 2 == 0 && N > 20){
    status = 'Not Weird'
} 



console.log(status)