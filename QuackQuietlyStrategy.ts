import { IQuackBehavior } from "./IQuackBehavior";

export class QuackSilentlyStrategy implements IQuackBehavior{
  quack(): string {
    return "quack";
  }
}