import { IQuackBehavior } from "./IQuackBehavior";

export class QuackLoudlyStrategy implements IQuackBehavior{
  quack(): string {
    return "QUAAAAAAAACCCCCKKKKKKK";
  }
}