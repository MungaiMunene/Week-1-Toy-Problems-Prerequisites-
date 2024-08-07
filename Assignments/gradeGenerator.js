function generateStudentGrade() { 
    let marks = document.getElementById('marks').value;
   // console.log(marks);
    
    marks = Number(marks);

    if (isNaN(marks) || marks < 0 || marks > 100) {
        document.getElementById('result').innerText = "Invalid input. Marks should be between 0 and 100.";
        return;
    }

    let grade; 
    if (marks > 79) {
        grade = 'A'; 
    } else if (marks >= 60) {
        grade = 'B'; 
    } else if (marks >= 49) {
        grade = 'C'; 
    } else if (marks >= 40) {
        grade = 'D'; 
    } else {
        grade = 'E'; 
    }

    document.getElementById('result').innerText = `Grade: ${grade}`;
}

module.exports = { generateStudentGrade };