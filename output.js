const getMean = (arr) => arr.reduce((acc, curr) => (acc += curr), 0) / arr.length

const startQwik = [
	1668533833492 - 1668533828639,
	1668533868998 - 1668533864219,
	1668533889114 - 1668533884365,
	1668533908681 - 1668533903844,
	1668533927906 - 1668533922966,
]
const rootQwik = [722, 673, 709, 705, 706]
const leafQwik = [778, 663, 702, 612, 822]

const rootQwik2 = [
	1668588358265 - 1668588357763,
	1668588383003 - 1668588382063,
	1668588400230 - 1668588399501,
	1668588416591 - 1668588415869,
	1668588428562 - 1668588427962,
]
const domLoadQwik = [42, 44, 39, 45, 38]
const domLoadFast3gQwik = [593, 652, 658, 597, 591]
const domLoadSlow3gQwik = [2.12, 2.09, 2.1, 2.09, 2.1]
const buildQwik = [
	1668535656222 - 1668535644467,
	1668535706676 - 1668535698250,
	1668535870764 - 1668535861996,
	1668535896886 - 1668535888733,
	1668535922017 - 1668535914061,
]

const startReact = [
	1668533447712 - 1668533445383,
	1668533489037 - 1668533486661,
	1668533533332 - 1668533531540,
	1668533560254 - 1668533558263,
	1668533608925 - 1668533606740,
]
const rootReact = [375, 393, 393, 394, 494]
const leafReact = [159, 347, 251, 233, 242]
const domLoadReact = [134, 146, 127, 150, 139]
const domLoadFast3gReact = [1410, 1420, 1420, 1420, 1420]
const domLoadSlow3gReact = [5.02, 4.96, 4.96, 4.96, 4.96]
const buildReact = [
	1668536042649 - 1668536041244,
	1668536074893 - 1668536073454,
	1668536091645 - 1668536090268,
	1668536107659 - 1668536106261,
	1668536122905 - 1668536121508,
]

console.log('Qwik + Vite (ms)', {
	startMean: getMean(startQwik),
	leafMean: getMean(leafQwik),
	rootMean: getMean(rootQwik),
	domLoad: getMean(domLoadQwik),
	domLoadFast3G: getMean(domLoadFast3gQwik),
	domLoadSlow3G: getMean(domLoadSlow3gQwik) * 1000,
	buildMean: getMean(buildQwik),
	startQwik,
	leafQwik,
	rootQwik,
	domLoadQwik,
	domLoadFast3gQwik,
	domLoadSlow3gQwik,
	buildQwik,
})
console.log('React + Vite SWC (ms)', {
	startMean: getMean(startReact),
	leafMean: getMean(leafReact),
	rootMean: getMean(rootReact),
	domLoad: getMean(domLoadReact),
	domLoadFast3G: getMean(domLoadFast3gReact),
	domLoadSlow3G: getMean(domLoadSlow3gReact) * 1000,
	buildMean: getMean(buildReact),
	startReact,
	leafReact,
	rootReact,
	domLoadReact,
	domLoadFast3gReact,
	domLoadSlow3gReact,
	buildReact,
})

