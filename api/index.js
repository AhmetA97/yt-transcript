import { YoutubeTranscript } from 'youtube-transcript';

export default async function handler(req, res) {
  try {
    const { video_id } = req.query;

    if (!video_id) {
      return res.status(400).json({ error: "Missing video_id parameter" });
    }

    const transcript = await YoutubeTranscript.fetchTranscript(video_id);
    return res.status(200).json({ transcript });

  } catch (error) {
    return res.status(500).json({
      error: "Failed to fetch transcript",
      details: error.message
    });
  }
}
