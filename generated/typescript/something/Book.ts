import { Person } from './Person';
import { Thing } from './Thing';


export class Book extends Thing {

    public genres: string[];
    public pageLength: number = 25;
    public isbn: string;
    public author: Person;
    public price: number;

    constructor () {
        super();
    }
}
