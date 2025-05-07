import mysql from 'mysql2/promise'

const connect = await mysql.createConnection({
  host: 'rm-cn-c97492cig000g19o.rwlb.rds.aliyuncs.com',
  user: 'wuyupeidms',
  password: '------',
  database: 'ad-db',
})


export default connect