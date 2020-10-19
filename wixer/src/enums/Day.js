export default class Task {
    id;
    date;

    constructor(date) {
        this.date = date;
        this.id = date.UTC();
    }
}