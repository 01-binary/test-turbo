export function Section({ text }: { text: string }) {
  return `
    <header id="section">
      <h4>${text}</h4>
    </header>
    `;
}
