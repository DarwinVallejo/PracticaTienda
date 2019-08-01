const connection = require('../connections/connection-sql')

async function executeGet(sql) {
    try {
        let cn = await connection.connection()
        const [rows, fields] = await cn.query(sql)
        return rows
    } catch (error) {
        return error
    }
}

async function executeInsert(sql, values) {
    let cn = await connection.connection()
    try {
        await cn.query("START TRANSACTION");
        let savedElement = await con.query(
            sql,
            values
        );
        await cn.query("COMMIT");
        return savedElement.insertId;
    }
    catch (ex) {
        await cn.query("ROLLBACK");
        console.log(ex);
        throw ex;
    }
    finally {
        await cn.release();
        await cn.destroy();
    }
}

async function executeUpdate(sql, values) {
    return executeInsert(sql, values)
}

async function executeDelete(sql, id) {
    let cn = await connection.connection()
    try {
        await cn.query("START TRANSACTION");
        await cn.query(sql, [id]);
        await cn.query("COMMIT");
        return true;
    }
    catch (ex) {
        await con.query("ROLLBACK");
        console.log(ex);
        throw ex;
    }
    finally {
        await cn.release();
        await cn.destroy();
    }
}


module.exports = {
    executeGet,
    executeInsert,
    executeUpdate,
    executeDelete
}

