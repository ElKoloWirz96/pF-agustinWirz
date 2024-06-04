import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'   
})

export class CareersService {

    getCareers(): ICareers[] {
        return [
            {
                id: 1,
                career: 'FullStack Angular',
                details: 'FullStack Angular, Angular Material, Angular CLI, Typescript, Servicios, Base de datos, etc.',
                price: 20000,
                duration: '2 years'
            },
            {
                id: 2,
                career: 'FullStack React',
                details: 'FullStack React, React Router, Redux, Typescript, Servicios, Base de datos, etc.',
                price: 25000,
                duration: '2 years'
            },
            {
                id: 3,
                career: 'Backend',
                details: 'NodeJS, Express, MongoDB, Typescript, Servicios, Base de datos, etc.',
                price: 18000,
                duration: '2 years'
            },
            {
                id: 4,
                career: 'Frontend Angular',
                details: 'Angular, Angular Material, Angular CLI, Typescript, Servicios, Base de datos, etc.',
                price: 22000,
                duration: '2 years'
            },
            {
                id: 5,
                career: 'Frontend React',
                details: 'ReactJS, React Router, Redux, Typescript, Servicios, Base de datos, etc.',
                price: 25000,
                duration: '2 years'
            },
            {
                id: 6,
                career: 'Video game programmer',
                details: 'Unity, C#',
                price: 25000,
                duration: '2 years'
            },
            {
                id: 7,
                career: 'Graphic designer',
                details: 'Photoshop, Illustrator',
                price: 25000,
                duration: '3 years'
            }
        ]
    }


}