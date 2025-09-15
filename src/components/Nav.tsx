import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-4 text-sm">
        <Link href="/" className="font-semibold">IGP</Link>
        <Link href="/catalog">Catalog</Link>
        <Link href="/cpq">CPQ</Link>
        <Link href="/promotions">Promotions</Link>
        <Link href="/training">Training</Link>
        <Link href="/leads">Leads</Link>
        <Link href="/analytics">Analytics</Link>
      </div>
    </nav>
  );
}
