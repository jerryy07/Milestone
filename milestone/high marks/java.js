function findHighestMarks(marks) {
    let highestMarks = marks[0];

    for (let i = 1; i < marks.length; i++) {
        highestMarks = (marks[i] > highestMarks) ? marks[i] : highestMarks;
    }

    console.log("The highest marks scored by a student is: " + highestMarks);
}

// Example usage:
let marks = [78, 85, 62, 90, 88];
findHighestMarks(marks); // Output: The highest marks scored by a student is: 90
