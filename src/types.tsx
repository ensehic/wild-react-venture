export enum TravelerEnum {
    esker = 'esker',
    gabbro = 'gabbro',
    riebeck = 'riebeck',
    chert = 'chert',
    feldspar = 'feldspar',
}

export interface IReasonToPlay {
    reasonNum: number,
    point: string,
    explanation?: string
}

export interface IAppRoute {
    path: string,
    name: string,
    View: () => JSX.Element
}