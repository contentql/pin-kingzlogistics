
import { blocksJSX, SlugType } from '@/globals/Footer'

export const Footer = ({footerData} : {footerData : any}) => {

    console.log(footerData)
    return <div>
        {
            footerData?.layout.map((block : any, index : number) => {
                console.log("block", block)
                const Block = blocksJSX[block.blockType as SlugType]
                if (Block) {
                    return <Block key={index} {...block} />
                }
                return <h3 key={index}>Block does not exist </h3>
            })
        }
    </div>
    
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
