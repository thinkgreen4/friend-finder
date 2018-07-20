// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
var friendList = require("../data/friends");

// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

module.exports = function(app) {

    app.get("/api/friends", function(request,response){
     
        return response.json(friendList)
     
    });

    app.post("/api/friends", function(request,response){
        console.log(request);
        var candidateScores, scoreArray, match
        candidateScores = request.body.scores;
        scoreArray = [];
        match = 0;
        
        
        for (i = 0; i < friendList.length; i ++) {
            var scoresDiff = 0;
            //run through scores to compare friends
            for(var k = 0; j < candidateScores.length; k++){
              scoresDiff += (Math.abs(parseInt(friendList[i].scores[k]) - parseInt(candidateScores[k])));
            }
      
            //push results into scoresArray
            scoresArray.push(scoresDiff);
          }
            for ( var i = 0; i < scoreArray.length; i++) {
                if(scoresArray[i] <= scoresArray[bestMatch]){
                    match = i;
            }
        }
        
        //grabs the new friend's scores to compare with friends in friendList array and run through friend list
       //gives scores a class and if the number of class matcches add point to a counter; then take the highest counter with math.max
       var hotDate = friendList[match];
    
       
    return response.json(hotDate);
    friendList.push(request.body);
    //    friendList.push(request.body);


    })
}
