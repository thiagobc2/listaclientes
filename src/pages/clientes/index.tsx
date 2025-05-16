import Table from "@/components/ui/Table";
import { useClients } from "@/hooks/useClients";



const ClientesPage = () => {
  const { clients, loading, } = useClients();

  return (
    <main className="p-10 flex items-center justify-center">
      <Table clientes={clients} isLoading={loading} />
    </main>
  );
}

export default ClientesPage;
