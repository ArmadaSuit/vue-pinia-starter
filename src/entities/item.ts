export type Item = {
  id: string;
  name: string;
  unitPrice: number;
};

export type CartItem = Item & { count: number };
