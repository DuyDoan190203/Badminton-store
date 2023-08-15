export interface Product{
  id: number
  name: string
  description: string
  price: number
  pictureUrl: string
  type?: string
  brand: string
  quantityInStock?: number
}
// Creating the Typescript interface to warn us about the OBJECT TYPE!

export interface ProductParams{
  orderBy: string;
  searchTerm?: string;
  types: string [];
  brands: string[];
  pageNumber: number;
  pageSize: number;
}