import { leads } from '../../data/leads';

export default function Leads() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Leads</h1>
      <div className="space-y-3">
        {leads.map((l) => (
          <div key={l.id} className="border rounded p-4">
            <div className="font-medium">{l.company}</div>
            <div className="text-sm text-gray-600">{l.contact}  {l.email}</div>
            <div className="text-xs text-gray-500">Region: {l.region}  Stage: {l.stage}</div>
            <div className="mt-2 text-xs text-gray-700 space-y-1">
              {l.activities.map((a, i) => (
                <div key={i}>{a.date}: {a.note}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
