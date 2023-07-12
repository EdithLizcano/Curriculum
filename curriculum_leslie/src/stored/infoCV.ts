interface IEjemplo{
    nombre:string;
    apellidoPaterno:string;
    estudios:IEstudios[]
}

interface IEstudios{
    institucion:string;
    facultad:string
    nivel:string;
    carrera:string;
    inicio:string;
    final:string;
}
export const variable =<IEjemplo>({
    nombre:"Leslie Edith",
    apellidoPaterno:"Lucio",
    estudios:[
        {
            institucion:"José Maria Morelos",
            facultad:"",
            nivel:"Primaria",
            carrera:"",
            inicio:"2004",
            final:"2010",
        }, {
            institucion:"Juan F. Escamilla #20",
            facultad:"",
            nivel:"Secundaria",
            carrera:"",
            inicio:"2010",
            final:"2013",
        },
    ]
})
