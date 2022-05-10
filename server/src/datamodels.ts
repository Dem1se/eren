export interface Listing {
    id: string;
    author_id: string; // change this to borrower_id?
    timestamp: Date;
    status: 'active' | 'approved' | 'cancelled';
    amount: number;
    tenure: number;
    interest: number;
}

interface ListingRequest {
    author_id: string;
    amount: number;
    tenure: number;
    intrest_rate: number;
}

export interface Offer {
    author_id: string;
    reciever_id: string;
    timestamp: Date;
    amount: number;
    tenure: number;
    intrest_rate: number;
}

export interface Negotiation {
    id: string;
    listing_id: string;
    status: 'active' | 'approved' | 'denied' | 'closed'
    borrower_id: string;
    lender_id: string;
    offers: Array<Offer>;
}

export interface NegotiationRequest {
    listing_id: string;
    update: {
        field: 'interest_rate' | 'tenure';
        new_value: number;
    };
}

export interface NegotiationUpdate {
    negotiation_id: string;
    update: {
        field: 'interest_rate' | 'tenure';
        new_value: number;
    };
}

export interface Login {
    id: string;
    email: string;
    secret: string;
}

interface LoginRequest {
    email: string;
    secret: string;
}

export interface SignupRequest {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    dob: Date;
}

export interface Token {
    user_id: string;
    token: string;
}

export interface TokenPayload {
    sub: string;
    iss: 'yeager';
    iat?: number; // automatically added by signer
}

export interface BasicProfile {
    id: string;
    name: string;
    avatar: string;
}

interface Profile {
    id: string;
    name: string;
    avatar: string;
    cibil: number;
    aadhar: string;
    pan: string;
    salary: Array<string>;
    bank: {
        neft_ifcs: string;
        account_number: string;
    };
    ctc: number;
}
