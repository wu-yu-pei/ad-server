import mysql from 'mysql2/promise'

const connect = await mysql.createConnection({
  host: '107.173.236.168',
  user: 'root',
  password: 'trojan',
  database: 'ad-db',
})


export default connect