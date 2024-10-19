function mergeSortedArrays(array1, array2){

    const sortedFinalArray = [];
    
    if(array1.length === 0){
        return array2;
    }
    if(array2.length === 0){
        return array1;
    }

    let array1Item = array1[0];
    let array2Item = array2[0];
    let i=1;
    let j=1;

    while(array1Item || array2Item){

        if(!array2Item || array1Item < array2Item){
            sortedFinalArray.push(array1Item);
            array1Item = array1[i];
            i++;
        }
        else{
            sortedFinalArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }

    }
    console.log(sortedFinalArray);
}

mergeSortedArrays([1,2,4,5,7],[6,21,22,65]);

