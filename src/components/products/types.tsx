export function decodeSlug(value: string): string {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  quantity: number | string;
  unit: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;

  category: {
    id?: string;
    name: string;
    slug: string;
    description?: string | null;
    is_active?: boolean;
  }[];

  current_prices: {
    id: string;
    slug?: string;
    product_id?: string;
    city_id?: string;
    price: number | string;
    updated_at: string;
    updated_by?: string | null;
    city: {
      id?: string;
      name: string;
      slug: string;
    };
  }[];

  price_history: {
    id: string;
    product_id?: string;
    city_id?: string;
    price: number | string;
    source_submission_id?: string | null;
    approved_by?: string;
    created_at: string;
    city: {
      id?: string;
      name: string;
      slug: string;
    };
    approved_by_user?: {
      id?: string;
      name: string;
    } | null;
  }[];
}







