function getUsername(email) {
    var username = '';

    // Only change code below this line
    switch (email) {
        case 'user1@mail.com':
            username = 'user1';
            break;
        case 'user2@mail.com':
            username = 'user2';
            break;
        case 'user3@mail.com':
            username = 'user3';
            break;
        case 'user4@mail.com':
            username = 'user4';
            break;
        case 'user5@mail.com':
            username = 'user5';
            break;
        case 'user6@mail.com':
            username = 'user6';
            break;
        default:
            username = 'undefined';
            break;
    }
    // Only change code above this line

    return username;
}

console.log(getUsername("user1@mail.com"));
console.log(getUsername("user2@mail.com"));
console.log(getUsername("user3@mail.com"));
console.log(getUsername("user4@mail.com"));
console.log(getUsername("user5@mail.com"));
console.log(getUsername("user6@mail.com"));
console.log(getUsername(""));
module.exports = getUsername;