import mysql from 'mysql'

const pool = mysql.createPool({
    host: process.env.NODE_ENV == 'development' ? '127.0.0.1' : '140.246.137.196',
    user: 'lemon',
    password: 'qinliang',
    database: 'lemon',
})

const query = function(sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                reject(error)
            } else {
                connection.query(sql, values, (error, results, fields) => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve(results)
                    }
                    connection.release()
                })
            }
        })
    })
}

export default query