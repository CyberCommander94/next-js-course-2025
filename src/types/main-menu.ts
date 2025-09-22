export type MenuItem = {
    id: string,
    title: string;
    href: string;
    description?: string;
    children?: MenuItem[];
};
