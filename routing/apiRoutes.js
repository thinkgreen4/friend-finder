// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
var friendList = require("../data/friends");

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {

    app.get("/api/friends", function(request,response){
     
        return response.json(friendList)
     
    });

    app.post("/api/friends", function(request,response){
        console.log(request.body);
        var candidateScores, scoresArray, match
        candidateScores = request.body.scores;
        scoresArray = [];
        match = 0;
        
        
        for (i = 0; i < friendList.length; i ++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for(var k = 0; k < candidateScores.length; k++){
              scoresDiff += (Math.abs(parseInt(friendList[i].scores[k]) - parseInt(candidateScores[k])));
            }
      
            //push results into scoresArray
            scoresArray.push(scoresDiff);
          }
            for ( var i = 0; i < scoresArray.length; i++) {
                if(scoresArray[i] <= scoresArray[match]){
                    match = i;
            }
        }
        
        //grabs the new friend's scores to compare with friends in friendList array and run through friend list
       //gives scores a class and if the number of class matcches add point to a counter; then take the highest counter with math.max
       var hotDate = friendList[match];
    
       
       friendList.push(request.body);
        response.json(hotDate);
    //    friendList.push(request.body);


    })
}
