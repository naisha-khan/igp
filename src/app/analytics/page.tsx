import { leads } from '../../data/leads';
import { products } from '../../data/products';

export default function Analytics() {
  const totalPipeline = leads.reduce((sum, l) => {
    const est = l.stage === 'Won' ? 1 : l.stage === 'Proposal' ? 0.6 : l.stage === 'Qualified' ? 0.3 : 0.1;
    return sum + est * 10000;
  }, 0);
  const avgPrice = Math.round(products.reduce((s, p) => s + p.price, 0) / products.length);
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="border rounded p-4">
          <div className="text-sm text-gray-600">Est. Pipeline</div>
          <div className="text-2xl font-semibold">? {totalPipeline.toLocaleString()}</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-sm text-gray-600">Avg SKU Price</div>
          <div className="text-2xl font-semibold">? {avgPrice.toLocaleString()}</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-sm text-gray-600">Lead Count</div>
          <div className="text-2xl font-semibold">{leads.length}</div>
        </div>
      </div>
    </div>
  );
}
