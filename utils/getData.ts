import path from 'path'
import fs from 'fs/promises'

export async function getData() {
  const filePath = path.join(process.cwd(), 'json', 'data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData.toString())

  return data
}
