



export class Keg {
  public done: boolean = false;
  constructor(
    public brand: string,
    public title: string,
    public price: number,
    public ABV: number,
    public amount: number,
  ){ }
}
