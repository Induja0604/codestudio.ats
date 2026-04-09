interface Props<T extends Record<string, unknown>> {
  columns: string[];
  data: T[];
}

export default function Table<T extends Record<string, unknown>>({
  columns,
  data
}: Props<T>) {
  return (
    <table className="w-full bg-white rounded-xl shadow mt-6">
      <thead>
        <tr>
          {columns.map((c) => (
            <th key={c} className="p-3 text-left">
              {c}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            {Object.values(row).map((val, j) => (
              <td key={j} className="p-3">
                {String(val)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}