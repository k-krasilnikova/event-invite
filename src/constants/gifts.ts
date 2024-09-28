export const GIFTS = [
  {
    id: "966",
    title: "Книги об Искусстве",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "BOOK-",
    link: "",
    img: "https://i.pinimg.com/564x/44/b8/cd/44b8cd43e553bf1684f2e26b84621f59.jpg",
    isReserved: false,
  },
  {
    id: "183",
    title: "Сертификат на сплит теннис",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "TENNIS-",
    link: "",
    img: "https://i.pinimg.com/736x/0d/2c/5b/0d2c5b650c12baf7224923db4259e71f.jpg",
    isReserved: false,
  },
  {
    id: "975",
    title: "Духи Каролина Херрера",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "PERFUME-",
    link: "",
    img: "https://i.pinimg.com/736x/5a/af/db/5aafdbf3c684d8f330ca2a2016c13cf2.jpg",
    isReserved: false,
  },
  {
    id: "358",
    title: "Столовые приборы",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "KITCH-",
    link: "",
    img: "https://i.pinimg.com/564x/38/ef/54/38ef547876f5a096515acb188218cd03.jpg",
    isReserved: false,
  },
  {
    id: "179",
    title: "Плёнка",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "FILM-",
    link: "",
    img: "https://i.pinimg.com/564x/ee/84/e7/ee84e7f3ce1f502fa9c601cd8751f273.jpg",
    isReserved: false,
  },
  {
    id: "268",
    title: "Чехол на ноутбук",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "NOTE-",
    link: "",
    img: "https://i.pinimg.com/564x/5b/fe/6b/5bfe6b7344fe69efb9959bc9b7f903fa.jpg",
    isReserved: false,
  },
  {
    id: "965",
    title: "Сертификат Zara Home",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: "ZARA-",
    link: "",
    img: "https://static.zarahome.net/8/contentEcom/dto_imagen/distribuidoras/mixta/mobile/1089015/1089525.jpg?t=20240927020707&impolicy=zarahome-itxmediumlow&imwidth=1082&imformat=chrome",
    isReserved: false,
  },
  {
    id: "543",
    title: "Сертификат украшения",
    description:
      "Монет, Босх, Кало, Поп арт, Климт, Ботичели, Тициан, Пре рафаелистика",
    key: " JWE-",
    link: "",
    img: "https://i.pinimg.com/736x/2b/b5/b7/2bb5b780625d126b37da3651b49e35af.jpg",
    isReserved: false,
  },
  {
    id: "123",
    title: "Цветы",
    description: "Цветы",
    key: " FLW-",
    link: "",
    img: "https://i.pinimg.com/564x/39/30/d4/3930d4235864284ae9c4626fb9f4bdf3.jpg",
    isReserved: true,
  },
];

export interface IGift {
  id: string;
  title: string;
  description: string;
  key: string;
  link: string;
  img: string;
  isReserved: boolean;
}