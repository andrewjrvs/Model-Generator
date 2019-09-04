import { Address } from './Address';
import { Thing } from './Thing';


export class MyBasicTest extends Thing {

    public myNumArray: number[];
    public myNumArray2: number[];
    public myNumSet: number[];
    public myStringList: string[];
    public myInt: number;
    public myPrimInt: number;
    public myPrimBool: boolean;
    public myNestedList: Address[][];

    constructor () {
        super();
    }
}
