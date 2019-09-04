import { Thing } from './Thing';


export class Cat extends Thing {

    public breed: string;
    public color: string = 'orange';

    constructor () {
        super();
    }
}
