import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";

import styles from "./styles.module.css";
import { Avatar } from "../Avatar";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} className={styles.avatar} src="https://avatars.githubusercontent.com/u/60452560?v=4" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Felipe Alves</strong>
              <time title="05 de junho as 23:13h" dateTime="05-06-2023 08:13:30">
                Cerca de 1h atras
              </time>
            </div>

            <button title="Deletar comentario" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
