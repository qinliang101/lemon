import mysql from 'mysql'

const pool = mysql.createPool({
    host: '140.246.137.196',
    user: 'root',
    password: 'qinliang',
    database: 'lemon',
})

const query = function(sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection((error, connection) => {
            if (error) {
                console.log('连接是生生世世')
                reject(error)
            } else {
                connection.query(sql, (error, results, fields) => {
                    if (error) {
                        console.log('dfanidngid哈哈哈哈')
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