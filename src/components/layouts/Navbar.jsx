const links = ['About'];

export default function Navbar() {
  return (
    <nav>
      <h1>Ethan Gervais</h1>

      <ul>
        {links.map(link => (
          <li key={link}>
            <a href={`${link.toLocaleLowerCase()}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
