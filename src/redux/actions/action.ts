
export const nameUpdate = (name:string)=>({
    type:'NAME_UPDATE',
    payload:name
})

export const currentCategoryUpdate = (category:string)=>({
    type:'CATEGORY_UPDATE',
    payload:category
})