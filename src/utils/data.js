const getInitialData = () => [
  {
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    createdAt: "2022-04-14T04:27:34.572Z",
    archived: false,
  },
];

const getTitleProject = () => [
  {
    id: 1,
    title: "Project",
    description: "Testing banyak sekali",
  },
];

const getDataProject = () => [
  {
    id: 1,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
  },
  {
    id: 2,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
    details: {
      nama: "JAGOO",
      tentang: "matahari"
    }
  },
  {
    id: 3,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
  },
  {
    id: 4,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
  },
  {
    id: 5,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
  },
  {
    id: 6,
    title: "Project",
    description: "Testing banyak sekali",
    url: "/image/test.png",
  },
];

const showFormattedDate = (date) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString("id-ID", options);
};

export default { getInitialData, showFormattedDate, getTitleProject, getDataProject };
