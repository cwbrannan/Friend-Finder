var matches = [];


function NewFriend(name, photo, scores) {

    this.name = name;
    this.photo = photo;
    this.scores = scores;

}

function createFriends() {

    var name = ["mike", "chris", "jon", "william", "josh", "brad", "brandon", "lisa", "adam", "jamie", "mark"];
    var pics = ["mike.jpg", "chris.png", "jon.jpeg", "william.jpg", "josh.png", "brad.jpg", "brandon.jpg", "lisa.png", "adam.png", "jamie.jpg", "mark.png"]
    var theScores = [1, 2, 3, 4, 5];
    var randomScores = [];


    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {

            var randomScore = theScores[Math.floor(Math.random() * theScores.length)]
            randomScores.push(randomScore);
        }


        var newFriend = new NewFriend(name[i], pics[i], randomScores);
        matches.push(newFriend);
        randomScores = [];

    }

    // console.log(matches);

}

createFriends();


function UserFriend(name, photo, scores) {
    var newFriend = new NewFriend(name, photo, scores);
    matches.push(newFriend);
}

module.exports = {
    matches: matches,
    UserFriend: UserFriend

}