var express = require("express");
var app = express();
const curl = new (require( 'curl-request' ))();

//x is COURSE_ID
var x = "238934";
 
curl.setHeaders([
    "Authorization: Basic b2s6b2tvaw==",
    "Accept: application/json, text/plain, */*"    
])
.get('https://www.udemy.com/api-2.0/courses/' + x)
.then(({statusCode, body, headers}) => {
    app.get("/", (req, res) => {
        res.render("title.ejs",{title: body.title});    
    })
        app.get("/curriculum", (req, res) => {
                 curl.setHeaders([
                "Authorization: Basic b2s6b2tvaw==",
                "Accept: application/json, text/plain, */*"    
            ])
            .get('https://www.udemy.com/api-2.0/courses/'+x+'/public-curriculum-items/?page=1')
            .then(({statusCode, body, headers}) => {
                res.render("ciri.ejs",{body: body});
                //console.log(body.results[0].title);
            })
            .catch((e) => {
                console.log(e);
            });
        });
        //FOR CIRICULLUM 
       
})
.catch((e) => {
    console.log(e);
});


app.listen(process.env.PORT, process.env.IP, () => {
    console.log("Server started");
})