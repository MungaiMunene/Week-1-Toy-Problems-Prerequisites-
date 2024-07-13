// Student Grade Generator 
function generateStudentGrade() { // here we are defining the function
    let marks = prompt ('Enter students marks (between 0 and 100):'); // this will promt the user to enter an input score between 0 and 100. 
    marks = Number(marks);  // here we are using Number to convert the input to a number, alternatively one could use parseFloat() for the same purpose. 
// we then validate the input // if the input marks is not a number isNaN, or is less than 0 or is greater than 100, return "Invalid input, marks should be between 0 and 100"
if (isNaN(marks) || marks < 0 || marks > 100) {
    return "Invalid input. Marks should be between 0 and 100.";
}
// adding if ...else if for determining grade based on input score.
let grade; 
if (marks > 79) {
    grade = 'A'; 
}
    else if (marks >= 60) {
        grade = 'B'; 
    }
    else if (marks >= 49 ) {
        grade = 'C'; 
    }
    else if (marks >= 40) {
        grade = 'D'; 
    }
    else if (marks < 40) {
        grade = 'E'; 
    }
    
//Return the grade 
return `Grade: ${grade}`; 
}