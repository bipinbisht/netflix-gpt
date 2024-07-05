import OpenAI from 'openai'
import { GPT_KEY } from './constant'

const openai = new OpenAI({
  //   apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
  apiKey: GPT_KEY,
  dangerouslyAllowBrowser: true,
})
export default openai
