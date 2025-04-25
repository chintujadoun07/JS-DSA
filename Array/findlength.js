let y = [11, 22, 33, 22, 44, 22, 55, 66, 77, 33, 55, 77];

// Outer loop to iterate over each element
for (let i = 0; i < y.length; i++) {
    let count = 1; // Initialize count for the current number

    // Check if the number has already been counted
    let alreadyCounted = false;
    for (let k = 0; k < i; k++) {
        if (y[i] === y[k]) {
            alreadyCounted = true;
            break;
        }
    }

    // If the number has not been counted before
    if (!alreadyCounted) {
        // Inner loop to count occurrences of the current number
        for (let j = i + 1; j < y.length; j++) {
            if (y[i] === y[j]) {
                count++;
            }
        }

        // Print the number and its count if it appears more than once
        if (count > 1) {
            console.log(`The number ${y[i]} appears ${count} times.`);
            
        }
    }
}
