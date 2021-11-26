export class Product {

    public readonly id: number;

    public name: string;
    public description: string;
    public price_new: number;
    public price_old: number;
    public quantity: number;
    public category_id: number;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deleted_at: Date;

    constructor(props: Omit<Product, 'id'>, id?: number){
        Object.assign(this, props);

        this.name = props[0].name;
        this.description = props[0].description;
        this.price_new = props[0].price_new;
        this.price_old = props[0].price_old;
        this.quantity = props[0].quantity;
        this.category_id = props[0].category_id;  
              
    }

}