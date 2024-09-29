class Ironman {
    constructor(realName = "Tony Stark") {
        this.realName = realName;
    }
    revealIdentity() {
        return this.realName;
    }
}

class IronmanMark54 extends Ironman {
    constructor(realName, suitName) {
        super(realName);
        this.suitName = suitName;
    }
    revealSuit() {
        return this.suitName;
    }
}

let stark = new IronmanMark54("", "Mark 54");
console.log(stark.revealIdentity());









// class Ironman {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }

//     getPower() {
//         return this.power;
//     }

//     setPower(power) {
//         this.power = power;
//     }
// }

// let stark = new Ironman("Tony Stark", "Genius, Billionaire, Playboy, Philanthropist");

// console.log(stark.getPower());