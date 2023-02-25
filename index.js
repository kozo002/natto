import * as dotenv from 'dotenv'
dotenv.config()

import { Configuration, OpenAIApi } from 'openai'

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openAi = new OpenAIApi(configuration)
const response = await openAi.listModels()
response.data.data.forEach((item) => {
  console.log(item)
})