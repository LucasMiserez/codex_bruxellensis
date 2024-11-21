import Condex_Songs from "../../components/songs/songs.json";

export async function GET({}) {
  return new Response(JSON.stringify(Condex_Songs), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
