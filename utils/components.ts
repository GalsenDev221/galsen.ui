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
    link: "/public/components/tables",
  },
  {
    image: "/images/navbars.png",
    name: "Navbars",
    count: 3,
    alt: "Navbars components",
    link: "/public/components/navbars",
  },
  {
    image: "/images/cards.png",
    name: "Cards",
    count: 3,
    alt: "Cards components",
    link: "/public/components/cards",
  },
  {
    image: "/images/footers.png",
    name: "Footers",
    count: 2,
    alt: "Footers components",
    link: "/public/components/footers",
  },
  {
    image: "/images/forms.png",
    name: "Forms",
    count: 3,
    alt: "Forms components",
    link: "/public/components/forms",
  },
  {
    image: "/images/buttons.png",
    name: "Buttons",
    count: 2,
    alt: "buttons components",
    link: "/public/components/buttons",
  },
];
