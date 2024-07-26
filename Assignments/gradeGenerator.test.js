/**
 * @jest-environment jsdom
 */

const { generateStudentGrade } = require('./gradeGenerator');

describe('generateStudentGrade', () => {
    let marksInput;
    let resultOutput;

    beforeEach(() => {
        // Set up our document body
        document.body.innerHTML = `
            <input id="marks" type="text" />
            <div id="result"></div>
        `;

        marksInput = document.getElementById('marks');
        resultOutput = document.getElementById('result');
    });

    test('should display "Invalid input" for non-numeric input', () => {
        marksInput.value = 'abc';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Invalid input. Marks should be between 0 and 100.');
    });

    test('should display "Invalid input" for marks less than 0', () => {
        marksInput.value = '-10';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Invalid input. Marks should be between 0 and 100.');
    });

    test('should display "Invalid input" for marks greater than 100', () => {
        marksInput.value = '110';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Invalid input. Marks should be between 0 and 100.');
    });

    test('should assign grade A for marks greater than 79', () => {
        marksInput.value = '80';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Grade: A');
    });

    test('should assign grade B for marks between 60 and 79', () => {
        marksInput.value = '70';
       generateStudentGrade();
        expect(resultOutput.innerText).toBe('Grade: B');
    });

    test('should assign grade C for marks between 49 and 59', () => {
        marksInput.value = '50';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Grade: C');
    });

    test('should assign grade D for marks between 40 and 48', () => {
        marksInput.value = '45';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Grade: D');
    });

    test('should assign grade E for marks less than 40', () => {
        marksInput.value = '35';
        generateStudentGrade();
        expect(resultOutput.innerText).toBe('Grade: E');
    });


});