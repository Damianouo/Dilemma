const router = require('express').Router();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${process.env.YOUTUBE_API_KEY}`;
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    if (!response.ok) {
      throw new Error();
    }
    if (data.items.length === 0) {
      return res.status(400).json({ message: 'Can not find video, please check link' });
    }
    return res.json({ title: data.items[0].snippet.title });
  } catch (error) {
    return res.status(500).json({ message: 'Can not add video, please try again later' });
  }
});

module.exports = router;
