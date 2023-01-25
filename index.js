const salaries = {
  Progger: {
    // specialization type 'Progger'
    salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
    tax: "15%", // tax percent; presented as string with template `{tax}%` where
    // 'tax' is integer; min: "0%", max: "99%"
  },
  Tester: {
    salary: 1000,
    tax: "10%",
  },
};

const team = [
  {
    name: "Masha", // name of team member
    specialization: "Progger", // specialization should be picked from `salaries`
    // otherwise member should be ignored in report
  },
  {
    name: "Vasya",
    specialization: "Tester",
  },
  {
    name: "Taras",
    specialization: "Tester",
  },
];

const report = {
  totalBudgetTeam: 0,
  totalBudgetProgger: 0,
  totalBudgetTester: 0,
};

const taxToNumber = () => {
  for (const key in salaries) {
    const element = salaries[key];
    const tax = element.tax;
    element.tax = tax.split("").slice(0, 2).join("");
  }
};
taxToNumber();

const proggerTaxedSalary =
  salaries.Progger.salary +
  (salaries.Progger.salary * salaries.Progger.tax) / 100;

const testerTaxedSalary =
  salaries.Tester.salary + (salaries.Tester.salary * salaries.Tester.tax) / 100;

function calculateTeamFinanceReport(salaries, team) {
  for (const item of team) {
    for (key in salaries) {
      if (key === item.specialization && key === "Progger") {
        report.totalBudgetProgger += proggerTaxedSalary;
      }
      if (key === item.specialization && key === "Tester") {
        report.totalBudgetTester += testerTaxedSalary;
      }
      report.totalBudgetTeam =
        report.totalBudgetTester + report.totalBudgetProgger;
    }
  }
  return report;
}

const financeReport = calculateTeamFinanceReport(salaries, team);
console.log(JSON.stringify(financeReport));
// console.log(financeReport);
