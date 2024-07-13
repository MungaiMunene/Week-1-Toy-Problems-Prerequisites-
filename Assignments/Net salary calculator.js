// Net salary calculator = (Gross Salary + Relief) - (PAYE + NHIF + NSSF)

// function to calculate PAYE
function calculatePAYE(grossSalary) {
    if (grossSalary <= 24000) {
       return grossSalary *.1; 
    } else if (grossSalary <= 32333) {
       return '2400 + (grossSalary - 24000) *0.25'; 
    } else {
       return `2400 + 2083.25 + (grossSalary - 32333)*.3`; 
    }
   }
   // function to calculate NHIF deductions 
   function calculateNHIF(grossSalary) {
       if (grossSalary <= 5999) {
           return 150;
       } else if (grossSalary <= 7999) {
           return 300;
       } else if (grossSalary <= 11999) {
           return 400;
       } else if (grossSalary <= 14999) {
           return 500;
       } else if (grossSalary <= 19999) {
           return 600;
       } else if (grossSalary <= 24999) {
           return 750;
       } else if (grossSalary <= 29999) {
           return 850;
       } else if (grossSalary <= 34999) {
           return 900;
       } else if (grossSalary <= 39999) {
           return 950;
       } else if (grossSalary <= 44999) {
           return 1000;
       } else if (grossSalary <= 49999) {
           return 1100;
       } else if (grossSalary <= 59999) {
           return 1200;
       } else if (grossSalary <= 69999) {
           return 1300;
       } else if (grossSalary <= 79999) {
           return 1400;
       } else if (grossSalary <= 89999) {
           return 1500;
       } else if (grossSalary <= 99999) {
           return 1600;
       } else {
           return 1700; // For grossSalary >= 100000
       }
   }
       
   // function to calculate NSSF deductions 
   function calculateNSSF(grossSalary) {
       return grossSalary * 0.06; 
   }
   
   // Main function to calculate net salary 
   function calculateNetSalary (basicSalary, benefits) {
       const grossSalary = (basicSalary + benefits); 
       const paye = calculatePAYE(grossSalary); 
       const nhif = calculateNHIF(grossSalary); 
       const nssf = calculateNSSF(grossSalary); 
       const netSalary = grossSalary - (paye + nhif + nssf); 
       return {
           grossSalary: grossSalary, 
           paye: paye, 
           nhif: nhif, 
           nssf: nssf, 
           netSalary: netSalary
       } 
   } 