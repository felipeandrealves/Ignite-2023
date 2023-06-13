import AppStyles from "./styles/App.module.css";
import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import "./styles/global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Felipe Alves",
      avatar: "https://avatars.githubusercontent.com/u/60452560?v=4",
      role: "Software Engineer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-05T08:13:30"),
  },
  {
    id: 2,
    author: {
      name: "Diego Fernandes",
      avatar: "https://github.com/diego3g.png",
      role: "CTO at @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2023-06-05T03:13:30"),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={AppStyles.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </main>
      </div>
    </div>
  );
}
