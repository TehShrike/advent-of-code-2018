const keyMaster = require('key-master')

const input = require('./02-input.js')

const hasALetterAppearing = (times, string) => {
	const letters = keyMaster(() => 0)
	string.split('').forEach(char => {
		letters.set(char, letters.get(char) + 1)
	})

	const letterCounts = [...letters.getUnderlyingDataStructure().values()]

	return letterCounts.some(num => num === times)
}

const part1 = input => {
	let twoCharacterOccurrences = 0
	let threeCharacterOccurrences = 0
	input.forEach(string => {
		if (hasALetterAppearing(2, string)) {
			twoCharacterOccurrences++
		}
		if (hasALetterAppearing(3, string)) {
			threeCharacterOccurrences++
		}
	})

	return twoCharacterOccurrences * threeCharacterOccurrences
}

console.log(part1(input))

const deriveAllPossibleBoxIds = string => string.split('').map((_, i) => {
	return [
		...string.slice(0, i),
		...string.slice(i + 1)
	].join('')
})

const part2 = input => {
	const sets = keyMaster(() => new Set())
	let foundId = null

	input.forEach(string => {
		deriveAllPossibleBoxIds(string).forEach((possibleId, position) => {
			const set = sets.get(position)
			if (set.has(possibleId)) {
				foundId = possibleId
			} else {
				set.add(possibleId)
			}
		})
	})

	return foundId
}

console.log(part2(input))
