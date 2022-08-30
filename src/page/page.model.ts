export enum PageLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export class PageModel {
    _id: string;
    firstLevelCategory: PageLevelCategory;
    secondLeveCategory: string;
    title: string;
    hh?: {
        count: number;
        juniorSalary: number;
        middleSalary: number;
        seniorSalary: number;
    };
    advantages: {
        title: string;
        description: string
    }[];
    seoText: string;
    tagsTitle: string[];
    tags: string[];
}
