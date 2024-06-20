
export const newsUpdate = (news:any)=>({
    type:'NEWS_UPDATE',
    payload:news
})

export const currentCategoryUpdate = (category:string)=>({
    type:'CATEGORY_UPDATE',
    payload:category
})

export const filteredDataUpdate = (data:any)=>({
    type:'FILTERED_DATA_UPDATE',
    payload: data
})