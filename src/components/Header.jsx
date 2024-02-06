import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1>This is List</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/create">Create</Link></li>
          <li><Link href="/posts">Posts</Link></li>
        </ul>
      </nav>
    </header>
  )
}
