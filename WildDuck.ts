import {Duck} from './Duck';

// Original kind of extending convention - Low Maintainability
export class WildDuck extends Duck{

  quack(): void {
    console.log("")
      console.log("Quack Loudly")
  }

  fly(): void {
      console.log("Fly in Groups")
  }
}