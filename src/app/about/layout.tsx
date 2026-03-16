import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "О компании ЛТС - Авто из Европы",
  description: "ЛТС — команда специалистов с опытом в подборе и импорте автомобилей более 13 лет. Честность, прозрачность и профессионализм.",
  openGraph: {
    title: "О компании ЛТС - Авто из Европы",
    description: "ЛТС — команда специалистов с опытом в подборе и импорте автомобилей более 13 лет. Честность, прозрачность и профессионализм.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
