const db = require('./models')
const bcrypt = require('bcryptjs')


const citiesData = [
  {
    name: "London",
    country: "United Kingdom",
    image_url: ""
  },
  {
    name: "London",
    country: "United Kingdom",
    image_url: ""
  },
  {
    name: "San Francisco",
    country: "United Kingdom",
    image_url: ""
  }
];

const usersData = [
  {
    name: "Test Person",
    username: "test",
    email: "test@test.com",
    password: "1234",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    city: "Big Sur"
  },
  {
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    password: "1234",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    city: "San Diego"
  },
  {
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    password: "1234",
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    city: "Sacramento"
  },
  {
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    password: "1234",
    phone: "1-463-123-4447",
    website: "ramiro.info",
    city: "Fairfield"
  },
  {
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    password: "1234",
    phone: "493-170-9623 x156",
    website: "kale.biz",
    city: "Cypress"
  },
  {
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    password: "1234",
    phone: "(254)954-1289",
    website: "demarco.info",
    city: "Fountain Valley"
  },
  {
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    password: "1234",
    phone: "1-477-935-8478 x6430",
    website: "ola.org",
    city: "Big Sur"
  },
  {
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    password: "1234",
    phone: "210.067.6132",
    website: "elvis.io",
    city: "Monterey"
  },
  {
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    password: "1234",
    phone: "586.493.6943 x140",
    website: "jacynthe.com",
    city: "Pacific Grove"
  },
  {
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    password: "1234",
    phone: "(775)976-6794 x41206",
    website: "conrad.com",
    city: "Carmel"
  },
  {
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    password: "1234",
    phone: "024-648-3804",
    website: "ambrose.net",
    city: "Sand City"
  }
];

