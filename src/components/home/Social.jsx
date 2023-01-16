import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      {/* ================================ LinkedIn ================================ */}
      <a
        href="https://www.linkedin.com/in/shahriar-tamjid/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>

      {/* ================================ GitHub ================================ */}
      <a
        href="https://github.com/shahriar-tamjid"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>

      {/* ================================ Instagram ================================ */}
      <a
        href="https://www.instagram.com/shahriar_develops/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
    </div>
  );
};

export default Social;
