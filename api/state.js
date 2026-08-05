const JSONBIN_ID = '6a724d76f5f4af5e29eb8807';
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_ID}`;

export default async function handler(req, res) {
  const key = process.env.JSONBIN_KEY;

  if (req.method === 'GET') {
    try {
      const r = await fetch(`${JSONBIN_URL}/latest`, {
        headers: { 'X-Master-Key': key },
      });
      if (!r.ok) throw new Error('jsonbin GET ' + r.status);
      const data = await r.json();
      res.status(200).json(data.record || {});
    } catch (e) {
      res.status(502).json({ error: 'load failed' });
    }
    return;
  }

  if (req.method === 'POST') {
    try {
      const r = await fetch(JSONBIN_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'X-Master-Key': key },
        body: JSON.stringify(req.body),
      });
      if (!r.ok) throw new Error('jsonbin PUT ' + r.status);
      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(502).json({ error: 'save failed' });
    }
    return;
  }

  res.status(405).json({ error: 'method not allowed' });
}
