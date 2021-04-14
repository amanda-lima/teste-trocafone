/**
 * Deve receber uma frase e remover duplicatas em sequência.
 * Por exemplo, na frase "Hello Hello Jack." deve retornar "Hello Jack."
 * Mas na frase "Hello Jack. Hello Ana." não deve haver alterações então 
 * deve retornar "Hello Jack. Hello Ana."
 */
function deduplicateSentence($inputString){
		const arrayOfStrings = $inputString.split(" ");

		console.log(arrayOfStrings)
		for (i = 0; i < arrayOfStrings.lenght; i++ ) {
			console.log("dentro do primeiro for")
			for (j = 1; j < arrayofStrings.lenght; i++) {
				console.log("dentro do segundo for")
				if (arrayOfStrings[i] != arrayOfStrings[j]) {
					console.log("dentro do if")
					const CleanArray = [i,j]
					 
					console.log(CleanArray)
					return CleanArray
				}
			}
		}
		
		console.log("Fora do looping");
		//return arrayOfStrings

};

module.exports = deduplicateSentence;