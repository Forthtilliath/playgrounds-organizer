export const endpoint = "https://codepen.io/forthtilliath/";
export const pathImage = "./assets/projects/";
export const tags = [
  "layout",
  "flex",
  "footer",
  "defi",
  "css",
  "colors",
  "js",
  "select",
  "customElements",
  "array",
  "button",
  "radio",
  "grid",
  "game",
] as const;

export const codepens: Codepen[] = [
  {
    id: 1,
    tags: ["layout", "footer"],
    src: "pen/zYZgGrV?editors=1100",
    title: "Footer fixed without flex",
  },
  {
    id: 2,
    tags: ["layout", "flex", "footer"],
    src: "pen/NWOMKLV?editors=1100",
    title: "Footer fixed with flex",
  },
  {
    id: 3,
    tags: ["defi", "footer"],
    src: "full/rNmBWgB",
    title: "Défi Footer",
  },
  {
    id: 4,
    tags: ["css", "colors"],
    src: "full/ExdLxJe",
    title: "All Named CSS Colors",
  },
  {
    id: 5,
    tags: ["js", "select", "customElements"],
    src: "pen/oNWjPBz?editors=1010",
    title: "Select : customElements with extends class",
  },
  {
    id: 6,
    tags: ["js", "array", "select"],
    src: "pen/xxdwarZ?editors=1010",
    title: "Array to Select",
  },
  {
    id: 7,
    tags: ["css", "button", "radio"],
    src: "pen/PomZVMM?editors=1100",
    title: "Bordures bouton radio",
  },
  {
    id: 8,
    tags: ["defi", "grid", "game"],
    src: "pen/VwbzzWm?editors=0011",
    title: "Défi Grid : Memory",
  },
];