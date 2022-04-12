export type Quotes = {
  adviserName: string;
  created: number;
  expirationDate: number;
  investment: number;
  isAccepted: boolean;
  isAdvised: boolean;
  isCancelled: boolean;
  isExpired: boolean;
  isSeen: boolean;
  isSent: boolean;
  efficiency: number;
  paybackTime: number;
  reference: string;
  sentOn: number;
  solution: string;
  subsidy: number;
  items: Item[];
  energyDelta: Energy;
};

export type Energy = {
  electricityConsumption: number;
  electricityProduction: number;
  gasConsumption: number;
  gasFactor: number;
  emission: number;
  money: number;
};
export type Item = {
  amount: number;
  retailPrice: number;
  product: Product;
};

export type Product = {
  title: string;
  description: string | null;
  solution: string;
  category: string;
  priceUnit: string;
  tax: number;
  brand?: string | null;
  productWarranty?: number | null;
  pMax?: number;
};
