const Sequelize = require("sequelize")
const db =  require("../database/db.js")

module.exports = {
    productType: db.dbFresh.sequelize.define(
        "product_type",
        {
            ID:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: Sequelize.STRING
            },
            DiscountPercentage: {
                type: Sequelize.INTEGER
            }
        },
        {
            freezeTableName: true, // Model tableName will be the same as the model name
            timestamps: false
        }
    )
}