export default function Home() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Industrial Go-To-Market Platform</h1>
      <p className="text-gray-600">Catalog, CPQ, promotions, training and leads for energy & automation.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <a className="border rounded p-4 hover:bg-gray-50" href="/catalog">
          <div className="font-medium">Product Catalog</div>
          <div className="text-sm text-gray-600">Search and filter SKUs</div>
        </a>
        <a className="border rounded p-4 hover:bg-gray-50" href="/cpq">
          <div className="font-medium">CPQ</div>
          <div className="text-sm text-gray-600">Guided prescription</div>
        </a>
        <a className="border rounded p-4 hover:bg-gray-50" href="/promotions">
          <div className="font-medium">Promotions</div>
          <div className="text-sm text-gray-600">Campaigns & events</div>
        </a>
        <a className="border rounded p-4 hover:bg-gray-50" href="/training">
          <div className="font-medium">Training</div>
          <div className="text-sm text-gray-600">Micro-courses</div>
        </a>
        <a className="border rounded p-4 hover:bg-gray-50" href="/leads">
          <div className="font-medium">Leads</div>
          <div className="text-sm text-gray-600">Funnel & activities</div>
        </a>
        <a className="border rounded p-4 hover:bg-gray-50" href="/analytics">
          <div className="font-medium">Analytics</div>
          <div className="text-sm text-gray-600">Basic KPIs</div>
        </a>
      </div>
    </div>
  );
}
