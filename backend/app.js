const express = require('express');

const app = express();

app.use(express.json());

// app.use((req, res, next) => {
//     console.log('Je suis là ;-)');
//     next();
//  });

app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin','*');
   res.setHeader('Access-Control-Allow-Origin','Origin');
   res.setHeader('Access-Control-Allow-Origin','GET, POST, PUT DELETE, PATCH, OPTIONS');
   next();
});
 
// app.use((req, res, next) => {
//    res.status(201);
//    next();
// });

app.post('/api/stuff', (req, res, next) => {
   console.log(req.body);
   res.status(201).json({
     message: 'Objet créé !'
   });
 });


// app.use((req, res) => {
//    res.json({ message: 'Votre requête a bien été reçue !!!' }); 
// });

app.get('/api/stuff', (req, res, next) => {
   const stuff = [
      {
      _id: '1234',
      title: 'Mon titre',
      description: 'Mes informations',
      imageUrl: 'http',
      price: 4900,
      userid: 'userid'
      },
      {
         _id: '12345',
         title: 'Mon titre',
         description: 'Mes informations',
         imageUrl: 'http',
         price: 4900,
         userid: 'userid'
         }
   ];
   res.status(200).json(stuff);
})

module.exports = app;