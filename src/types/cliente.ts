export interface Client {
  id: number;
  name: string;
  email: string;
  healthScore: number;
  pulse: boolean;
  lastActivity: string;
  status: "active" | "inactive";
}
