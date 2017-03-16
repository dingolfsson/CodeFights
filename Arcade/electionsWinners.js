function electionsWinners(votes, k) {

    // Find the max value in array (votes)
    var max = Math.max(...votes);

    // Find how many in votes have the max value
    var numMax = votes.filter(i => i == max).length;

    // If there are no votes left and only 1 person has most votes
    // return 1 (1 person has most votes)
    // return 0 (more than 1 person has most votes, noone wins)
    if (k == 0) return (numMax == 1 ? 1 : 0);

    // Return how many can with if they get all the votes
    return votes.filter(i => i + k > max).length;

}
