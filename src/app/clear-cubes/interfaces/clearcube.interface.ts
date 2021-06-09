
export interface Blade {

    bladeid?: number,
    bladeubicacion?: string,
    bladeserie?: string,
    bladeip?: string,
    blademac?: string,
    bladeswitch?: string,
    bladepuerto?: string,
    bladehost?: string,
    blademacso?: string,
    bladeipso?: string,
    bladeswitchso?: string,
    bladepuertoso?: string,
    bladestatus?: boolean
    
}


export interface Cube {

    cubeid?: number,
    cubeserie?: string,
    cubeip?: string,
    cubemac?: string,
    cubeswitch?: string,
    cubepuerto?: string,
    cubeedificio?: string,
    cubeubicacion?: string,
    cubestatus?: boolean

}

export interface ClearCube {

    clearcubeid?: number,
    bladeserie?: string,
    bladeubicacion?: string,
    bladeid?: string,
    cubeserie?: string,
    cubeip?: string,
    cubeedificio?: string,
    cubeubicacion?: string

}