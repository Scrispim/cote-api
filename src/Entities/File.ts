import { stringify } from "querystring";

export class File {

    public readonly id: number;

    public name: string;
    public description: string;
    public size: number;
    public key: string;
    public url: string;
    public type: number;    
    public product_id: number;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deletedAt: Date;
    
    constructor(props: Omit<File, 'id'>, id?: number){
        Object.assign(this, props);
        this.name = props[0].name;
        this.description = props[0].description;
        this.size = props[0].size;
        this.key = props[0].key;
        this.url = props[0].url;
        this.type = props[0].type;
    }

}