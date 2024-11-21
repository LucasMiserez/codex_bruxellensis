import Codex_Rules from "../../components/rules/rules.json";

export async function GET({}) {
  return new Response(JSON.stringify(Codex_Rules), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
