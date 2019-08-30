import { Animal } from './Animal';

export class Bird extends Animal {
    constructor( hasLegs: boolean=true,
                 numberOfLegs: number=2,
                 hasHair: boolean=false,
                 hasScales: boolean=false,
                 canFly: boolean,
                 livesOn: string,
                ){
                    super(hasLegs, numberOfLegs, hasHair, hasScales, canFly, livesOn);
                    this.numberOfLegs=2;
                    this.hasHair=false;
                    this.hasScales=false;
                }   
}
 