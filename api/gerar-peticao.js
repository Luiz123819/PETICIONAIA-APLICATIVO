import OpenAI from 'openai'
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' })
  }
  try {
    const { relato } = req.body
    const response = await client.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [{ role: 'user', content: `Você é um advogado. Elabore uma petição inicial com base no relato: ${relato}` }],
    })
    res.status(200).json({ texto: response.choices[0].message.content })
  } catch (error) {
    console.error(error)
    res.status(500).json({ erro: 'Erro ao gerar petição' })
  }
}
