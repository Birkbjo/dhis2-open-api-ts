import type { Category } from './Category';
import type { CategoryOption } from './CategoryOption';

export type CategoryDimension = {
    category?: Category;
    categoryOptions?: Array<CategoryOption>;
};
