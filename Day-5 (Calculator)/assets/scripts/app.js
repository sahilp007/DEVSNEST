const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
	return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
	const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult
	};
	logEntries.push(logEntry);
	console.log(logEntries);
}

function calculate(calculationType) {
	const enteredNumber = getUserNumberInput()
	const initialResult = currentResult
	let mathOperator;
	switch (calculationType) {
		case 'ADD': {
			currentResult += enteredNumber
			mathOperator = '+';
			break
		}
		case 'SUBTRACT': {
			currentResult -= enteredNumber
			mathOperator = '-';
			break
		}
		case 'MULTIPLY': {
			currentResult *= enteredNumber
			mathOperator = '*';
			break
		}
		case 'DIVIDE': {
			currentResult /= enteredNumber
			mathOperator = '/';
		}
	}
	createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);


}

function add() {
	calculate('ADD')
}

function subtract() {
	calculate('SUBTRACT')
	}

function multiply() {
	calculate('MULTIPLY')
	}

function divide() {
	calculate('DIVIDE')
	}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
