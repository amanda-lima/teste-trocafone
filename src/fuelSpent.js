
/**
 * Recebe horas e velocidade média de uma viagem e deve calcular combustível gasto.
 * Considere que o automovel gasta 12 km/l.
 * @param number hours
 * @param number averageSpeed
 */
function fuelSpent(hours, averageSpeed){
	const KilometersperLiter = 12;

	const Kilometer = averageSpeed * hours;

	const Liter = Kilometer / KilometersperLiter;
	const RoundedLiter = Math.ceil(Liter)

	return RoundedLiter;
}

module.exports = fuelSpent;