/**
 * Deve receber um salário e o total(em float) vendido no mês
 * Considere que deve retornar o salário + 15% do total vendido.
 */
function salaryBonus(salary, totalSale){
	const comission = 0.15 * totalSale;

	const BonusSalary = comission + salary;

	const BonusSalaryFixed = BonusSalary.toFixed(2);
	const BonusSalaryNumber = Number(BonusSalaryFixed);

	return BonusSalaryNumber
};

module.exports = salaryBonus;