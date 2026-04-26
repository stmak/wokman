export default async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body ?? {};
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  const validCode = process.env.VIP_CODE;
  if (!validCode || typeof validCode !== 'string') {
    return res.status(500).json({ error: 'VIP code is not configured on the server' });
  }

  const isValid = code === validCode;
  return res.status(isValid ? 200 : 401).json({ valid: isValid });
};
