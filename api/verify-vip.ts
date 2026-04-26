export default async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { code } = req.body;

  // Validate input
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Invalid request' });
  }

  // Compare against environment variable
  const validCode = process.env.VIP_CODE;
  const isValid = code === validCode;

  // Return result (don't leak which part failed)
  res.status(isValid ? 200 : 401).json({ valid: isValid });
};
