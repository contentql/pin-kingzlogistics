import { SlugType, blocksJSX } from '@/globals/Header'

export const Header = ({ headerData }: { headerData: any }) => {
  console.log('headerData', headerData)
  return (
    <div>
      {/* ! header data will always be an array with one element */}
      {headerData?.layout.map((block: any, index: number) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={index}>Block does not exist </h3>
      })}
    </div>
  )
}
