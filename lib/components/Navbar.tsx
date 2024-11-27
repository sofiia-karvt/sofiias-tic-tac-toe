import Link from "next/link";
import { APP_NAME, COLOR_WHEEL, COURSE_GITHUB, DEMOS_ENABLED, NASA_APP, TICTACTOE } from "../config";

export default function Navbar() {
  return (
    <header id="navbar">
      <h1>
        <Link href="/">{APP_NAME}</Link>
      </h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href={COURSE_GITHUB} target="_blank">
          GitHub
        </Link>
        <Link href={NASA_APP} target="_blank">
          NasaDailyPhoto
        </Link>
        <Link href={TICTACTOE} target="_blank">
          XO
        </Link>
        <Link href={COLOR_WHEEL} target="_blank">
          COLOR WHEEL
        </Link>
        {DEMOS_ENABLED ? <Link href="/demos">Demos</Link> : null}
      </nav>
    </header>
  );
}
