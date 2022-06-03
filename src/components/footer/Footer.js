import React from "react";

function Footer() {
  return (
    <div className="footer fixed-bottom ">
      <ul>
        <li>Conditions of Use</li>
        <li>Privacy Notice</li>
        <li>Interest-Based Ads</li>
        <li>© 2021-2022</li>
        <li>
          <a href="https://www.linkedin.com/in/mehmetozk4n6">mehmetozk4n6</a>
        </li>
      </ul>
    </div>
  );
}

export default React.memo(Footer);
