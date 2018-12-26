const input = require('./01-input.js')

// part 1
console.log(
	input.reduce((acc, num) => acc + num, 0)
)

// part 2

function* source() {
	while (true) {
		yield* input
	}
}

const solvePart2 = () => {
	const foundSoFar = new Set()
	let current = 0

	for (const next of source()) {
		current += next
		if (foundSoFar.has(current)) {
			return current
		}
		foundSoFar.add(current)
	}
}

console.log(solvePart2())
