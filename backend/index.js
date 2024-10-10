import express from 'express'
import 'dotenv/config'

const app = express()


const port  = process.env.PORT 

app.get('/', (req,res) => {
    res.send('server is ready')
})

//get a list of five jokes
app.get('/api/jokes', (req,res) => {
    const jokes = [
        {
            "id": 1,
            "question": "Why don't programmers like nature?",
            "answer": "Because it has too many bugs."
        },
        {
            "id": 2,
            "question": "Why do Java developers wear glasses?",
            "answer": "Because they don't see sharp."
        },
        {
            "id": 3,
            "question": "How do you comfort a JavaScript bug?",
            "answer": "You console it."
        },
        {
            "id": 4,
            "question": "Why was the math book sad?",
            "answer": "Because it had too many problems."
        },
        {
            "id": 5,
            "question": "Why do programmers prefer dark mode?",
            "answer": "Because the light attracts bugs!"
        },
        {
            "id": 6,
            "question": "What’s the object-oriented way to become wealthy?",
            "answer": "Inheritance."
        },
        {
            "id": 7,
            "question": "Why did the scarecrow become a successful developer?",
            "answer": "Because he was outstanding in his field!"
        },
        {
            "id": 8,
            "question": "What is a programmer's favorite hangout place?",
            "answer": "The Foo Bar."
        },
        {
            "id": 9,
            "question": "Why did the developer go broke?",
            "answer": "Because he used up all his cache."
        },
        {
            "id": 10,
            "question": "Why can't you trust an atom?",
            "answer": "Because they make up everything!"
        }
    ]
    
    res.send(jokes)
})

app.listen(port, () => {
    console.log(`app is listening to http://localhost:${port}`)
})