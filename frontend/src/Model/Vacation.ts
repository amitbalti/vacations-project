class Vacation {
  public destination: string;
  public description: string;
  public startDate: Date;
  public endDate: Date;
  public price: number;
  public img: string;
  public vacationId: number;

  constructor(
    destination: string,
    description: string,
    startDate: Date,
    endDate: Date,
    price: number,
    img: string,
    vacationId: number
  ) {
    this.destination = destination;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.price = price;
    this.img = img;
    this.vacationId = vacationId;
  }
}

export default Vacation;
