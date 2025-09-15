import { courses } from '../../data/courses';

export default function Training() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Training</h1>
      <div className="space-y-3">
        {courses.map((c) => (
          <div key={c.id} className="border rounded p-4">
            <div className="font-medium">{c.title}</div>
            <div className="text-sm text-gray-600">{c.description}</div>
            <div className="text-xs text-gray-500">Duration: {c.durationMin} min</div>
          </div>
        ))}
      </div>
    </div>
  );
}
