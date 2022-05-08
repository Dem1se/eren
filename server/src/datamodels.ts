export interface Listing {
    id: string;
    author_id: string;
    timestamp: Date;
    status: 'active' | 'approved' | 'cancelled';
    amount: number;
    tenure: number;
    interest: number;
}

// interface ListingRequest {
//     author_id: string;
//     amount: number;
//     tenure: number;
//     intrest_rate: number;
// }

interface Offer {
    author_id: string;
    target_id: string;
    timestamp: Date;
    amount: number;
    tenure: number;
    intrest_rate: number;
}

export interface Negotiation {
    offers: Array<Offer>
}

export interface UserProfile {
    id: string;
    name: string;
    picture: string | undefined;
    // for public profile, add history, contact info, etc.
}

export interface Login {
    id: string;
    email: string;
    secret: string;
}

// export interface LoginRequest {
//     email: string;
//     secret: string;
// }

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

interface AccountSettings { }; // TODO
