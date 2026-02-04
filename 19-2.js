/**
 * Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
 * 
 */

function smallestFriendName(names) {

    let smallName = [];
    let smallNameLength = Infinity; //infinity or names[0].length; je kono ekta use korle hobe
    // let smallNameLength = names[0].length;  // Start with first name's length
    for (const name of names) {

        if (name.length < smallNameLength) {
            smallNameLength = name.length;
            smallName = [name];
        }
        else if (name.length === smallNameLength) {
            smallName.push(name);
        }
    }
    return smallName;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const friendName = smallestFriendName(heights2);
console.log('The smallest name of my friends is: ', friendName);