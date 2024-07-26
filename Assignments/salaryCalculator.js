// Simplified PAYE calculation function
const calculatePAYE = (grossSalary) => {
    let tax = 0;
  
    if (grossSalary <= 24000) {
        tax = grossSalary * 0.1;
    } else if (grossSalary <= 48000) {
        tax = (grossSalary - 24000) * 0.25 + (24000 * 0.1);
    } else {
        tax = (grossSalary - 48000) * 0.3 + (24000 * 0.1) + (24000 * 0.25);
    }
  
    return tax;
};

// Correct NHIF calculation function
const calculateNHIF = (grossSalary) => {
    if (grossSalary <= 5999) return 150;
    if (grossSalary <= 11999) return 400;
    if (grossSalary <= 17999) return 600;
    if (grossSalary <= 24999) return 750;
    if (grossSalary <= 29999) return 850;
    if (grossSalary <= 34999) return 900;
    if (grossSalary <= 39999) return 950;
    if (grossSalary <= 44999) return 1000;
    if (grossSalary <= 49999) return 1100;
    return 1700; // For salaries above 50000
};

// Correct NSSF calculation function
const calculateNSSF = (grossSalary) => {
    if (grossSalary <= 6000) return 200;
    if (grossSalary <= 12000) return 400;
    if (grossSalary <= 18000) return 600;
    if (grossSalary <= 24000) return 800;
    if (grossSalary <= 30000) return 1000;
    if (grossSalary <= 36000) return 1200;
    if (grossSalary <= 42000) return 1400;
    return 1800; // For salaries above 42000
};

// Calculate net salary
const calculateNetSalary = (basicSalary, benefits) => {
    const grossSalary = basicSalary + benefits;
    const paye = calculatePAYE(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - paye - nhif - nssf;
  
    return { grossSalary, benefits, paye, nhif, nssf, netSalary };
};
module.exports = {
    calculateNetSalary,
    calculatePAYE,
    calculateNHIF,
    calculateNSSF
};