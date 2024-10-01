export const GIFTS = [
  {
    _id: "966",
    title: "Книги об Искусстве",
    description:
      "Хочу собрать свою серию книг на тему искусства! Есть прекрасные англоязычные издания, которые описывают историю создания некоторых картин, а также предают качественное изображение. Полистаем вместе? По ссылке можно найти пример интересных изданий. Мне очень симпатичны Тициан, Босх, Кало, Поп арт, Климт, Ботичели, Монет и Пре рафаелистика.",
    key: "BOOK-",
    link: "https://officetonmarket.by/about/brands/taschen/?utm_source=fb&utm_medium=cpc&utm_campaign=taschen&utm_content=traffic_story&utm_term=smm&fbcl_id=PAAaaA__XHTT8QUfY2O-qV4gAe6-HPFvsw39AwgfY2a4ea_dPoIClENExTTrU_aem_AaFNxpg_uBCwsbuCTUrcbP3l4ZjoPG6kdGKTEqurmDNwnWFaB2yhpV6W8E-JqcNLKfpU4ZfM1IOKfOkbeSJ301zE",
    img: "https://i.pinimg.com/564x/44/b8/cd/44b8cd43e553bf1684f2e26b84621f59.jpg",
    isReserved: false,
  },
  {
    _id: "183",
    title: "Сертификат на сплит теннис",
    description:
      "Очень хочу попробовать поиграть в Теннис. Для этого нужен корт, тренер с ракетками и кто-то ещё. В Теннисе можно полюбить Теннис (шутка из тик-ток, простите). Из самых интересных клубов: Макси клаб, Yestoday, Аква минск, Лайф сити.",
    key: "TENNIS-",
    img: "https://i.pinimg.com/736x/0d/2c/5b/0d2c5b650c12baf7224923db4259e71f.jpg",
    isReserved: false,
  },
  {
    _id: "975",
    title: "Духи Carolina Herrera",
    description:
      "Очень классные духи! Но честно говоря, весьма дорогие. Поэтому, можно обратиться к сертификату в КРАВТ или любой другой магазин парфюмерии.",
    key: "PERFUME-",
    link: "https://goldapple.ru/24863300003-good-girl",
    img: "https://i.pinimg.com/736x/5a/af/db/5aafdbf3c684d8f330ca2a2016c13cf2.jpg",
    isReserved: false,
  },
  {
    _id: "358",
    title: "Столовые приборы",
    description:
      "У нас дома есть 2 ложки, 3 вилки и 2 ножа. Всё это тщательно собиралось все три года жизни в доме. Пора бы обновиться! Набор на 6 персон, арт на ВБ: 224515625. Сейчас нет в наличии, но может будет что-то похожее.",
    key: "KITCH-",
    img: "https://i.pinimg.com/564x/38/ef/54/38ef547876f5a096515acb188218cd03.jpg",
    isReserved: false,
  },
  {
    _id: "179",
    title: "Плёнка",
    description:
      "Обожаю плёночные фото!!! Каждый раз покупаю плёнку в Фотосквоте. Обычно это Kodak-400, но можете спросить на месте и выбрать на свой вкус.",
    key: "FILM-",
    link: "https://www.instagram.com/phsquat/",
    img: "https://i.pinimg.com/564x/ee/84/e7/ee84e7f3ce1f502fa9c601cd8751f273.jpg",
    isReserved: false,
  },
  {
    _id: "268",
    title: "Чехол на ноутбук",
    description:
      "Сапожник без сапог. Мой чехол изрядно подтаскался за 5 лет использования. Очень хотела бы попробовать что-то новое. Ноутбук MacBook Pro 3-inch, 2020",
    key: "NOTE-",
    link: "https://www.kkspace.ru/product/pletenyy-keys-dlya-macbook",
    img: "https://i.pinimg.com/564x/5b/fe/6b/5bfe6b7344fe69efb9959bc9b7f903fa.jpg",
    isReserved: false,
  },
  {
    _id: "965",
    title: "Сертификат Zara Home",
    description:
      "Нет, я не понимаю женщин, которым это всё не надо! А мне надо! Я жить без этого не могу! Классика жанра в виде сертификата в Zara Home!",
    key: "ZARA-",
    img: "https://static.zarahome.net/8/contentEcom/dto_imagen/distribu_idoras/mixta/mobile/1089015/1089525.jpg?t=20240927020707&impolicy=zarahome-itxmediumlow&imw_idth=1082&imformat=chrome",
    isReserved: false,
  },
  {
    _id: "543",
    title: "Украшения",
    description:
      "Сейчас в моде кафы, крупные кольца и минималистичные браслеты/подвески. По ссылке будут примеры того, что может быть актуально.",
    key: "JWE-",
    link: "https://www.instagram.com/p/C-lH-3SMlTf/",
    img: "https://i.pinimg.com/736x/2b/b5/b7/2bb5b780625d126b37da3651b49e35af.jpg",
    isReserved: false,
  },
  {
    _id: "123",
    title: "Мебель",
    description: "Когда-нибудь я обязательно соберусь с силами и обустрою кабинет! Но для этого нужны диван, рабочий стол, рабочее кресло и много много много всего ещё. Чисто для разнообразия, сертификат в мебельный или любой другой магазин дял домашнего обустройства.",
    key: "FLW-",
    img: "https://i.pinimg.com/564x/39/30/d4/3930d4235864284ae9c4626fb9f4bdf3.jpg",
  },
];

export interface IGift {
  _id: string;
  title: string;
  description: string;
  key: string;
  link?: string;
  img: string;
  isReserved?: boolean;
}
