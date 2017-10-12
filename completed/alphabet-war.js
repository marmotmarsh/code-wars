/**
 * Created by Holden on 10/12/2017.
 */

/**
 * Alphabet War
 *
 *
 *
 * Introduction
 *
 * There is a war and nobody knows - the alphabet war!
 * There are two groups of hostile letters. The tension between left side letters and right side letters was too high
 * and the war began.
 *
 *
 *
 * Task
 *
 * Write a function that accepts fight string consists of only small letters and return who wins the fight. When the
 * left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's
 * fight again!.
 *
 * The left side letters and their power:
 *
 * w - 4
 * p - 3
 * b - 2
 * s - 1
 *
 * The right side letters and their power:
 *
 * m - 4
 * q - 3
 * d - 2
 * z - 1
 *
 * The other letters don't have power and are only victims.
 */

var left = {
    "w": 4,
    "p": 3,
    "b": 2,
    "s": 1,
}

var right = {
    "m": 4,
    "q": 3,
    "d": 2,
    "z": 1,
}

function alphabetWar(fight) {
    let leftScore = 0;
    let rightScore = 0;

    for (let i = 0, l = fight.length; i < l; i++) {
        leftScore += (left[fight[i]] === undefined ? 0 : left[fight[i]]);
        rightScore += (right[fight[i]] === undefined ? 0 : right[fight[i]]);
    }

    if (leftScore > rightScore) {
        return "Left side wins!";
    } else if (leftScore < rightScore) {
        return "Right side wins!";
    }

    return "Let's fight again!";
}

console.log(alphabetWar("z") , "Right side wins!" );
console.log(alphabetWar("zdqmwpbs") , "Let's fight again!" );
console.log(alphabetWar("zzzzs"), "Right side wins!" );
console.log(alphabetWar("wwwwww"), "Left side wins!" );