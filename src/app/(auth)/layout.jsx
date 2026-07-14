export default function AuthLayout({ children }) {
  return (
    <div className="flex min-h-screen gap-10">
      <div className="flex-2">{children}</div>
      <div className="flex items-center flex-1 text-5xl bg-sky-300 text-black rounded p-10">
        <h2>Welcome for Authentication</h2>
      </div>
    </div>
  );
}
