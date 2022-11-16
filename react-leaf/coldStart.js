import fs from 'fs'

fs.writeFileSync('coldStart.txt', `${Date.now()}`)

