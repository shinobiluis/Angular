export interface CarteleraResponse {
    total_pages:   number;
    results:       Movie[];
    page:          number;
    dates:         Dates;
    total_results: number;
}

export interface Dates {
    minimum: Date;
    maximum: Date;
}

export interface Movie {
    vote_average:      number;
    id:                number;
    vote_count:        number;
    release_date:      Date;
    popularity:        number;
    adult:             boolean;
    backdrop_path:     string;
    genre_ids:         number[];
    poster_path:       string;
    original_language: string;
    original_title:    string;
    title:             string;
    overview:          string;
    video:             boolean;
}
