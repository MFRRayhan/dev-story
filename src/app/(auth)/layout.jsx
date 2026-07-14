export default function AuthLayout({ children }) {
  return (
    <div className="flex gap-10">
      <div className="flex-1">{children}</div>
      <div className="flex-1">Register form</div>
    </div>
  );
}
