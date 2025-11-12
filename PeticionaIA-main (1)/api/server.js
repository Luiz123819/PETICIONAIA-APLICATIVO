import express from "express";
import cors from "cors";
import 'dotenv/config';
import OpenAI from "openai";

const app = express();
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.use(cors());
app.use(express.json());

// Rota para gerar petição
app.post("/gerar-peticao", async (req, res) => {
  try {
    const { relato } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Você é um advogado. Elabore uma petição inicial completa com base no relato: ${relato}`
        }
      ],
    });

    res.json({ texto: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ erro: "Erro ao gerar petição" });
  }
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
