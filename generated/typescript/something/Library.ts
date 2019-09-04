import { Book } from './Book';
import { Building } from './Building';


export class Library extends Building {

    public books: Book[];

    constructor () {
        super();
    }
}
