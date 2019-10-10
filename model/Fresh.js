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
    ),

    product: db.dbFresh.sequelize.define(
        "product",
        {
            PID:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            Name: {
                type: Sequelize.TEXT                        
            },
            TAX: {
                type: Sequelize.INTEGER
            },
            PType: {
                type: Sequelize.INTEGER
            },
            ProductTypeID: {
                type: Sequelize.INTEGER
            },
            UnitPrice: {
                type: Sequelize.DECIMAL(10, 2)
            },
            Unit: {
                type: Sequelize.FLOAT
            },
            WUnitType: {
                type: Sequelize.INTEGER
            },
            Hold: {
                type: Sequelize.INTEGER
            },
            StockQty: {
                type: Sequelize.INTEGER
            },
            PIndex: {
                type: Sequelize.FLOAT
            },
            Info: {
                type: Sequelize.TEXT                        
            },
            Folder: {
                type: Sequelize.STRING(30)  
            },
            ImageFileName: {
                type: Sequelize.TEXT
            }
        },
        {
            freezeTableName: true, // Model tableName will be the same as the model name
            timestamps: false
        }
    )
}