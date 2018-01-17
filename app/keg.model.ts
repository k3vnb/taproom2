



export class Keg {
  public done: boolean = false;
  constructor(
    public brand: string,
    public title: string,
    public price: number,
    public abv: number,
    public amount: number,
  ){ }
}
