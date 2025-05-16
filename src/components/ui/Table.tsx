import { Client } from "@/types/cliente";
import StatusBadge from "./StatusBadge";
import { CircleCheck, TriangleAlert } from 'lucide-react';
import { motion } from "framer-motion";

interface TableProps {
  clientes: Client[] | null;
  isLoading?: boolean;
}

const Table = ({ clientes, isLoading }: TableProps) => {

  const SkeletonRow = () => (
    <tr className="animate-pulse border border-surface-variant">
      {[...Array(6)].map((_, i) => (
        <td key={i} className="px-6 py-5 mx-2 whitespace-nowrap">
          <div className="h-4 bg-muted/30 rounded-sm w-3/4" />
        </td>
      ))}
    </tr>
  );

  return (
    <div className="overflow-x-auto overflow-y-hidden  rounded-lg border border-border bg-surface shadow-sm">
      <table className="min-w-[700px] divide-y divide-surface-variant text-text font-body">
        <thead className="bg-surface-variant">
          <tr>
            {["Name", "Email", "Health Score", "Pulse", "Last Activity", "Actions"].map((title) => (
              <th
                key={title}
                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-muted"
              >d
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading === true ? [...Array(7)].map((_, i) => <SkeletonRow key={i} />)
            : clientes?.map((cliente) => (
              <motion.tr
                key={cliente.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * cliente.id }}
                className="hover:bg-surface-variant/30 border border-surface-variant transition-colors hover:shadow-neon"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{cliente.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{cliente.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{cliente.healthScore}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  {cliente.pulse ? <CircleCheck className="text-success" /> : <TriangleAlert className="text-danger" />}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">{cliente.lastActivity}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <StatusBadge status={cliente.status} />
                </td>
              </motion.tr>
            ))}
        </tbody>
      </table>
    </div >

  );
}

export default Table;