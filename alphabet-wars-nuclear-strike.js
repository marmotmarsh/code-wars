/**
 * Created by Holden on 10/12/2017.
 */

/**
 * Alphabet Wars - Nuclear Strike
 *
 *
 *
 * Introduction
 *
 * There is a war and nobody knows - the alphabet war!
 * The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them.
 *
 *
 *
 * Task
 *
 * Write a function that accepts battlefield string and returns letters that survived the nuclear strike.
 *
 * The battlefield string consists of only small letters, #,[ and ].
 *
 * The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters
 * inside the shelter.
 *
 * The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all
 * letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect
 * such scenario too often ;-P ).
 *
 * The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all
 * letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter
 * (or beginning/end of battlefield). The below samples make it clear for you.
 *
 */

function alphabetWar(battlefield) {
    let finalLetters = "";
    let nukeLocations = [];
    let shelterLocations = [];

    for (let i = 0; i < battlefield.length; i++) {
        let char = battlefield[i];
        if (char === "#") {
            nukeLocations.push(i);
        } else if (char === "[" || char === "]") {
            shelterLocations.push(i);
        }
    }

    if (nukeLocations.length === 0) {
        return battlefield.replace(/\[(.*?)\]/g,"$1");
    } else if (shelterLocations.length === 0) {
        return "";
    }

    let preNukes = 0;
    let postNukes = 0;
    let nukeIndex = 0;

    for (let i = 0; i <= shelterLocations.length; i += 2) {
        preNukes = postNukes;
        postNukes = 0;

        let shelterEnd = (i === 0 ? -1 : shelterLocations[i-1]);
        let shelterStart = (i === shelterLocations.length ? battlefield.length : shelterLocations[i]);

        while (nukeIndex < nukeLocations.length) {
            if (nukeLocations[nukeIndex] < shelterStart) {
                postNukes++;
                nukeIndex++;
            } else {
                break;
            }
        }

        if (preNukes + postNukes < 2 && shelterEnd !== -1) {
            finalLetters += battlefield.slice(shelterLocations[i-2]+1, shelterEnd);
        }
    }

    return finalLetters;
}

console.log(alphabetWar('abde[fgh]ijk'), 'abdefghijk');
console.log(alphabetWar('ab#de[fgh]ijk'), 'fgh');
console.log(alphabetWar('ab#de[fgh]ij#k'), '');
console.log(alphabetWar('##abde[fgh]ijk'), '');
console.log(alphabetWar('##abde[fgh]'), '');
console.log(alphabetWar('##abcde[fgh]'), '');
console.log(alphabetWar('abcde[fgh]'), 'abcdefgh');
console.log(alphabetWar('##abde[fgh]ijk[mn]op'), 'mn');
console.log(alphabetWar('#abde[fgh]i#jk[mn]op'), 'mn');
console.log(alphabetWar('[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#'), 'abijk');
console.log(alphabetWar('[a]#[b]#[c]'), 'ac');
console.log(alphabetWar('[a]#b#[c][d]'),'d');
console.log(alphabetWar('[a][b][c]'), 'abc');
console.log(alphabetWar('##a[a]b[c]#'),'c');