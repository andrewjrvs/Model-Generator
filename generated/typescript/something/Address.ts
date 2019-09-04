import { Thing } from './Thing';


export class Address extends Thing {

    public line1: string;
    public line2: string;
    public city: string;
    public state: string;
    public zip: string;

    constructor () {
        super();
    }
}
