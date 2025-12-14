export type TProduct = {
  id: number;
  title: string;
  price: number | string;
  cat_prefix?: string;
  img: string;
  quantity?: number;
  max: number;
  isLiked?: boolean;
  isAuthenticated?: boolean;
};
