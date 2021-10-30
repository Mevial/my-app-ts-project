

export const updateProperty = (arrOfObj: Array<any>, paramNameForSearch: any, paramShouldBe: any, updateWithObject: any) => {
    return arrOfObj.map(obj => obj[paramNameForSearch] === paramShouldBe ? {...obj, ...updateWithObject} : obj)
}