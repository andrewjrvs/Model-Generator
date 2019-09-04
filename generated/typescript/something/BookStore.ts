import { Book } from './Book';
import { Building } from './Building';


export class BookStore extends Building {

    public books: Book[];

    constructor () {
        super();
    }
}
