const { execSync } = require('child_process')

function execute(command, options) {
  return execSync(command, { stdio: [0, 1, 2], ...options })
}

function log(...args) {
  console.log(...args)
}

function addNewLine() {
  return log(`\n`)
}

log('=== Post Install Script ===')
addNewLine()

log('** Running Jetify **')
execute(`npx jetify`)

addNewLine()
log('=== End of Post Install Script ===')
