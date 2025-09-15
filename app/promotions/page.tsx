import { promotions } from '../../src/data/promotions';

export default function Promotions() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Promotions</h1>
      <div className="space-y-3">
        {promotions.map((p) => (
          <div className="border rounded p-4" key={p.id}>
            <div className="font-medium">{p.title}</div>
            <div className="text-sm text-gray-600">{p.description}</div>
            <div className="text-xs text-gray-500">{p.startsOn}  {p.endsOn}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
