// Devuelve las transferencias recibidas (alias/CVU) en la cuenta de Mercado Pago.
// El token vive SOLO en variables de entorno de Netlify (MP_ACCESS_TOKEN). Nunca en el código.
// DEMO_KEY: clave simple que debe enviar la página para poder consultar.
const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });

export default async (req) => {
  const demoKey = process.env.DEMO_KEY;
  const token = process.env.MP_ACCESS_TOKEN;
  if (!demoKey || !token) return json({ error: "not_configured" }, 500);
  if ((req.headers.get("x-demo-key") || "") !== demoKey) return json({ error: "unauthorized" }, 401);

  // No se expone historial viejo: como máximo las últimas 48 horas.
  const now = Date.now();
  const asked = Date.parse(new URL(req.url).searchParams.get("since") || "") || 0;
  const since = Math.max(asked, now - 48 * 3600 * 1000);

  let res;
  try {
    res = await fetch("https://api.mercadopago.com/v1/payments/search?sort=date_created&criteria=desc&limit=50", {
      headers: { Authorization: "Bearer " + token },
    });
  } catch (e) {
    return json({ error: "mp_unreachable" }, 502);
  }
  if (!res.ok) return json({ error: "mp_error", status: res.status }, 502);

  const data = await res.json();
  const items = (data.results || [])
    .filter(
      (p) =>
        p.payment_type_id === "bank_transfer" &&
        p.payment_method_id === "cvu" &&
        p.operation_type === "account_fund" &&
        p.status === "approved" &&
        Date.parse(p.date_approved || p.date_created) >= since
    )
    .map((p) => ({
      id: String(p.id),
      ts: new Date(p.date_approved || p.date_created).toISOString(),
      amount: p.transaction_amount,
    }))
    .slice(0, 30);

  return json({ items, now: new Date(now).toISOString() });
};

export const config = { path: "/api/mp-transfers" };
