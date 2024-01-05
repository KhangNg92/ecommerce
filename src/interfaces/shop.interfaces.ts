export type TBaseValueFilter = string | string[] | (number | string)[];

export type IShopFilterState = {
  sortBy: string;
  category: string;
  popularBrand: string[];
  popularTag: string[];
  range: (number | string)[];
};
