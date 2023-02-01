const express = require('express');
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;


const app = express();

//middlewares
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//universal route to give index.html
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


fs.readFile('db/db.json', "utf8", (err,data) => {
    if (err) throw err
    const noteData = JSON.parse(data);


//API ROUTES
app.get('/api/notes/', (req,res) => {
    res.json(noteData);
    console.log(noteData);
});

app.post('/api/notes', (req,res) => {
  noteData.push(req.body);
  noteData.forEach(() => {
      note.id = i+1;
  });
  fs.writeFile('./db/db.json' , JSON.stringify(noteData), err => {
      if(err) throw err;
      return true;
  })
  console.log(noteData)
});


app.delete('/api/notes/:id', (req,res) => {
  const id = req.params.id;
  noteData.splice(id - 1,1);
  noteData.forEach(() => {
      obj.id = i+1;
  });
  
  fs.writeFile('./db/db.json' , JSON.stringify(newNotes), () => {
 res.json(noteData)
  });
  console.log(noteData)
});

});









//listen function to confirm server is live
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
