export default async function handler(req, res) {
  // 🔹 Your Render links
  const urls = [
    "https://botsite-rvbb.onrender.com",
    "https://starcore-session-32px.onrender.com"
  ];

  let results = [];

  for (let url of urls) {
    try {
      const response = await fetch(url);
      results.push({ url, status: response.status });
    } catch (error) {
      results.push({ url, error: error.message });
    }
  }

  res.status(200).json({
    message: "Ping completed ✅",
    results,
    time: new Date().toISOString()
  });
}