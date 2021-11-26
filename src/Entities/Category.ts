export class Category {

    public readonly id: number;

    public description: string;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;
    public readonly deleted_at: Date;

    constructor(props: Omit<Category, 'id'>, id?: number){
        Object.assign(this, props);
        this.description = props[0].description
        
    }

}