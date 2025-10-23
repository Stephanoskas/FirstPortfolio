import { useEffect, useMemo, useState } from "react";

type Comment = {
  id: string;
  name: string;
  text: string;
  date: string; // ISO
};

export default function Feedback({ projectId }: { projectId: string }) {
  const LIKE_KEY = useMemo(() => `likes:${projectId}`, [projectId]);
  const YOU_LIKED_KEY = useMemo(() => `youLiked:${projectId}`, [projectId]);
  const COMMENTS_KEY = useMemo(() => `comments:${projectId}`, [projectId]);

  const [likes, setLikes] = useState<number>(0);
  const [youLiked, setYouLiked] = useState<boolean>(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const storedLikes = Number(localStorage.getItem(LIKE_KEY) || "0");
      setLikes(Number.isFinite(storedLikes) ? storedLikes : 0);
      setYouLiked(localStorage.getItem(YOU_LIKED_KEY) === "1");

      const raw = localStorage.getItem(COMMENTS_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Comment[];
        setComments(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      // ignore
    }
  }, [LIKE_KEY, YOU_LIKED_KEY, COMMENTS_KEY]);

  // Persist on change
  useEffect(() => {
    try {
      localStorage.setItem(LIKE_KEY, String(likes));
      localStorage.setItem(YOU_LIKED_KEY, youLiked ? "1" : "0");
      localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
    } catch {
      // ignore
    }
  }, [likes, youLiked, comments, LIKE_KEY, YOU_LIKED_KEY, COMMENTS_KEY]);

  const toggleLike = () => {
    setYouLiked((prev) => {
      const next = !prev;
      setLikes((l) => (next ? l + 1 : Math.max(0, l - 1)));
      return next;
    });
  };

  const submitComment = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const nm = name.trim();
    const tx = text.trim();
    if (nm.length === 0) return setError("Please enter a name.");
    if (tx.length === 0) return setError("Please write a comment.");
    if (tx.length > 600) return setError("Comment is too long (max 600 chars).");

    const newC: Comment = {
      id: crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      name: nm.slice(0, 60),
      text: tx,
      date: new Date().toISOString(),
    };
    setComments((arr) => [newC, ...arr]);
    setText("");
  };

  const wrapper: React.CSSProperties = {
    width: "100%",
    maxWidth: 900,
    margin: "32px auto 0",
    padding: "16px",
    borderRadius: 16,
    background: "#fff",
    boxShadow: "0 6px 15px rgba(0,0,0,0.12)",
    color: "#92736C",
  };

  const btn: React.CSSProperties = {
    cursor: "pointer",
    border: "none",
    borderRadius: 999,
    padding: "10px 16px",
    fontWeight: 700,
    boxShadow: "0 4px 10px rgba(0,0,0,0.12)",
    background: youLiked ? "#eec4bd" : "#f6e7e4",
    color: "#5e463f",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    borderRadius: 12,
    border: "1px solid #dbc9c5",
    outline: "none",
    marginBottom: 8,
  };

  const label: React.CSSProperties = { fontWeight: 600, marginBottom: 6 };

  return (
    <div style={wrapper}>
      {/* Like row */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <button onClick={toggleLike} aria-pressed={youLiked} style={btn}>
          {youLiked ? "❤️ Liked" : "♡ Like"}
        </button>
        <span style={{ fontWeight: 700 }}>{likes} {likes === 1 ? "like" : "likes"}</span>
      </div>

      {/* Comment form */}
      <form onSubmit={submitComment} style={{ marginBottom: 16 }}>
        <div style={{ display: "grid", gap: 8 }}>
          <div>
            <div style={label}>Name</div>
            <input
              style={inputStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={60}
            />
          </div>
          <div>
            <div style={label}>Comment</div>
            <textarea
              style={{ ...inputStyle, minHeight: 90, resize: "vertical" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Share your thoughts…"
              maxLength={600}
            />
            <div style={{ fontSize: 12, opacity: 0.7, textAlign: "right" }}>
              {text.length}/600
            </div>
          </div>
          {error && <div style={{ color: "#b13b2e", fontWeight: 600 }}>{error}</div>}
          <div>
            <button
              type="submit"
              style={{
                ...btn,
                background: "#92736C",
                color: "#fff",
                boxShadow: "0 6px 14px rgba(0,0,0,0.18)",
              }}
            >
              Post comment
            </button>
          </div>
        </div>
      </form>

      {/* Comments list */}
      <div style={{ display: "grid", gap: 12 }}>
        {comments.length === 0 ? (
          <div style={{ opacity: 0.7 }}>Be the first to comment.</div>
        ) : (
          comments.map((c) => (
            <div
              key={c.id}
              style={{
                padding: "12px 14px",
                border: "1px solid #eadfdd",
                borderRadius: 12,
                background: "#fffdfa",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <strong>{c.name}</strong>
                <span style={{ fontSize: 12, opacity: 0.7 }}>
                  {new Date(c.date).toLocaleString()}
                </span>
              </div>
              <p style={{ margin: 0, whiteSpace: "pre-wrap" }}>{c.text}</p>
            </div>
          ))
        )}
      </div>

      {/* Note about persistence */}
      <div style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
        Saved locally on this device (no account required).
      </div>
    </div>
  );
}
