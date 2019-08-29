import { Animal } from './Animal';

export class Bird extends Animal {
    constructor(public hasLegs: boolean=true,
                public numberOfLegs: number=2,
                public hasHair: boolean=false,
                public hasScales: boolean=false,
                public canFly: boolean=canFly,
                public livesOn: string =livesOn,
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                }   
}
 