import express from 'express'
import cors from 'cors'

const app = express()

const corsOptions = {
	origin: ['https://axis-events.pl', 'http://localhost:5173'],
	methods: ['GET', 'POST', 'OPTIONS'],
	allowedHeaders: ['Content-Type', 'Authorization'],
}

app.use(cors(corsOptions))
app.options('*', cors(corsOptions)) // ← to jest kluczowe

app.use(express.json())

app.post('/api/send', async (req, res) => {
	try {
		const response = await fetch(
			//testURL https://n8n-production-8616.up.railway.app/webhook-test/129f8d6c-4d99-49f0-8d7c-1d6ddccfe58b
			'https://n8n-production-8616.up.railway.app/webhook/129f8d6c-4d99-49f0-8d7c-1d6ddccfe58b',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(req.body),
			},
		)

		const data = await response.text()
		res.status(response.status).send(data)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Proxy error' })
	}
})

app.listen(process.env.PORT || 3000, () => {
	console.log('Server działa 🚀')
})
