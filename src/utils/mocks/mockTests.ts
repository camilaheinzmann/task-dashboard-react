type SignInType = {
  username: string;
  password: string;
};

const itemsMock = [
  {
    id: 11,
    subMenuItems: [
      {
        id: "1",
        name: "Joao Bosco",
        subject: "Preciso que formate o meu computador!",
        owner: "JB",
        users: ["JB", "MJ", "LH"],
      },
      {
        id: "2",
        name: "Melissa Jackson",
        subject: "Solicito minhas férias para janeiro.",
        owner: "MJ",
        users: ["MJ"],
      },
      {
        id: "3",
        name: "Lucas Henrique",
        subject: "Preciso de mais dois desenvolvedores BACKEND GO.",
        owner: "LH",
        users: ["LH", "JR", "MJ", "JB"],
      },
      {
        id: "4",
        name: "Juliano Ribeiro",
        subject: "Lembrete sua CNH venceu.",
        owner: "JR",
        users: ["JR", "LH"],
      },
      {
        id: "5",
        name: "Ian Chaves",
        subject: "Aviso",
        owner: "IC",
        users: ["FD"],
      },
      {
        id: "6",
        name: "Filipe Damião",
        subject: "Retornar para o cliente big boss referente a reclamação",
        owner: "FD",
        users: ["FD", "JB"],
      },
    ],
  },
  {
    id: 12,
    subMenuItems: [
      {
        id: "7",
        name: "Billie Jean",
        subject: "Alarme esta disparando toda noite arrumar.",
        owner: "BJ",
        users: ["BJ", "JR"],
      },
      {
        id: "8",
        name: "Vitor Culture",
        subject: "Tratar falta de João Bosco 25-10-2020",
        owner: "VC",
        users: ["BJ"],
      },
    ],
  },
  {
    id: 22,
    subMenuItems: [
      {
        id: "9",
        name: "Tony Skark",
        subject:
          "Solicito um sistema de BI para analisar as metricas da empresa.",
        owner: "TS",
        users: ["MJ", "BJ", "JR", "JB"],
      },
    ],
  },
  {
    id: 33,
    subMenuItems: [],
  },
  {
    id: 34,
    subMenuItems: [
      {
        id: "10",
        name: "Rock Armando",
        subject: "Contrato de um milhão de dolares para ser aprovado.",
        owner: "RA",
        users: ["MJ", "BJ", "JR", "JB"],
      },
      {
        id: "11",
        name: "Antonio Gomes",
        subject: "O estoque de EPI tem que ser renovado para 2021.",
        owner: "AG",
        users: ["MJ", "BJ", "JR", "JB"],
      },
      {
        id: "12",
        name: "Renilda Borges",
        subject: "Solicito aumento para todos os funcionários de 3%.",
        owner: "RB",
        users: ["MJ", "BJ", "JR", "JB"],
      },
    ],
  },
  {
    id: 35,
    subMenuItems: [],
  },
];

const menuItemsMock = [
  {
    id: 1,
    name: "Tarefa 1",
    subMenus: [
      {
        id: 11,
        name: "Urgente",
      },
      {
        id: 12,
        name: "Data Fixa",
      },
    ],
  },
  {
    id: 2,
    name: "Tarefa 2",
    subMenus: [
      {
        id: 22,
        name: "Avisos",
      },
    ],
  },
  {
    id: 3,
    name: "Tarefa 3",
    subMenus: [
      {
        id: 33,
        name: "Convocação",
      },
      {
        id: 34,
        name: "Checklist",
      },
      {
        id: 35,
        name: "Lixo",
      },
    ],
  },
];

const userLanguage = {
  language: "Português",
  abbr: "pt-br",
  authPage: {
    loginTitle: "Login",
    username: "Nome de usuário",
    password: "Senha",
    enterButton: "Entrar",
  },
  dashboardPage: {
    navbarComponent: {
      help: "Ajuda",
      settings: "Configurações",
      logout: "Sair",
    },
    asideComponent: {
      newAction: "NOVO",
      favorites: "Favoritos",
      task: "Tarefa",
      subTask: "Subtarefa",
    },
    searchComponent: {
      search: "Pesquisar",
      assign: "Atribuir",
      archive: "Arquivar",
      schedule: "Agendar",
    },
    tasksComponent: {
      task: "Tarefa",
    },
  },
};

const theme = {
  title: "light",

  colors: {
    primary: "#E94E0F",
    secondary: "#36444C",

    text: "#555",
    buttonText: "#FFF",
    background: "#F6F6F6",
    foreground: "#FFFFFF",
    separator: "#ddd",
  },
};

export const taskMockValue = {
  currentMenuId: 11,
  setMenuId: (id: number) => {},
  menuItems: menuItemsMock,
  items: itemsMock,
  archiveItems: () => {},
  selectedTasks: ["1", "2", "3", "4", "5", "6"],
  selectTask: (taskId: string) => {},
  selectAllTasks: () => {},
};

export const taskMockValueEmptySelectedTasks = {
  currentMenuId: 11,
  setMenuId: (id: number) => {},
  menuItems: menuItemsMock,
  items: itemsMock,
  archiveItems: () => {},
  selectedTasks: [],
  selectTask: (taskId: string) => {},
  selectAllTasks: () => {},
};

export const taskMockValueEmptyTasks = {
  currentMenuId: 33,
  setMenuId: (id: number) => {},
  menuItems: menuItemsMock,
  items: itemsMock,
  archiveItems: () => {},
  selectedTasks: [],
  selectTask: (taskId: string) => {},
  selectAllTasks: () => {},
};

export const taskMockNotSelectedMenu = {
  currentMenuId: 0,
  setMenuId: (id: number) => {},
  menuItems: menuItemsMock,
  items: itemsMock,
  archiveItems: () => {},
  selectedTasks: [],
  selectTask: (taskId: string) => {},
  selectAllTasks: () => {},
};

export const authContextValue = {
  user: {
    firstName: "Camila",
    lastName: "Heinzman",
  },
  login: ({ username, password }: SignInType) => "success",
  logout: () => {},
};

export const uiContextValue = {
  theme: theme,
  toggleTheme: () => {},
  menuVisible: true,
  toggleMenu: () => {},
  userLanguage: userLanguage,
  changeLanguage: (lang: string) => {},
};

export const uiContextValueAsideNotVisible = {
  theme: theme,
  toggleTheme: () => {},
  menuVisible: false,
  toggleMenu: () => {},
  userLanguage: userLanguage,
  changeLanguage: (lang: string) => {},
};
