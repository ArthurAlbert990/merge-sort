console.log('JS working.');

//needs to be recursive
// each "split" is a step

//get input array
//split into two sub arrays, "a" and "b"
//sub array "a" and sub array "b"
//split until you have only 1 number per array
//sort it.
//merge "a" and "b"

function mergeSort(arr) {
    if(arr.length % 2 == 0){
        console.log('even')
        let subArrA = arr.slice(0,arr.length/2)
        let subArrB = arr.slice(arr.length/2,arr.length)
        console.log(subArrA);
        console.log(subArrB);
    } else{
        console.log('odd');
    }
}