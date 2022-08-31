/* eslint-disable unicorn/no-array-reduce */
import {Command, Flags} from '@oclif/core'
import {readFileSync, writeFileSync} from 'node:fs'

type Extremes = { max: number, min: number }

const getExtremes = (coords: number[][], axis: number): Extremes => {
  return coords.reduce((acc, coords) => {
    if (acc.min > coords[axis]) {
      acc.min = coords[axis]
    }

    if (acc.max < coords[axis]) {
      acc.max = coords[axis]
    }

    return acc
  }, {min: Number.MAX_SAFE_INTEGER, max: -Number.MAX_SAFE_INTEGER})
}

export default class Normalize extends Command {
  static description = 'Place model on axes'

  static examples = ['$ normalize-obj place ./pawn.obj']

  static aliases = ['']

  static flags = {
    x: Flags.boolean({char: 'x', description: 'Place on x axes', required: false}),
    y: Flags.boolean({char: 'y', description: 'Place on y axes', required: false}),
    z: Flags.boolean({char: 'z', description: 'Place on z axes', required: false}),
  }

  static args = [{name: 'file', description: 'File to update', required: true}]

  async run(): Promise<void> {
    const {args, flags} = await this.parse(Normalize)

    const file = readFileSync(args.file, 'utf8')

    const coords = file
    .split('\n')
    .filter(line => line.startsWith('v '))
    .map(line => {
      return line.split(' ').slice(1).map((v: string) => Number(v))
    })

    const extremes = {
      x: flags.x && getExtremes(coords, 0),
      y: flags.y && getExtremes(coords, 1),
      z: flags.z && getExtremes(coords, 2),
    }

    const newFile = file.split('\n').map((line: string) => {
      if (!line.startsWith('v ')) {
        return line
      }

      const coords = line.split(' ').slice(1).map((v: string) => Number(v))

      if (extremes) {
        extremes.x && (coords[0] += (extremes.x.min))
        extremes.y && (coords[1] += (extremes.y.min))
        extremes.z && (coords[2] += (extremes.z.min))
      }

      return `v ${coords.join(' ')}`
    }).join('\n')

    writeFileSync(args.file, newFile)

    this.log(`Updated ${args.file}`)
  }
}
