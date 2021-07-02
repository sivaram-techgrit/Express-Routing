export interface BaseCustomer {
    name: string;    
    image: string;
  }
  
  export interface Customer extends BaseCustomer {
    id: number;
  }