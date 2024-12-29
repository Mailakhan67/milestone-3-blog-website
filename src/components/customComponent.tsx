import {PortableTextComponents} from '@portabletext/react'

 export const components: PortableTextComponents = {
    block :{
        h4:({children})=><h4 className="text-3xl font-bold text-green-500">{children}</h4>,
        h2:({children})=><h2 className="mt-[10px]">{children}</h2>,
    },

    listItem:{
        bullet:({children})=><li className=" mt-[10px] list-disc marker:text-accentDarkSecondary list-inside ml-4">{children}</li>
    },
    marks:{
        strong:({children})=> <strong className=" font-bold text-black mt-[10px] dark:text-white">{children}</strong>
    },
}