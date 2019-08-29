import { Reptile } from './Reptile';

export class Crocodile extends Reptile {
    constructor(public hasLegs: boolean=true,
                public numberOfLegs: number=4,
                public hasHair: boolean=false,
                public hasScales: boolean=true,
                public canFly: boolean=false,
                public livesOn: string="water",
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                }
}

