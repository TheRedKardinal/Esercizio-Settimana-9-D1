import { useEffect, useState } from "react";
import { Trash } from "react-bootstrap-icons";

function Reviews({ bookId }) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [rate, setRate] = useState(5);

  useEffect(() => {
    fetchComments();
  }, [bookId]);

  const fetchComments = () => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (comment) => comment.elementId === bookId,
        );
        setComments(filtered);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        comment: commentText,
        rate: Number(rate),
        elementId: bookId,
      }),
    }).then(() => {
      setCommentText("");
      fetchComments();
    });
  };

  const handleDelete = (commentId) => {
    fetch(`${import.meta.env.VITE_API_URL}/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }).then(() => {
      fetchComments();
    });
  };

  return (
    <div className="section-reviews">
      <h2>Recensioni</h2>
      {!bookId && <p>Seleziona un libro per vedere le recensioni.</p>}
      {bookId && comments.length === 0 && (
        <p>Nessuna recensione per questo libro. Scrivi la prima!</p>
      )}
      {comments.map((comment) => (
        <div key={comment._id} className="review-card">
          <div>
            <p>
              <b>{comment.author}</b> - voto: {comment.rate}
            </p>
            <p>{comment.comment}</p>
          </div>
          <button
            onClick={() => handleDelete(comment._id)}
            aria-label="Elimina recensione"
            className="btn-delete"
          >
            <Trash />
          </button>
        </div>
      ))}
      {bookId && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Scrivi una recensione..."
            required
          />
          <select value={rate} onChange={(e) => setRate(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
          <button type="submit">Invia recensione</button>
        </form>
      )}
    </div>
  );
}

export default Reviews;
