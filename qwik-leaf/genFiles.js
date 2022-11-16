import { writeFileSync } from 'node:fs'

let imports = `import { component$ } from '@builder.io/qwik'\n`
let renderCode = ``

for (let i = 0; i < 1000; i++) {
	imports += `import Comp${i} from '../components/comp${i}.jsx'\n`
	renderCode += `<Comp${i}/>\n`
	writeFileSync(
		`src/components/comp${i}.jsx`,
		`import { component$ } from '@builder.io/qwik'
    
    export default component$(() => {
      return <div>comp${i} - hello {Date.now()}</div>
  })`
	)
}

const code = `
 ${imports}
export default component$(()=>{
  return <div>
  <p>root - {Date.now()}</p>
   ${renderCode}
  </div>
})
`

writeFileSync('src/routes/index.tsx', code)

