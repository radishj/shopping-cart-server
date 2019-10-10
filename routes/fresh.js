var express = require("express")
var router = express.Router()
const Fresh = require("../model/Fresh")

//Get All products
router.get("/product",(req, res)=>{
    console.log('product');
    Fresh.product.findAll({
        where: {
            $or: [
                {Hold: 0},
                {$and: [
                    {Hold: {$or: [1,2]}},
                    {StockQty: {$gt: 0}}
                ]}
            ]
        },
        order:[['PID']],
        //limit: 10, 
        logging: console.log
    })
    .then(products => {
        console.log(products);
        res.send(products)
    })
    .catch(err => {
        res.send("error: " + err)
    })
})

//Get All productType
router.get("/productTypes",(req, res)=>{
    console.log('productTypes');
    Fresh.productType.findAll({
        where: {
            ID: {
                $and:[
                    {$lte: 950 },
                    {$notIn: [96, 98, 99]}
                ]
            } 
        },
        order:[['ID']],
        //limit: 10, 
        logging: console.log
    })
        .then(productTypes => {
            console.log(productTypes);
            res.send(productTypes)
        })
        .catch(err => {
            res.send("error: " + err)
        })
})

//Add productType
router.post("/productType", (req, res) => {
    console.log(req.body);
    if(!req.body.name){
        res.status(400)
        res.json({
            error: "Bad Data1"
        })
    }else{
        Fresh.productType.create(req.body)
        .then(() =>{
            res.send("Fresh.productType Add")
        })
        .catch(err => {
            res.send("Error: " + err)
        })
    }
})

router.delete("/productType/:id",(req, res) => {
    Fresh.productType.destroy({
        where:{
            id: req.params.id
        }
    })
        .then(() => {
            res.send("Fresh.productType Deleted!")
        })
        .catch(err => {
            res.send("error: " + err)
        })
})
module.exports = router