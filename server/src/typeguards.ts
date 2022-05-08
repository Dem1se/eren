export function isListingRequest(obj: Object) {
    return obj.hasOwnProperty('amount') && 
        obj.hasOwnProperty('tenure') && 
        obj.hasOwnProperty('interest_rate') && 
        obj.hasOwnProperty('author_id')
}