const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.use((req, res, next) => {
    console.log(`[EXPRESS] - method: ${req.method}, path: ${req.path}`)
    next()
})

app.get('/health', (req, res) => {
    res.status(200).json({ 
        message: 'success' 
    })
})

app.use((req, res) => {
    res.status(404).json({
        message: `path ${req.path} not found`
    })
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))