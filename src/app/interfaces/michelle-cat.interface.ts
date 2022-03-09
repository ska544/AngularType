export interface MichelleCat {
    name: string,
    age: number,
    breed: string,
    color: string,
    isLongHaired: boolean,
    favoriteToys: CatToy[],
    siblings?: string[],
}

export interface CatToy {
    brand: string,
    type: string,
    name: string,
}
