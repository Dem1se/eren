export function isListingRequest(obj: Object) {
    return obj.hasOwnProperty('amount') && 
        obj.hasOwnProperty('tenure') && 
        obj.hasOwnProperty('interest_rate') && 
        obj.hasOwnProperty('author_id')
}

// export function isLoginRequest(obj: Object) {
//     return obj.hasOwnProperty('email') &&
//         obj.hasOwnProperty('secret')
// }
