import express from "express";
import bodyParser from "body-parser";
import multer from "multer";
import path from "path";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/uploads/')
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ 
    storage: storage,
    fileFilter: (req, file, cb) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new Error('Invalid file type'));
      }
    }
});

let array = [];
let id = 1;

function profile(name,pic){
    this.name = name;
    this.pic = pic;
}
let prof = null;

function obj(id, h, m, s, message) {
    this.id = id;
    this.h = h;
    this.m = m;
    this.s = s;
    this.message = message;
}




app.get("/",(req,res) => {
    res.render("signup.ejs");
});

app.get("/home",(req,res) => {
    res.render("home.ejs",{
        name: prof.name, 
        image: prof.pic, 
        p: array
    });
});

app.post("/home", upload.single('image'), (req, res) => {
    console.log('File:', req.file);
    console.log('Body:', req.body);

    const imagePath = req.file 
    ? `uploads/${req.file.filename}` 
    : 'images/profile.png';

    prof = new profile(
        req.body.name, 
        imagePath
    );
    console.log(prof.pic);
    res.render("home.ejs", { 
        name: prof.name, 
        image: prof.pic, 
        p: []
    });
});

app.get("/create",(req,res) => {
    if (!prof) {
        return res.redirect('/');
    }

    res.render("create.ejs",{
        name: prof.name, 
        image: prof.pic, 
        p: array
    });
});

app.post("/post",(req,res) => {
    let time = new Date();
    let post = new obj(id++,time.getHours(),time.getMinutes(),time.getSeconds(),req.body.message);
    array.push(post);
    res.render("home.ejs",{
        name: prof.name, 
        image: prof.pic, 
        p: array
    });

});

app.post("/edit",(req,res) => {
    let id = req.body.id;
    let foundPost = array.find(e => e.id == id);
    if(foundPost){
        res.render("edit.ejs",{
            name: prof.name, 
            image: prof.pic, 
            a: foundPost
        });
    };
});

app.post("/submit",(req,res) => {
    let id = req.body.id;
    let message = req.body.message;
    for(let i=0;i<array.length;i++){
        if(array[i].id == id){
            array[i].message = message;
        }
    }
    res.render("home.ejs",{
        name: prof.name, 
        image: prof.pic, 
        p: array
    });
});

app.listen(port,() => {});