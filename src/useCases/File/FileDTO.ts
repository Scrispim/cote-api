export interface IFileRequestDTO{
    
    readonly id?: number;
    name: string;
    description: string;
    size: number;
    key: string;
    url: string;
    type: number;    
    product_id: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    deletedAt: Date;
}