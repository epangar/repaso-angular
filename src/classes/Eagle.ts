import { Bird } from './Bird';

export class Eagle extends Bird {
    constructor(public hasLegs: boolean=true,
                public numberOfLegs: number=2,
                public hasHair: boolean=false,
                public hasScales: boolean=false,
                public canFly: boolean=true,
                public livesOn: string="Mountains",
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                }
}