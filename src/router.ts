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
        path: "/khung-nang-luc-6-bac",
        title: "Khung NLNN",
      },
      {
        path: "/chung-chi-tieng-a2",
        title: "Chứng chỉ A2",
      },
      {
        path: "/chung-chi-tieng-b1-b2",
        title: "Chứng chỉ B1-B2",
      },
      {
        path: "/chung-chi-tieng-c1",
        title: "Chứng chỉ C1",
      },
    ],
  },
  {
    path: "/lich-khai-giang", // the url
    title: "Lịch khai giảng",
  },
  {
    path: "/lich-thi-Vstep", // the url
    title: "Lịch thi",
  },
  {
    path: "https://a2b1b2c1.tienganhb1.com/Home", // the url
    title: "Đăng ký thi thử",
  },
  {
    path: "/tin-tuc", // the url
    title: "Tin tức", // view rendered
  },
];
