type StatusBadgeProps = {
  status: 'active' | 'inactive';
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const base = "px-3 py-1 border-radius rounded-[5px] text-xs font-medium";
  const style =
    status === "active"
      ? "bg-emerald-900 text-emerald-300"
      : "bg-slate-800 text-slate-300";

  return (
    <span className={`${base} ${style}`}>
      {status === "active" ? "Active" : "Inactive"}
    </span>
  );
}

export default StatusBadge;
