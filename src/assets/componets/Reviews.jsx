import { Component } from "react";

class Reviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentText: "",
      rate: 5,
    };
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (comment) => comment.elementId === this.props.bookId,
        );
        this.setState({ comments: filtered });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_API_URL}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
      body: JSON.stringify({
        comment: this.state.commentText,
        rate: Number(this.state.rate),
        elementId: this.props.bookId,
      }),
    }).then(() => {
      this.setState({ commentText: "" });
      this.fetchComments();
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.bookId !== this.props.bookId) {
      this.fetchComments();
    }
  }

  render() {
    return (
      <div className="section-reviews">
        <h2>Recensioni</h2>
        {!this.props.bookId && (
          <p>Seleziona un libro per vedere le recensioni.</p>
        )}
        {this.props.bookId && this.state.comments.length === 0 && (
          <p>Nessuna recensione per questo libro. Scrivi la prima!</p>
        )}
        {this.state.comments.map((comment) => (
          <div key={comment._id} className="review-card">
            <p>
              <b>{comment.author}</b> - voto: {comment.rate}
            </p>
            <p>{comment.comment}</p>
            {this.props.bookId && (
              <form onSubmit={this.handleSubmit}>
                <textarea
                  value={this.state.commentText}
                  onChange={(e) =>
                    this.setState({ commentText: e.target.value })
                  }
                  placeholder="Scrivi una recensione..."
                  required
                />
                <select
                  value={this.state.rate}
                  onChange={(e) => this.setState({ rate: e.target.value })}
                >
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
        ))}
      </div>
    );
  }
}

export default Reviews;
