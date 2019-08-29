import { Reptile } from './Reptile';

export class Snake extends Reptile {
    constructor(public hasLegs: boolean=false,
        public numberOfLegs: number=0,
        public hasHair: boolean=false,
        public hasScales: boolean=true,
        public canFly: boolean=false,
        public livesOn: string="grass",
        ){
        super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
        
    }
    
}