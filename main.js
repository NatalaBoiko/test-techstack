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

function calculateTeamFinanceReport(salaries, team) {
  const report = {};

  team.forEach(({ specialization }) => {
    const data = salaries[specialization];

    const salary = salaries[specialization].salary;

    const taxToNumber = parseInt(salaries[specialization].tax) / 100;

    const taxedSalary = Math.round(
      salary +
        salary * taxToNumber +
        salary * taxToNumber ** 2 +
        salary * taxToNumber ** 3
    );

    if (report[`totalBudget${specialization}`]) {
      report[`totalBudget${specialization}`] += taxedSalary;
    } else {
      report[`totalBudget${specialization}`] = taxedSalary;
    }

    if (report["totalBudgetTeam"]) {
      report["totalBudgetTeam"] += taxedSalary;
    } else {
      report["totalBudgetTeam"] = taxedSalary;
    }
  });
  return report;
}

const financeReport = calculateTeamFinanceReport(salaries, team);
console.log(JSON.stringify(financeReport));
// console.log(financeReport);
