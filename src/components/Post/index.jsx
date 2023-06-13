import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

import styles from "./styles.module.css";
import { Comment } from "../Comment";
import { Avatar } from "../Avatar";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Post muito bacana, hein?!"]);

  const [newCommentText, setNewCommentText] = useState("");

  const publishedDateFormatted = format(publishedAt, "d LLLL 'as' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleCommentFormSubmit(event) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event) {
    event.target.setCustomValidity("");

    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid(event) {
    event.target.setCustomValidity("O comentario não pode ser vazio");
  }

  function deleteComment(commentToDelete) {
    const commentsWhitoutDeletedOne = comments.filter((comment) => comment !== commentToDelete);

    setComments(commentsWhitoutDeletedOne);

    console.log("Deletando comentario", commentToDelete);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatar} alt="" />

          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line, index) => {
          if (line.type === "paragraph") {
            return <p key={index}>{line.content}</p>;
          }

          if (line.type === "link") {
            return (
              <p key={index}>
                <a href="" target="_blank" rel="noopener noreferrer">
                  {line.content}
                </a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCommentFormSubmit}>
        <strong>Deixe seu feedback</strong>

        <textarea required onInvalid={handleNewCommentInvalid} placeholder="Deixe seu comentario" name="comment" value={newCommentText} onChange={handleNewCommentChange} />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
        ))}
      </div>
    </article>
  );
}
