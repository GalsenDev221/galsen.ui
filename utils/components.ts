export interface IComponent {
  image: string;
  name: string;
  count: number;
  alt: string;
  link: string;
}
export const componentsFakeData: IComponent[] = [
  {
    image: "/images/tables.png",
    name: "Tables",
    count: 3,
    alt: "Tables components",
    link: "/components/tables",
  },
  {
    image: "/images/cards.png",
    name: "Cards",
    count: 4,
    alt: "Cards components",
    link: "/components/cards",
  },
  {
    image: "/images/navbars.png",
    name: "Navbars",
    count: 3,
    alt: "Navbars components",
    link: "/components/navbars",
  },
  {
    image: "/images/footers.png",
    name: "Footers",
    count: 2,
    alt: "Footers components",
    link: "/components/footers",
  },
  {
    image: "/images/forms.png",
    name: "Forms",
    count: 3,
    alt: "Forms components",
    link: "/components/forms",
  },
  {
    image: "/images/buttons.png",
    name: "Butons",
    count: 2,
    alt: "Butons components",
    link: "/components/boutons",
  },
];
