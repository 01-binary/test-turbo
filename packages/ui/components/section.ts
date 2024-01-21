export function Section({ text }: { text: string }) {
  return `
    <header id="section">
      <h3>${text}</h3>
    </header>
    `;
}
