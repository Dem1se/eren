export interface Listing {
    id: string;
    author_id: string;
    timestamp: Date;
    status: 'active' | 'approved' | 'cancelled';
    amount: number;
    tenure: number;
    intrest_rate: number;
}

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

export interface UserAuth {
    id: string;
    email: string;
    secret: string;
}

interface Settings { }; // TODO
