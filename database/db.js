const Sequelize = require("sequelize")
const dbTaskdb = {}
const sequelizeTask = new Sequelize("admin_nodejs_tasks", "admin_admin", "Icm@oc90", {
    host:"localhost",
    dialect:"mysql",
    operatorsAliases: true,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

dbTaskdb.sequelize = sequelizeTask
dbTaskdb.Sequelize = Sequelize

const dbFreshdb = {}
const sequelizeFresh = new Sequelize("admin_freshvictoria", "admin_admin", "Icm@oc90", {
    host:"localhost",
    dialect:"mysql",
    operatorsAliases: true,

    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})

dbFreshdb.sequelize = sequelizeFresh
dbFreshdb.Sequelize = Sequelize

module.exports = {
    dbTask: dbTaskdb,
    dbFresh: dbFreshdb
}