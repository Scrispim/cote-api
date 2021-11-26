export interface IProductRequestDTO{
    
    readonly id?: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category_id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
}