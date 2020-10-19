export default class Task {
    ID;
    Type;
    Time;
    Name;
    Day;
    constructor(ID, Type, Time, Name, Day) {
        this.ID = ID;
        this.Type = Type;
        this.Time = Time;
        this.Name = Name;
        this.Day = Day;
    }
}