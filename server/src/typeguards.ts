export function isListingRequest(obj: Object): boolean {
    return obj.hasOwnProperty('amount') &&
        obj.hasOwnProperty('tenure') &&
        obj.hasOwnProperty('interest_rate') &&
        obj.hasOwnProperty('author_id')
}

// export function isLoginRequest(obj: Object) {
//     return obj.hasOwnProperty('email') &&
//         obj.hasOwnProperty('secret')
// }

export function isNegotiationUpdate(obj: any): boolean {
    return obj.hasOwnProperty('negotiation_id') &&
        obj.hasOwnProperty('update') &&
        obj.hasOwnProperty('update.field') &&
        obj.hasOwnProperty('update.new_value') &&
        (obj.field === 'interest_rate' || obj.field === 'tenure')
        && typeof obj.new_value === 'number';
}

export function isNegotiationRequest(obj: any): boolean {
    return obj.hasOwnProperty('listing_id') &&
        obj.hasOwnProperty('update') &&
        obj.hasOwnProperty('update.field') &&
        obj.hasOwnProperty('update.new_value');
}