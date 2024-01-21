export function Header({ title }: { title: string }) {
  return `
    <header id="header">
      <h2>${title}</h2>
    </header>
    `;
}
