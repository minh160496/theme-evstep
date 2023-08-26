export const menus = [
  {
    path: "/", // the url
    title: "Trang chủ",
  },

  {
    path: "#", // the url
    title: "Chứng chỉ",
    childs: [
      {
        path: "chung-chi-tieng-b1",
        title: "Tiếng anh B1-B2-C1",
      },
      {
        path: "chung-chi-tieng-a2",
        title: "Tiếng anh A2",
      },
      {
        path: "#",
        title: "Khung NLNN",
      },
    ],
  },
  {
    path: "#", // the url
    title: "Bồi dưỡng",
  },
  {
    path: "#", // the url
    title: "Lịch thi",
  },
  {
    path: "#", // the url
    title: "Vào thi thử",
  },
  {
    path: "#", // the url
    title: "Tin tức", // view rendered
  },
];
