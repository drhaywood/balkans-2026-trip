import { put, del } from '@vercel/blob';

// Vercel buffers request bodies for us; for content types other than
// json/text/form the raw bytes land in req.body as a Buffer. Fall back to
// reading the stream manually in case that assumption ever changes.
async function readRawBody(req) {
  if (Buffer.isBuffer(req.body)) return req.body;
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const rawDay = typeof req.query.day === 'string' ? req.query.day : 'general';
      const day = rawDay.replace(/[^a-zA-Z0-9_-]/g, '') || 'general';
      const contentType = req.headers['content-type'] || 'application/octet-stream';
      const body = await readRawBody(req);
      if (!body.length) throw new Error('empty body');

      const filename = `trip-photos/${day}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.jpg`;
      const blob = await put(filename, body, {
        access: 'public',
        contentType,
        addRandomSuffix: false,
      });
      res.status(200).json({ url: blob.url });
    } catch (e) {
      res.status(502).json({ error: 'upload failed' });
    }
    return;
  }

  if (req.method === 'DELETE') {
    try {
      const url = req.body?.url || req.query.url;
      if (!url) throw new Error('missing url');
      await del(url);
      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(502).json({ error: 'delete failed' });
    }
    return;
  }

  res.status(405).json({ error: 'method not allowed' });
}
