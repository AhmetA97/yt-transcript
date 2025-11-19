const { YoutubeTranscript } = require("youtube-transcript");

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Only GET allowed" });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: "Missing id parameter" });
  }

  try {
    const transcript = await YoutubeTranscript.fetchTranscript(id);
    res.status(200).json({ transcript });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
