export type CourseType =
  | "marketing"
  | "modeling"
  | "aesthetics"
  | "photography";

export type MenuItem = {
  label: string;
  descripcion: string;
  href: string;
  slug: CourseType;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};
