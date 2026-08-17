import logo from "../../assets/images/navbar-logo.webp";

function Footer() {
  return (
   
    <footer className="flex flex-col border-t py-12 md:py-16 text-slate-600 dark:text-slate-300">
      <div className="flex flex-col flex-grow max-w-6xl mx-auto w-full">
        {/* navlinks */}
        {/* I have 3 cols - LOGO and our motto - the Learning navigation part - the commiunity and social links */}
        <nav className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 pb-8 border-b">
          {/* left col */}
          <div>
            <img
              className="w-36 h-auto rounded-xl mb-4"
              src={logo}
              alt="react-mastery"
            />
            <p>Master React. Strengthen your REACT skills.</p>
          </div>

          {/* middle col */}
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Learn</h4>
            <ul className="space-y-2">
              <li>Topics</li>
              <li>Dashboard</li>
              <li>Tutorials</li>
            </ul>
          </div>
          
          {/* right col */}
          <div>
            <h4 className="font-bold mb-4 text-slate-900 dark:text-white">Community</h4>
            <ul className="space-y-2">
              <li>GitHub</li>
              <li>Discord</li>
              <li>Twitter</li>
            </ul>
          </div>
        </nav>

        {/* infos and license */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-auto pt-8 gap-4 text-center md:text-left text-sm text-slate-500">
          <span>© 2026 React Mastery</span>
          <span className="md:text-right">
            Built with <abbr title="UWU">Passion</abbr> & ♥️ Under MIT license
            🥳
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

