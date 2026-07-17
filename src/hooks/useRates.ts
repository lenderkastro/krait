import { useState, useEffect } from "react";

export function useRates() {
  const [rates, setRates] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const load = () =>
      fetch("https://kraittechnologies.online/api/rates")
        .then(r => r.json())
        .then(d => setRates(d.rates))
        .catch(() => {});

    load();
    const id = setInterval(load, 60_000); // refresh every 60s
    return () => clearInterval(id);
  }, []);

  return rates;
}
