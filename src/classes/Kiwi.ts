import { Bird } from './Bird';

export class Kiwi extends Bird {
    constructor(public hasLegs: boolean=true,
                public numberOfLegs: number=2,
                public hasHair: boolean=false,
                public hasScales: boolean=false,
                public canFly: boolean=false,
                public livesOn: string="NZ",
                ){
                super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                }
}