import logo from "../../assets/images/navbar-logo.webp";

function Footer() {
  return (
    <footer className="border-t columns-3">
      {/* left col */}
      <div>
        <img
          className="w-38 h-auto rounded-xl"
          src={logo}
          alt="react-mastery"
        />
        Master React. Strengthen your REACT skills.
      </div>
      {/* navlinks */}
      <nav>
        {/* middle col */}
        <h4>Learn</h4>
        <ul className="col">
          <li>Topics</li>
          <li>Dashboard</li>
          <li>Tutorials</li>
        </ul>
        {/* right col */}
        <h4>Community</h4>
        <ul>
          <li>GitHub</li>
          <li>Discord</li>
          <li>Twitter</li>
        </ul>
      </nav>
      {/* infos and license */}
      <div className="row">
        <span>© 2026 React Mastery</span>
        <span>
          Built with <abbr title="UWU">Passion</abbr> & ♥️. Under MIT license 🥳
        </span>
      </div>
    </footer>
  );
}

export default Footer;
