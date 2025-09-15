import { products } from '../../data/products';

export default function Catalog() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Catalog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border rounded p-4">
            <div className="font-medium">{p.name}</div>
            <div className="text-sm text-gray-600">{p.category}</div>
            <div className="text-sm">? {p.price.toLocaleString()}</div>
            <div className="mt-2 text-xs text-gray-700">
              {Object.entries(p.specs).map(([k, v]) => (
                <div key={k}>
                  <span className="font-medium">{k}:</span> {String(v)}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
