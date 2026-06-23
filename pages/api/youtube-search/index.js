export default async function handler(request, response) {
  const { query } = request.query;

  if (!query) {
    return response.status(400).json({ status: "Query is required" });
  }
  try {
    const youtubeResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=5&key=${process.env.YOUTUBE_API_KEY}`
    );
    if (!youtubeResponse.ok) {
      return response
        .status(youtubeResponse.status)
        .json({ status: "YouTube API error." });
    }

    const data = await youtubeResponse.json();
    return response.status(200).json(data);
  } catch (error) {
    return response.status(500).json({ status: "Something went wrong." });
  }
}
