const BaseFilter = require('./base-filter')

class BlockFilter extends BaseFilter {

  constructor ({ ethQuery, params }) {
    _super()
    this.type = 'block'
    this.ethQuery = ethQuery
  }

  async update ({ oldBlock, newBlock }) {
    const blocks = await getBlocksForRange({ ethQuery: this.ethQuery, oldBlock, newBlock })
    const blockHashes = blocks.map((block) => block.hash)
    this.addResults(blockHashes)
  }

}

module.exports = BlockFilter

function hexToInt(hex) {
  return Number.parseInt(hex, 16)
}