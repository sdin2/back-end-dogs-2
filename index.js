const server = require('./src/app.js');
const { conn, Temp } = require('./src/db.js');
const axios = require("axios");
const PORT = 5432

let allTemperamentsDb=async()=>{
  const temperamentosDb =await axios.get("https://api.thedogapi.com/v1/breeds")
  let temperamentosDbalone= temperamentosDb.data.map((e)=>e.temperament)
  let temperament=[]
      for (let i = 0; i < temperamentosDbalone.length; i++) {
          if(temperamentosDbalone[i]){
          temperament.push( temperamentosDbalone[i].split(","))
      }
          else continue        
      }
  temperament=temperament.flat(Infinity)
  console.log(temperament)
  temperament.forEach(el => {
      Temp.findOrCreate({
         where: {name : el.trim()}
     })
  })
  
  console.log("temperamentos agregados a la base de datos")
  }

// Syncing all the models at once.
conn.sync().then(() => {
  server.listen(PORT, () => {
    allTemperamentsDb()
    console.log('%s listening at port',PORT); // eslint-disable-line no-console
  });
});