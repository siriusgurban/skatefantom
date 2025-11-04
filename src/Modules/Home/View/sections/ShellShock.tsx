import { useState } from "react";

function ShellShock() {
  const [play, setPlay] = useState(false);
  return (
    <section id="shellShock" className="shellShock">
      {play ? (
        <iframe
          className="ss_iframe"
          width="100vw"
          // height="864"
          src="https://www.youtube.com/embed/hVQRL4i71ZY"
          title='"Shell Shock" (2025) | Lazo Full Length Roller Skating Video'
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      ) : (
        <button className="ss_btn">
          <img
            src="https://skatefantom.com/wp-content/uploads/2025/01/shell-shock-thumbnail.jpeg"
            alt="shell shock"
            className="ss_thumb"
          />
          <img
            src="https://skatefantom.com/wp-content/themes/fantom-magazine/dist/images/play-button-xl.svg"
            alt="Play video image"
            className="ss_play"
            onClick={() => setPlay(true)}
          />
        </button>
      )}
    </section>
  );
}

export default ShellShock;

