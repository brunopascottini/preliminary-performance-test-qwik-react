import fs from 'node:fs'

let imports = ``
let renderCode = ``

for (let i = 0; i < 1000; i++) {
	imports += `import { Comp${i} } from './components/comp${i}.jsx'\n`
	renderCode += `<Comp${i}/>\n`
	fs.writeFileSync(
		`src/components/comp${i}.jsx`,
		`export function Comp${i}() {
    
    return <div>comp${i} - hello {Date.now()}</div>
  }`
	)
}

const code = `
 ${imports}
export default function App() {
  return <div>
  <p>root - {Date.now()}</p>
   ${renderCode}
  </div>
}
`

fs.writeFileSync('src/App.jsx', code)

