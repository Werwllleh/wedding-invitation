export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    // Здесь обработайте данные (например, сохраните в базе данных)
    console.log('Получены данные:', data);

    return res.status(200).json({ message: 'Данные успешно сохранены' });
  }

  return res.status(405).json({ message: 'Метод не поддерживается' });
}
