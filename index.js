console.log('JS working.');

// instructions
// Example, to use call: mergeSort([1,6,0,45,20,16])

//mergeSort:
// keep splitting one array into two sub arrays until
// the array has only one element, pass the two to mergeFunc
//mergeFunc:
// scans the arrays and keeps an index number for each
// while index is less than array length, is has numbers to sort.
// while it is sorted, the number is pushed in order to the finalArray
// when index is = to array length, it has sorted all the numbers
// return a full array with the sorted numbers
// mergeSort


function mergeFunc(subArrA,subArrB){
    let finalArray =[];
    let indexA = 0;
    let indexB = 0;

    //while conditions checks if "scanned" the full array
    //keep track using an index
    while (indexA < subArrA.length && indexB < subArrB.length){
        let aNumber = subArrA[indexA];
        let bNumber = subArrB[indexB];

        //sort the numbers and push in right order
        if (aNumber < bNumber){
            finalArray.push(aNumber);
            indexA++;
        }
        else{
            finalArray.push(bNumber);
            indexB++;
        }

        // console.log(finalArray);
    }

    //returns an array with a copy of the arrays
    return [...finalArray,...subArrA.slice(indexA),...subArrB.slice(indexB)]
}

function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    // slices into 2 arrays
    middleIndexItem = Math.floor(arr.length/2)
    let subArrA = arr.slice(0,middleIndexItem);
    let subArrB = arr.slice(middleIndexItem,arr.length);

    console.log(`A= ${subArrA}    B= ${subArrB}`);

    //sort the arrays
    return mergeFunc(mergeSort(subArrA),mergeSort(subArrB));
}