import fs from 'fs'

fs.writeFileSync('buildTime.txt', `${Date.now()}`)

