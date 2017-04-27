import { webpack } from '@webpack-blocks/webpack2'
import serverSourceMap from '../src'

describe('serverSourceMap', () => {
  let context

  beforeEach(() => {
    context = { webpack }
  })

  it('returns proper webpack block', () => {
    const block = serverSourceMap()(context)
    expect(block.devtool).toBe('sourcemap')
    expect(block.plugins[0]).toBeTruthy()
  })
})
