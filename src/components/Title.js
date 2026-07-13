export default function Title({ children }) {
  return (
    <div className="bg-linear-60 from-sky-50 to-sky-200 text-black p-3 rounded">
      <h2 className="text-5xl">{children}</h2>
    </div>
  );
}
