var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var articles ={
    art1:{
        title: "sesha's article one",
        head:"Art one",
        para:`<p>
                    Image result for computer science engineering
                    Computer Science engineering deals with design, implementation, and management of information system of both software & hardware processes. A computer scientist specializes in theory of computation and design of computational systems.
                  </p>
                
                <p>
                    Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data, or information, often in the context of a business or other enterprise. IT is considered a subset of information and communications technology (ICT).
                </p>
                <p>
                    Mechanical engineering is the discipline that applies engineering, physics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems. It is the branch of engineering that involves the design, production, and operation of machinery
                </p>`
    },
    
    art2:{
        title: "sesha's article two",
        head:"Art two",
        para:`<p>
                    Image result for computer science engineering
                    Computer Science engineering deals with design, implementation, and management of information system of both software & hardware processes. A computer scientist specializes in theory of computation and design of computational systems.
                  </p>
                
                <p>
                    Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data, or information, often in the context of a business or other enterprise. IT is considered a subset of information and communications technology (ICT).
                </p>
                <p>
                    Mechanical engineering is the discipline that applies engineering, physics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems. It is the branch of engineering that involves the design, production, and operation of machinery
                </p>`
    },
    
    art3:{
        title: "sesha's article three",
        head:"Art three",
        para:`<p>
                    Image result for computer science engineering
                    Computer Science engineering deals with design, implementation, and management of information system of both software & hardware processes. A computer scientist specializes in theory of computation and design of computational systems.
                  </p>
                
                <p>
                    Information technology (IT) is the application of computers to store, study, retrieve, transmit, and manipulate data, or information, often in the context of a business or other enterprise. IT is considered a subset of information and communications technology (ICT).
                </p>
                <p>
                    Mechanical engineering is the discipline that applies engineering, physics, and materials science principles to design, analyze, manufacture, and maintain mechanical systems. It is the branch of engineering that involves the design, production, and operation of machinery
                </p>`
    },
    
    
};
function createtemp(obj){
    var title= obj.title;
    var  head= obj.head;
    var para= obj.para;
    
    
    var htmlt=
    `<html>
     <head>
        <title> ${title}</title> 
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class ="container">
            <div>
               <a href="/">home</a>   
            </div>
            <hr/>
            <h3>
                ${head}
            </h3>
            <div>
              
            </div>
            <div>
                 ${para}
            </div>
        </div>
    </body>

</html>`;
return htmlt;
}
 
 
 
 

app.get('/article-one', function (req, res) {
  res.send(createtemp(articles[art1]));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artt-two.html'));
});

app.get('/article-three', function (req, res) {
 res.sendFile(path.join(__dirname, 'ui', 'artt-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
