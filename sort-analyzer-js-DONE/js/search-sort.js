// Library of Sort Functions
// Put your sort function solutions here...

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {
        for (let j = 0; j < (anArray.length - i - 1 ); j++) {
            /* compare the adjacent elements */   
            if (anArray[j] > anArray[j+1]){ 
                /* swap them */
                let tmp = anArray[j];
                anArray[j] = anArray[j + 1];
                anArray[j + 1] = tmp;
            }
        }
    }
    return anArray;
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
    for (let i = 0; i < anArray.length - 1; i++) {
        let min = i;
        for (let j = i+1; j < anArray.length; j++) {
            if (anArray[j] < anArray[min]) {
                min=j;
            }
        }
        // Swapping the elements
        let tmp = anArray[i]; 
        anArray[i] = anArray[min];
        anArray[min] = tmp;      
    }
    return anArray;
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
    for (let i = 1; i < (anArray.length); i++) {
        let currentValue = anArray[i];
        let positionOfValue = i;
    
        while((positionOfValue) > 0 && anArray[positionOfValue-1] > currentValue){
        anArray[positionOfValue] = anArray[positionOfValue-1];
        positionOfValue --;
        }
    
        anArray[positionOfValue] = currentValue;
    }
    return anArray;
}