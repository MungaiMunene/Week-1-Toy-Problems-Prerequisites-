// salaryCalculator.test.js

const { calculateNetSalary, calculatePAYE, calculateNHIF, calculateNSSF } = require('./index');

describe('Salary Calculator Functions', () => {
  test('calculatePAYE returns correct PAYE for different salary ranges', () => {
    expect(calculatePAYE(20000)).toBeCloseTo(2000, 2);
    expect(calculatePAYE(30000)).toBeCloseTo(4458.25, 2);
    expect(calculatePAYE(40000)).toBeCloseTo(7390.1, 2);
  });

  test('calculateNHIF returns correct NHIF for different salary ranges', () => {
    expect(calculateNHIF(5000)).toEqual(150);
    expect(calculateNHIF(10000)).toEqual(400);
    expect(calculateNHIF(30000)).toEqual(850);
    expect(calculateNHIF(50000)).toEqual(1100);
    expect(calculateNHIF(100000)).toEqual(1700);
  });

  test('calculateNSSF returns correct NSSF deduction', () => {
    expect(calculateNSSF(5000)).toEqual(200);
    expect(calculateNSSF(10000)).toEqual(400);
    expect(calculateNSSF(20000)).toEqual(800);
    expect(calculateNSSF(30000)).toEqual(1000);
    expect(calculateNSSF(50000)).toEqual(1200);
    expect(calculateNSSF(100000)).toEqual(1800);
  });

  test('calculateNetSalary returns correct net salary and deductions', () => {
    const result = calculateNetSalary(30000, 10000);
    expect(result.grossSalary).toEqual(40000);
    expect(result.benefits).toEqual(10000);
    expect(result.paye).toBeCloseTo(4458.25, 2);
    expect(result.nhif).toEqual(850);
    expect(result.nssf).toEqual(1000);
    expect(result.netSalary).toBeCloseTo(30000, 2);
  });
});