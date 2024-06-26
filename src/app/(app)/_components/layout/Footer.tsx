import { SlugType, blocksJSX } from '@/globals/Footer'

export const Footer = ({ footerData }: { footerData: any }) => {
  console.log(footerData)
  return (
    <div>
      {/* ! footer data will always be an array with one element */}
      {footerData?.layout.map((block: any, index: number) => {
        console.log('block', block)
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={index}>Block does not exist </h3>
      })}
    </div>
  )
}

// <div>
//   {footerData?.map((block : any, index : number) => {
//     const Block = blocksJSX[block.blockType as SlugType]
//     if (Block) {
//       return <Block key={index} {...block} />
//     }
//     return <h3 key={index}>Block does not exist </h3>
//   })}
// </div>
