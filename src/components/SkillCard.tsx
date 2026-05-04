import { Link } from "@tanstack/react-router";
import {
  ArrowBigUp,
  ArrowUpRight,
  Bookmark,
  Check,
  Copy,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

export default function SkillCard({
  authorEmail,
  category,
  createdAt,
  description,
  installCommand,
  tags,
  title,
}: SkillRecord) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="skill-card">
      <Link
        to={`/skills`}
        tabIndex={-1}
        aria-label={`Open skill: ${title}`}
        className="overlay"
      />

      {/* Card Header */}
      <div className="chrome">
        <div className="chrome-bar">
          <div className="lights">
            <div className="light red" />
            <div className="light amber" />
            <div className="light green" />
          </div>

          <div className="host">registry.sh</div>
        </div>
      </div>

      <div className="body">
        {/* Metadata */}
        <div className="meta">
          <div className="author">
            <img src="/logo512.png" alt="Author avatar" className="avatar" />
            <div className="author-copy">
              <p>Adrian</p>
              <p>{new Date(createdAt as string).toLocaleDateString()}</p>
            </div>
          </div>

          <p className="category">{category}</p>
        </div>

        {/* Summary */}
        <div className="summary">
          <Link to={`/skills/${title}`} className="title-link">
            <h3>{title}</h3>
          </Link>

          <p>{description}</p>
        </div>

        {/* Terminal */}
        <div className="command">
          <div className="command-copy">
            <span>{">_ "}</span>
            <p>{installCommand}</p>
          </div>

          <button
            type="button"
            className="copy"
            onClick={handleCopy}
            aria-label="Copy install command"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="stats">
            <button type="button" className="upvote" disabled>
              <ArrowBigUp size={16} fill="currentColor" />
              <span>{tags.length}</span>
            </button>

            <div className="comments">
              <MessageSquare size={14} />
              <span>{authorEmail ? 1 : 0}</span>
            </div>
          </div>

          <div className="actions">
            <Link
              to={`/skills/${title}`}
              className="open"
              title={`Open skill: ${title}`}
            >
              <span>Open</span>
              <ArrowUpRight size={14} />
            </Link>

            <button type="button" className="save" aria-label={`Saved state`}>
              <Bookmark size={16} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
