interface Props {
  active: boolean;
}

export default function Badge({ active }: Props) {
  return (
    <span
      className={`px-2 py-1 text-xs rounded ${
        active ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      }`}
    >
      {active ? "Active" : "Inactive"}
    </span>
  );
}