const postsData = [
  {
    title:
      "sunt aut facere repellat provent occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    title: "qui est esse",
    body:
      "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure voluptatem occaecati omnis eligendi aut ad voluptatem doloribus vel accusantium quis pariatur molestiae porro eius odio et labore et velit aut"
  },
  {
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provent rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit"
  },
  {
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque"
  },
  {
    title: "dolorem eum magni eos aperiam quia",
    body:
      "ut aspernatur corporis harum nihil quis provent sequi mollitia nobis aliqu molestiae perspiciatis et ea nemo ab reprehenderit accusantium quas voluptate dolores velit et doloremque molestiae"
  },
  {
    title: "magnam facilis autem",
    body:
      "dolore placeat quibusdam ea quo vitae magni quis enim qui quis quo nemo aut saepe quem repellat excepturi ut quia sunt ut sequi eos ea sed quas"
  },
  {
    title: "dolorem dolore est ipsam",
    body:
      "dignissimos aperiam dolorem qui eum facilis quibusdam animi sint suscipit qui sint possimus cum quaerat magni maiores excepturi ipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body:
      "consectetur animi nesciunt iure dolore enim quia ad veniam autem ut quam aut nobis et est aut quod aut provent voluptas autem voluptas"
  },
  {
    title: "optio molestias  quia eum",
    body:
      "quo et expedita modi cum officia vel magni doloribus qui repudiandae vero nisi sit quos veniam quod sed accusamus veritatis error"
  },
  {
    title: "et ea vero quia laudantium autem",
    body:
      "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus accusamus in eum beatae sit vel qui neque voluptates ut commodi qui incunt ut animi commodi"
  },
  {
    title: "in quibusdam tempore odit est dolorem",
    body:
      "itaque  aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia  voluptatem incunt ea est distinctio odio"
  },
  {
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body:
      "aut dicta possimus sint mollitia voluptas commodi quo doloremque iste corrupti reiciendis voluptatem eius rerum sit cumque quod eligendi laborum minima perferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    title: "voluptatem eligendi optio",
    body:
      "fuga et accusamus dolorum perferendis illo voluptas non doloremque neque facere ad qui dolorum molestiae beatae sed aut voluptas totam sit illum"
  },
  {
    title: "eveniet quod temporibus",
    body:
      "reprehenderit quos placeat velit minima officia dolores impedit repudiandae molestiae nam voluptas recusandae quis delectus officiis harum fugiat vitae"
  },
  {
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body:
      "suscipit nam nisi quo aperiam aut asperiores eos fugit maiores voluptatibus quia voluptatem quis ullam qui in alias quia est consequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    title: "fugit voluptas sed molestias voluptatem provent",
    body:
      "eos voluptas et aut odit natus earum aspernatur fuga molestiae ullam deserunt ratione qui eos qui nihil ratione nemo velit ut aut  quo"
  },
  {
    title: "voluptate et itaque vero tempora molestiae",
    body:
      "eveniet quo quis laborum totam consequatur non dolor ut et est repudiandae est voluptatem vel debitis et magnam"
  },
  {
    title: "adipisci placeat illum aut reiciendis qui",
    body:
      "illum quis cupitate provent sit magnam ea sed aut omnis veniam maiores ullam consequatur atque adipisci quo iste expedita sit quos voluptas"
  },
  {
    title: "doloribus ad provent suscipit at",
    body:
      "qui consequuntur ducimus possimus quisquam amet similique suscipit porro ipsam amet eos veritatis officiis exercitationem vel fugit aut necessitatibus totam omnis rerum consequatur expedita quem cumque explicabo"
  },
  {
    title: "asperiores ea ipsam voluptatibus modi minima quia sint",
    body:
      "repellat aliqu praesentium dolorem quo sed totam minus non itaque nihil labore molestiae sunt dolor eveniet hic recusandae veniam tempora et tenetur expedita sunt"
  },
  {
    title: "dolor sint quo a velit explicabo quia nam",
    body:
      "eos qui et ipsum ipsam suscipit aut sed omnis non odio expedita earum mollitia molestiae aut atque rem suscipit nam impedit esse"
  },
  {
    title: "maxime  vitae nihil numquam",
    body:
      "veritatis unde neque eligendi quae quod architecto quo neque vitae est illo sit tempora doloremque fugit quod et et vel beatae sequi ullam sed tenetur perspiciatis"
  },
  {
    title: "autem hic labore sunt dolores incunt",
    body:
      "enim et ex nulla omnis voluptas quia qui voluptatem consequatur numquam aliquam sunt totam recusandae  dignissimos aut sed asperiores deserunt"
  },
  {
    title: "rem alias distinctio quo quis",
    body:
      "ullam consequatur ut omnis quis sit vel consequuntur ipsa eligendi ipsum molestiae et omnis error nostrum molestiae illo tempore quia et distinctio"
  },
  {
    title: "est et quae odit qui non",
    body:
      "similique esse doloribus nihil accusamus omnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus perspiciatis cum ut laudantium omnis aut molestiae vel vero"
  },
  {
    title: "quasi  et eos tenetur aut quo autem",
    body:
      "eum sed dolores ipsam sint possimus debitis occaecati debitis qui qui et ut placeat enim earum aut odit facilis consequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
  },
  {
    title: "delectus ullam et corporis nulla voluptas sequi",
    body:
      "non et quaerat ex quae ad maiores maiores recusandae totam aut blanditiis mollitia quas illo ut voluptatibus voluptatem similique nostrum eum"
  },
  {
    title: "iusto eius quod necessitatibus culpa ea",
    body:
      "odit magnam ut saepe sed non qui tempora atque nihil accusamus illum doloribus illo dolor eligendi repudiandae odit magni similique sed cum maiores"
  },
  {
    title: "a quo magni similique perferendis",
    body:
      "alias dolor cumque impedit blanditiis non eveniet odio maxime blanditiis amet eius quis tempora quia autem rem a provent perspiciatis quia"
  },
  {
    title: "ullam ut quem  aut vel consequuntur",
    body:
      "debitis eius sed quibusdam non quis consectetur vitae impedit ut qui consequatur sed aut in quem sit nostrum et maiores adipisci atque quaerat voluptatem adipisci repudiandae"
  },
  {
    title: "doloremque illum aliqu sunt",
    body:
      "deserunt eos nobis asperiores et hic est debitis repellat molestiae optio nihil ratione ut eos beatae quibusdam distinctio maiores earum voluptates et aut adipisci ea maiores voluptas maxime"
  },
  {
    title: "qui explicabo molestiae dolorem",
    body:
      "rerum ut et numquam laborum odit est sit  qui sint in quasi tenetur tempore aperiam et quaerat qui in rerum officiis sequi cumque quod"
  },
  {
    title: "magnam ut rerum iure",
    body:
      "ea velit perferendis earum ut voluptatem voluptate itaque iusto totam pariatur in nemo voluptatem voluptatem autem magni tempora minima in est distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
  },
  {
    title: " nihil consequatur molestias animi provent",
    body:
      "nisi error delectus possimus ut eligendi vitae placeat eos harum cupitate facilis reprehenderit voluptatem beatae modi ducimus quo illum voluptas eligendi et nobis quia fugit"
  },
  {
    title: "fuga nam accusamus voluptas reiciendis itaque",
    body:
      "ad mollitia et omnis minus architecto odit voluptas doloremque maxime aut non ipsa qui alias veniam blanditiis culpa aut quia nihil cumque facere et occaecati qui aspernatur quia eaque ut aperiam inventore"
  },
  {
    title: "provent vel ut sit ratione est",
    body:
      "debitis et eaque non officia sed nesciunt pariatur vel voluptatem iste vero et ea numquam aut expedita ipsum nulla in voluptates omnis consequatur aut enim officiis in quam qui"
  },
  {
    title: "explicabo et eos deleniti nostrum ab  repellendus",
    body:
      "animi esse sit aut sit nesciunt assumenda eum voluptas quia voluptatibus provent quia necessitatibus ea rerum repudiandae quia voluptatem delectus fugit aut  quia ratione optio eos iusto veniam iure"
  },
  {
    title: "eos dolorem iste accusantium est eaque quam",
    body:
      "corporis rerum ducimus vel eum accusantium maxime aspernatur a porro possimus iste omnis est in deleniti asperiores fuga aut voluptas sapiente vel dolore minus voluptatem incunt ex"
  },
  {
    title: "enim quo cumque",
    body:
      "ut voluptatum aliqu illo tenetur nemo sequi quo facilis ipsum rem optio mollitia quas voluptatem eum voluptas qui unde omnis voluptatem iure quasi maxime voluptas nam"
  },
  {
    title: "non est facere",
    body:
      "molestias  nostrum excepturi molestiae dolore omnis repellendus quaerat saepe consectetur iste quaerat tenetur asperiores accusamus ex ut nam quem est ducimus sunt debitis saepe"
  },
  {
    title:
      "commodi ullam sint et excepturi error explicabo praesentium voluptas",
    body:
      "odio fugit voluptatum ducimus earum autem est incunt voluptatem odit reiciendis aliquam sunt sequi nulla dolorem non facere repellendus voluptates quia ratione harum vitae ut"
  },
  {
    title:
      "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    body:
      "similique fugit est illum et dolorum harum et voluptate eaque quem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis"
  },
  {
    title: "optio dolor molestias sit",
    body:
      "temporibus est consectetur dolore et libero debitis vel velit laboriosam quia ipsum quibusdam qui itaque fuga rem aut ea et iure quam sed maxime ut distinctio quae"
  },
  {
    title: "ut numquam possimus omnis eius suscipit laudantium iure",
    body:
      "est natus reiciendis nihil possimus aut provent ex et dolor repellat pariatur est nobis rerum repellendus dolorem autem"
  },
  {
    title: "aut quo modi neque nostrum ducimus",
    body:
      "voluptatem quisquam iste voluptatibus natus officiis facilis dolorem quis quas ipsam vel et voluptatum in aliqu"
  },
  {
    title: "quibusdam cumque rem aut deserunt",
    body:
      "voluptatem assumenda ut qui ut cupitate aut impedit veniam occaecati nemo illum voluptatem laudantium molestiae beatae rerum ea iure soluta nostrum eligendi et voluptate"
  },
  {
    title: "ut voluptatem illum ea doloribus itaque eos",
    body:
      "voluptates quo voluptatem facilis iure occaecati vel assumenda rerum officia et illum perspiciatis ab deleniti laudantium repellat ad ut et autem reprehenderit"
  },
  {
    title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
    body:
      "inventore ab sint natus fugit  nulla sequi architecto nihil quaerat eos tenetur in in eum veritatis non quibusdam officiis aspernatur cumque aut commodi aut"
  },
  {
    title:
      "repellendus qui recusandae incunt voluptates tenetur qui omnis exercitationem",
    body:
      "error suscipit maxime adipisci consequuntur recusandae voluptas eligendi et est et voluptates quia distinctio ab amet quaerat molestiae et vitae adipisci impedit sequi nesciunt quis consectetur"
  },
  {
    title: "soluta aliquam aperiam consequatur illo quis voluptas",
    body:
      "sunt dolores aut doloribus dolore doloribus voluptates tempora et doloremque et quo cum asperiores sit consectetur dolorem"
  },
  {
    title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
    body:
      "iusto est quibusdam fuga quas quaerat molestias a enim ut sit accusamus enim temporibus iusto accusantium provent architecto soluta esse reprehenderit qui laborum"
  },
  {
    title: "ut quo aut ducimus alias",
    body:
      "minima harum praesentium eum rerum illo dolore quasi exercitationem rerum nam porro quis neque quo consequatur minus dolor quem veritatis sunt non explicabo similique"
  },
  {
    title: "sit asperiores ipsam eveniet odio non quia",
    body:
      "totam corporis dignissimos vitae dolorem ut occaecati accusamus ex velit deserunt et exercitationem vero incunt corrupti mollitia"
  },
  {
    title: "sit vel voluptatem et non libero",
    body:
      "debitis excepturi ea perferendis harum libero optio eos accusamus cum fuga ut sapiente repudiandae et ut incunt omnis molestiae nihil ut eum odit"
  },
  {
    title: "qui et at rerum necessitatibus",
    body:
      "aut est omnis dolores neque rerum quod ea rerum velit pariatur beatae excepturi et provent voluptas corrupti corporis harum reprehenderit dolores eligendi"
  },
  {
    title: "sed ab est est",
    body:
      "at pariatur consequuntur earum quem quo est laudantium soluta voluptatem qui ullam et est et cum voluptas voluptatum repellat est"
  },
  {
    title: "voluptatum itaque dolores nisi et quasi",
    body:
      "veniam voluptatum quae adipisci  et  quia eos ad et dolorem aliquam quo nisi sunt eos impedit error ad similique veniam"
  },
  {
    title: "qui commodi dolor at maiores et quis  accusantium",
    body:
      "perspiciatis et quam ea autem temporibus non voluptatibus qui beatae a earum officia nesciunt dolores suscipit voluptas et animi doloribus cum rerum quas et magni et hic ut ut commodi expedita sunt"
  },
  {
    title:
      "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
    body:
      "asperiores sunt ab assumenda cumque modi velit qui esse omnis voluptate et fuga perferendis voluptas illo ratione amet aut et omnis"
  },
  {
    title: "voluptatem doloribus consectetur est ut ducimus",
    body:
      "ab nemo optio odio delectus tenetur corporis similique nobis repellendus rerum omnis facilis vero blanditiis debitis in nesciunt doloribus dicta dolores magnam minus velit"
  },
  {
    title: "beatae enim quia vel",
    body:
      "enim aspernatur illo distinctio quae praesentium beatae alias amet delectus qui voluptate distinctio odit sint accusantium autem omnis quo molestiae omnis ea eveniet optio"
  },
  {
    title:
      "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
    body:
      "enim adipisci aspernatur nemo numquam omnis facere dolorem dolor ex quis temporibus incunt ab delectus culpa quo reprehenderit blanditiis asperiores accusantium ut quam in voluptatibus voluptas ipsam dicta"
  },
  {
    title: "et fugit quas eum in in aperiam quod",
    body:
      " velit blanditiis eum ea voluptatem molestiae sint occaecati est eos perspiciatis incunt a error provent eaque aut aut qui"
  },
  {
    title: "consequatur  enim sunt et et",
    body:
      "voluptatibus ex esse sint explicabo est aliqu cumque adipisci fuga repellat labore molestiae corrupti ex saepe at asperiores et perferendis natus  esse incunt pariatur"
  },
  {
    title: "repudiandae ea animi iusto",
    body:
      "officia veritatis tenetur vero qui itaque sint non ratione sed et ut asperiores iusto eos molestiae nostrum veritatis quibusdam et nemo iusto saepe"
  },
  {
    title: "aliqu eos sed fuga est maxime repellendus",
    body:
      "reprehenderit  nostrum voluptas doloremque pariatur sint et accusantium quia quod aspernatur et fugiat amet non sapiente et consequatur necessitatibus molestiae"
  },
  {
    title: "odio quis facere architecto reiciendis optio",
    body:
      "magnam molestiae perferendis quisquam qui cum reiciendis quaerat animi amet hic inventore ea quia deleniti quem saepe porro velit"
  },
  {
    title: "fugiat quod pariatur odit minima",
    body:
      "officiis error culpa consequatur modi asperiores et dolorum assumenda voluptas et vel qui aut vel rerum voluptatum quisquam perspiciatis quia rerum consequatur totam quas sequi commodi repudiandae asperiores et saepe a"
  },
  {
    title: "voluptatem laborum magni",
    body:
      "sunt repellendus quae est asperiores aut deleniti esse accusamus repellendus quia aut quia dolorem unde eum tempora esse dolore"
  },
  {
    title: "et iusto veniam et illum aut fuga",
    body:
      "occaecati a doloribus iste saepe consectetur placeat eum voluptate dolorem et qui quo quia voluptas rerum ut  enim velit est perferendis"
  },
  {
    title: "sint hic doloribus consequatur eos non ",
    body:
      "quam occaecati qui deleniti consectetur consequatur aut facere quas exercitationem aliquam hic voluptas neque  sunt ut aut accusamus sunt consectetur expedita inventore velit"
  },
  {
    title: "consequuntur deleniti eos quia temporibus ab aliqu at",
    body:
      "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo aut eum minima consequatur tempore cumque quae est et et in consequuntur voluptatem voluptates aut"
  },
  {
    title: "enim unde ratione doloribus quas enim ut sit sapiente",
    body:
      "odit qui et et necessitatibus sint veniam mollitia amet doloremque molestiae commodi similique magnam et quam blanditiis est itaque quo et tenetur ratione occaecati molestiae tempora"
  },
  {
    title: "dignissimos eum dolor ut enim et delectus in",
    body:
      "commodi non non omnis et voluptas sit autem aut nobis magnam et sapiente voluptatem et laborum repellat qui delectus facilis temporibus rerum amet et nemo voluptate expedita adipisci error dolorem"
  },
  {
    title: "doloremque officiis ad et non perferendis",
    body:
      "ut animi facere totam iusto tempore molestiae eum aut et dolorem aperiam quaerat recusandae totam odio"
  },
  {
    title: "necessitatibus quasi exercitationem odio",
    body:
      "modi ut in nulla repudiandae dolorum nostrum eos aut consequatur omnis ut incunt est omnis iste et quam voluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provent"
  },
  {
    title: "quam voluptatibus rerum veritatis",
    body:
      "nobis facilis odit tempore cupitate quia assumenda doloribus rerum qui ea illum et qui totam aut veniam repellendus"
  },
  {
    title: "pariatur consequatur quia magnam autem omnis non amet",
    body:
      "libero accusantium et et facere incunt sit dolorem non excepturi qui quia sed laudantium quisquam molestiae ducimus est officiis esse molestiae iste et quos"
  },
  {
    title: "labore in ex et explicabo corporis aut quas",
    body:
      "ex quod dolorem ea eum iure qui provent amet quia qui facere excepturi et repudiandae asperiores molestias provent minus incunt vero fugit rerum sint sunt excepturi provent"
  },
  {
    title: "tempora rem veritatis voluptas quo dolores vero",
    body:
      "facere qui nesciunt est voluptatum voluptatem nisi sequi eligendi necessitatibus ea at rerum itaque harum non ratione velit laboriosam quis consequuntur ex officiis minima doloremque voluptas ut aut"
  },
  {
    title: "laudantium voluptate suscipit sunt enim enim",
    body:
      "ut libero sit aut totam inventore sunt porro sint qui sunt molestiae consequatur cupitate qui iste ducimus adipisci dolor enim assumenda soluta laboriosam amet iste delectus hic"
  },
  {
    title: "odit et voluptates doloribus alias odio et",
    body:
      "est molestiae facilis quis tempora numquam nihil qui voluptate sapiente consequatur est qui necessitatibus autem aut ipsa aperiam modi dolore numquam reprehenderit eius rem quibusdam"
  },
  {
    title:
      "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
    body:
      "sint molestiae magni a et quos eaque et quasi ut rerum debitis similique veniam recusandae dignissimos dolor incunt consequatur odio"
  },
  {
    title: "dolore veritatis porro provent adipisci blanditiis et sunt",
    body:
      "similique sed nisi voluptas iusto omnis mollitia et quo assumenda suscipit officia magnam sint sed tempora enim provent pariatur praesentium atque animi amet ratione"
  },
  {
    title: "placeat quia et porro iste",
    body:
      "quasi excepturi consequatur iste autem temporibus sed molestiae beatae et quaerat et esse ut voluptatem occaecati et vel explicabo autem asperiores pariatur deserunt optio"
  },
  {
    title: "nostrum quis quasi placeat",
    body:
      "eos et molestiae nesciunt ut a dolores perspiciatis repellendus repellat aliqu magnam sint rem ipsum est"
  },
  {
    title: "sapiente omnis fugit eos",
    body:
      "consequatur omnis est praesentium ducimus non iste neque hic deserunt voluptatibus veniam cum et rerum sed"
  },
  {
    title: "sint soluta et vel magnam aut ut sed qui",
    body:
      "repellat aut aperiam totam temporibus autem et architecto magnam ut consequatur qui cupitate rerum quia soluta dignissimos nihil iure tempore quas est"
  },
  {
    title: "ad iusto omnis odit dolor voluptatibus",
    body:
      "minus omnis soluta quia qui sed adipisci voluptates illum ipsam voluptatem eligendi officia ut in eos soluta similique molestias praesentium blanditiis"
  },
  {
    title: "aut amet sed",
    body:
      "libero voluptate eveniet aperiam sed sunt placeat suscipit molestias similique fugit nam natus expedita consequatur consequatur dolores quia eos et placeat"
  },
  {
    title: "ratione ex tenetur perferendis",
    body:
      "aut et excepturi dicta laudantium sint rerum nihil laudantium et at a neque minima officia et similique libero et commodi voluptate qui"
  },
  {
    title: "beatae soluta recusandae",
    body:
      "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam voluptatem quis enim recusandae ut sed sunt nostrum est odit totam sit error sed sunt eveniet provent qui nulla"
  },
  {
    title: "qui qui voluptates illo iste minima",
    body:
      "aspernatur expedita soluta quo ab ut similique expedita dolores amet sed temporibus distinctio magnam saepe deleniti omnis facilis nam ipsum natus sint similique omnis"
  },
  {
    title: " minus libero illum nam ad officiis",
    body:
      "earum voluptatem facere provent blanditiis velit laboriosam pariatur accusamus odio saepe cumque dolor qui a dicta ab doloribus consequatur omnis corporis cupitate eaque assumenda ad nesciunt"
  },
  {
    title: "quaerat velit veniam amet cupitate aut numquam ut sequi",
    body:
      "in non odio excepturi sint eum labore voluptates vitae quia qui et inventore itaque rerum veniam non exercitationem delectus aut"
  },
  {
    title: "quas fugiat ut perspiciatis vero provent",
    body:
      "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel inventore aut cumque culpa explicabo aliqu at perspiciatis est et voluptatem dignissimos dolor itaque sit nam"
  },
  {
    title: "laboriosam dolor voluptates",
    body:
      "doloremque ex facilis sit sint culpa soluta assumenda eligendi non ut eius sequi ducimus vel quasi veritatis est dolores"
  },
  {
    title: "temporibus sit alias delectus eligendi possimus magni",
    body:
      "quo deleniti praesentium dicta non quod aut est molestias molestias et officia quis nihil itaque dolorem quia"
  },
  {
    title: "at nam consequatur ea labore ea harum",
    body:
      "cupitate quo est a modi nesciunt soluta ipsa voluptas error itaque dicta in autem qui minus magnam et distinctio eum accusamus ratione error aut"
  }
];

