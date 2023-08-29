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
        path: "/chung-chi-tieng-b1",
        title: "Tiếng anh B1-B2-C1",
      },
      {
        path: "/chung-chi-tieng-a2",
        title: "Tiếng anh A2",
      },
      {
        path: "/khung-nang-luc-6-bac",
        title: "Khung NLNN",
      },
    ],
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Khai giảng",
  },
  {
    path: "/lich-thi-evstep", // the url
    title: "Lịch thi",
  },
  {
    path: "https://a2b1b2c1.tienganhb1.com/Home", // the url
    title: "Vào thi thử",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];
