import { useState, useEffect, useCallback } from "react";
import { Client } from "@/types/cliente";

export function useClients() {
  const [clients, setClients] = useState<Client[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchClients = useCallback((signal?: AbortSignal) => {
    setLoading(true);
    setError(null);

    fetch("https://run.mocky.io/v3/f12aab20-7160-45c3-9981-5dd61e35894f", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Erro na resposta da API");
        return res.json();
      })
      .then(setClients)
      .catch((err) => {
        if (err.name !== "AbortError") setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchClients(controller.signal);
    return () => controller.abort();
  }, [fetchClients]);

  return { clients, loading, error, refetch: () => fetchClients() };
}
