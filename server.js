const express = require('express');
const xlsx = require('xlsx');
const path = require('path');
const cors = require('cors');
const { Client } = require('pg')
 
const app = express();
const PORT = process.env.PORT || 5000;

const client = new Client({
  user: "delabpgsql",
  host: "delabpgsql.covrmisfuk0j.us-east-1.rds.amazonaws.com",
  database: "IACDevDB",
  password: "delabpgsqlpassword",
  port: 5432,
});
 
app.use(express.json());

client.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Connected to database");
  }
});

app.get("/api/persons/:PS_NO", (req, res) => {
  const psNo = req.params.PS_NO;

  console.log(psNo);
  const query=`SELECT * FROM public."dl_alloc_data_vw" WHERE "dl_alloc_data_vw"."PS NO" =$1 `;
    client.query( query, [psNo],(err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      if (result.rows.length > 0) {
        res.json(result.rows);
        console.log(result)
      } else {
        res.status(404).json({ error: "Person not found" });
        console.log(result)
      }
    }
  });
});


 
app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

















