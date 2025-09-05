import React from "react";
import { momImage } from "./image";

// ---------------- Markdown Component ----------------
export default function MarkdownComponent() {

  return (
    <div>
      <style>{`
        :root {
  --bg: #364153; 
  --card: #cad5e2;
  --text: #111827;
  --muted: #6b7280;
}

body {
  margin: 0;
  background: var(--bg);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: var(--text);
}

.card {
  max-width: 760px;
  margin: 48px auto;
  padding: 32px;
  background: var(--card);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);
}

h1 {
  font-size: 1.6rem;
  margin: 0 0 0.5rem 0;
}

p {
  margin: 1rem 0;
  line-height: 1.62;
}

.muted {
  color: var(--muted);
  font-size: 0.95rem;
}

.emph {
  font-weight: 700;
  font-style: italic;
}

.strong {
  font-weight: 700;
}

.signature {
  margin-top: 2rem;
}

footer {
  margin-top: 1.25rem;
  color: var(--muted);
  font-size: 0.92rem;
}

      `}</style>

      <article className="card">
        <h1 className="font-bold">Hi Mom,</h1>

        <img src={momImage} height="600px" width="400px" />
        <p>
          It has been a year since <strong>god</strong> took you from us. Not to
          blame him for he doesn't exist.
        </p>

        <p>
          A lot of things changed, as they should. I still remember the last
          moments. I know life is not the same for everyone, but this I could
          not accept. I was thrown into these waves, stranded by everything, and
          drowning with just a pinch of hope to survive. I hope I survive and
          add meaning to all the struggles you endured, mentally and physically,
          to raise me.
        </p>

        <p>
          Just when I thought the pieces of the puzzle would fall into the right
          place, I got my first job and sent you the first part of my salary,{" "}
          <strong>10,000</strong>. Just when I thought the first smile and pride
          you felt from my small achievement would grow stronger if I worked
          harder. Just when I thought I could change the course of life for my
          family, bringing in some income, some stability, and much more of my
          time to spend with you on the weekends... Every piece of the puzzle
          lost its sense.
        </p>

        <p className="emph">
          <strong>
            <em>
              Now I am staring at an obscure image, no composure, no perspective
              and everything feels out of control.
            </em>
          </strong>
        </p>

        <p>
          I wish you were right beside me. I wish I could have those petty
          fights.
        </p>

        <p>
          Since life hasn't give me enough time to grieve, I wish I could lend
          some from the future.
        </p>

        <p>
          My memories of you has outlived you, these posts of mine documenting
          my life will outlive me and everyone. I wish you exist somewhere far
          away looking after me and yet too close to my heart.
        </p>

        <p>
          I want to give you a hug, for every pain you withstood, sorry If I
          have disappointed you anywhere.
        </p>

        <p className="strong">
          Now I am in a good job at the company you dreamt of and as you wished.
          It still feels like a dream. Truly.
        </p>

        <p>
          I will make you proud everyday, change myself for the better and raise
          a charity in your name.
        </p>

        <p>You are my best, Mom.</p>

        <div className="signature">
          <p>
            Yours Lovingly,
            <br />
            Bharu.
          </p>
        </div>
      </article>
    </div>
  );
}

