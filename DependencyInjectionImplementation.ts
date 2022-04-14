import { IQuackBehavior } from "./IQuackBehavior"
import { QuackLoudlyStrategy } from "./QuackLoudlyStrategy";
import { QuackSilentlyStrategy } from "./QuackQuietlyStrategy";


// Implementation with Strategy Pattern and Dependency Injection
class Duck {
  private iQuack: IQuackBehavior;
  // private iFly: IFlyBehavior;
  // private iDisplay: IDisplayBehavior;


  constructor(
          iQuack: IQuackBehavior,
          // iFly: IFlyBehavior,
          // iDisplay: IDisplayBehavior
  ){
    this.iQuack = iQuack;
    // this.iFly = iFly;
    // this.iDisplay = iDisplay;
  }

}





const wildDuck = new Duck(new QuackLoudlyStrategy()
                      // ,new FlyLowStrategy()
                      // ,new RuffledFeatherStrategy()
)

const cityDuck = new Duck(new QuackSilentlyStrategy()

