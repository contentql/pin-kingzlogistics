import { blocksJSX, SlugType } from '@/globals/Header'


export const Header = ({headerData} : {headerData : any}) => {
    console.log("headerData", headerData)
    return(
    <div>
      {headerData?.layout.map((block : any, index : number) => {
        const Block = blocksJSX[block.blockType as SlugType]
        if (Block) {
          return <Block key={index} {...block} />
        }
        return <h3 key={index}>Block does not exist </h3>
      })}
    </div>
    )
}
