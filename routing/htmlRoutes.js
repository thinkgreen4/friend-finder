// A GET Route to /survey which should display the survey page.
var path = require("path");
// A default, catch-all route that leads to home.html which displays the home page.

module.exports= function(app){

    app.get("/survey", function(request,response){
        console.log(request.user);
        response.sendFile(path.join(__dirname , "/../public/survey.html"));
    });

    app.get("*", function(request,response){
        response.sendFile(path.join(__dirname ,"/../public/home.html"));
    });
}