/* eslint-disable unicorn/no-array-reduce */
import {Command} from '@oclif/core'
import {readFileSync, writeFileSync} from 'node:fs'

export default class Normalize extends Command {
  static description = 'Normalize obj model coord so its max size is 1'

  static examples = [
    `$ normalize-obj normalize ./pawn.obj
`,
  ]

  static args = [{name: 'file', description: 'File to normalize', required: true}]

  async run(): Promise<void> {
    const {args} = await this.parse(Normalize)

    const file = readFileSync(args.file, 'utf8')

    const coords = file
    .split('\n')
    .filter(line => line.startsWith('v '))
    .map(line => {
      return line.split(' ').slice(1).map((v: string) => Number(v))
    })

    const max = coords.reduce((acc, coords) => {
      const m = Math.max(...coords)

      return m > acc ? m : acc
    }, -Number.MAX_SAFE_INTEGER)

    const newFile = file.split('\n').map((line: string) => {
      if (!line.startsWith('v ')) {
        return line
      }

      const coords = line.split(' ').slice(1).map((v: string) => Number(v))

      const newCoords = coords.map((v: number) => v / max)

      return `v ${newCoords.join(' ')}`
    }).join('\n')

    writeFileSync(args.file, newFile)

    this.log(`Normalized ${args.file}`)
  }
}
