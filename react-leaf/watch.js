import { watch } from 'node:fs'

watch('src/App.jsx', (e, filename) => {
	console.log(Date.now(), filename, e)
})

watch('src/components/comp0.jsx', (e, filename) => {
	console.log(Date.now(), filename, e)
})

