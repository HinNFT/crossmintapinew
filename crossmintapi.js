const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

const db = mysql.createConnection({
  user: "root",
  password: "207055Ff",
  host: "34.70.147.174",
  port: "3306",
  database: "crossmint",
})




app.post('/webhook', (req,res) => {
  const whPassThroughArgs = req.body.whPassThroughArgs
  const args = JSON.parse(whPassThroughArgs);
  const referralCode = args.referral
  const amount = args.amount

  console.log(args)

  db.query(
    "INSERT INTO crossmintusers (referralcode, amount) VALUES (?,?)", 
    [referralCode, amount], 
    (err, result) => {
      if(err) {
        console.log(err)
      } else {
        console.log(result)
      }

      
    })
})

db.connect(function(err){

if(!err) {
    console.log("Database is connected ... ");    
} else {
    console.log(err);    
}})





app.listen(3306, ()=> console.log('api running on 3306'))

// db.query(
//     "INSERT INTO crossmintusers (referralcode, amount) VALUES (?,?)", 
//     ["testnode", '3'],
//     (err, result) => {
//       if(err) {
//         console.log(err)
//       } else {
//         console.log(result)
//       }
//  
//     })
// 
// db.query(
//     "SELECT * FROM crossmintusers",    
//     (err, result) => {
//       if(err) {
//         console.log(err)
//       } else {
//         console.log(result)
//       } 
//     })