const seedDatabase = async () => {
  // Try catch block
  try {
    // Delete all Users
    const deletedUsers = await db.User.deleteMany();
    console.log(`Delete ${deletedUsers.deletedCount}`);
    // Delete alll Cities
    const deletedCities = await db.City.deleteMany();
    console.log(`Delete ${deletedCities.deletedCount}`);
    // Delete all Posts
    const deletedPosts = await db.Post.deleteMany();
    console.log(`Delete ${deletedPosts.deletedCount}`);

    // Hash User passwords
    for (const user in usersData) {
      const hashedPassword = bcrypt.hashSync(usersData[user].password, 10);
      console.log("users passwords hashed");
    }

    //Create new Users
    const newUsers = await db.User.create(usersData);
    console.log(`created ${newUsers.length} new users`);
    //Create new Cities
    const newCities = await db.City.create(citiesData);
    console.log(`created ${newCities.length} new cities`);
    // Create  new posts
    const newPosts = await db.Post.create(postsData);
    console.log(`created ${newPosts.length} new posts`);

    const randonIndex = arr => Math.floor(Math.random() * arr.length);

    // Associate Users/Cities/Posts
    console.log("Randon Index = ", randonIndex(newPosts));
    for (const post in newPosts) {
      newPosts[post].user_id = newUsers[randonIndex(newUsers)];
      newPosts[post].city_id = newCities[randonIndex(newCities)];

      // Save Post
      await newPosts[post].save();
    }
    console.log("Users, cities, and posts successfully associated");

    console.log("success");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

seedDatabase(); 

