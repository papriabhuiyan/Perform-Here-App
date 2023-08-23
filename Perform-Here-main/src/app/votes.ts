export class Votes{
    constructor(
        public userId: string | null,
        public artistName: string | null,
        public state: string | null,
        public city: string | null,
        public discountCode: string | null
    ){}
}