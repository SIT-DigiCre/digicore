export type WorkDemo = {
  id: string;
  title: string;
  description: string;
  files: FileDemo[];
  user: {
    id: string;
    name: string;
    icon: string;
  };
};

export const workDemoData: WorkDemo[] = [
  {
    id: "1",
    title: "作品1",
    description: "作品1の説明",
    files: [
      {
        id: "1",
        name: "ファイル1",
        url: "https://pbs.twimg.com/media/EwfidLOVkAAg8B1?format=png&name=large",
      },
    ],
    user: {
      id: "1",
      name: "ユーザー1",
      icon: "https://pbs.twimg.com/profile_images/1308658397382733824/BSTK8cGS_400x400.jpg",
    },
  },
  {
    id: "2",
    title: "作品1",
    description: "作品1の説明",
    files: [
      {
        id: "1",
        name: "ファイル1",
        url: "https://pbs.twimg.com/media/EwfidLOVkAAg8B1?format=png&name=large",
      },
    ],
    user: {
      id: "1",
      name: "ユーザー1",
      icon: "https://pbs.twimg.com/profile_images/1308658397382733824/BSTK8cGS_400x400.jpg",
    },
  },
  {
    id: "3",
    title: "作品1",
    description: "作品1の説明",
    files: [
      {
        id: "1",
        name: "ファイル1",
        url: "https://pbs.twimg.com/media/EwfidLOVkAAg8B1?format=png&name=large",
      },
    ],
    user: {
      id: "1",
      name: "ユーザー1",
      icon: "https://pbs.twimg.com/profile_images/1308658397382733824/BSTK8cGS_400x400.jpg",
    },
  },
  {
    id: "4",
    title: "作品1",
    description: "作品1の説明",
    files: [
      {
        id: "1",
        name: "ファイル1",
        url: "https://pbs.twimg.com/media/EwfidLOVkAAg8B1?format=png&name=large",
      },
    ],
    user: {
      id: "1",
      name: "ユーザー1",
      icon: "https://pbs.twimg.com/profile_images/1308658397382733824/BSTK8cGS_400x400.jpg",
    },
  },
  {
    id: "5",
    title: "作品1",
    description: "作品1の説明",
    files: [
      {
        id: "1",
        name: "ファイル1",
        url: "https://pbs.twimg.com/media/EwfidLOVkAAg8B1?format=png&name=large",
      },
    ],
    user: {
      id: "1",
      name: "ユーザー1",
      icon: "https://pbs.twimg.com/profile_images/1308658397382733824/BSTK8cGS_400x400.jpg",
    },
  },
];

export type FileDemo = {
  id: string;
  name: string;
  url: string;
};
