// function when API first time call and every category change
export const newsUpdate = (news:any)=>({
    type:'NEWS_UPDATE',
    payload:news
})

// to update category
export const currentCategoryUpdate = (category:string)=>({
    type:'CATEGORY_UPDATE',
    payload:category
})

// to filterout pagination data
export const filteredDataUpdate = (data:any)=>({
    type:'FILTERED_DATA_UPDATE',
    payload: data
})