import Link from "next/link";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React News</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All News</Link>
          </li>
          <li>
            <Link href="/add-news">Add New NEWS</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
