import { Mammal } from './Mammal';

export class Bat extends Mammal {
    constructor(public hasLegs: boolean=true,
                public numberOfLegs: number=2,
                public hasHair: boolean=true,
                public hasScales: boolean=false,
                public canFly: boolean=true,
                public livesOn: string="caves",
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                }
}