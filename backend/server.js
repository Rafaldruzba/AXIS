import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'

const app = express()

app.use(
	cors({
		origin: ['https://axis-events.pl', 'http://localhost:5173'],
	}),
)

app.use(express.json())

app.post('/api/send', async (req, res) => {
	try {
		const response = await fetch(
			'https://n8n-production-8616.up.railway.app/webhook/129f8d6c-4d99-49f0-8d7c-1d6ddccfe58b',
			{
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(req.body),
			},
		)

		const text = await response.text()

		res.status(response.status).send(text)
	} catch (err) {
		console.error(err)
		res.status(500).json({ error: 'Proxy error' })
	}
})

app.get('/', (req, res) => {
	res.send('API działa 🚀')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
	console.log('Server running on port', PORT)
})
