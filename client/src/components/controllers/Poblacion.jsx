



function Poblacion (poblacion) {

    if(poblacion> 100000){
        return "  " + poblacion + "  millones"
    }else if (poblacion> 1000){
        return  "  " + poblacion  +"  "+ "Habitantes"
    }
    else if (poblacion > 100 ){
        return  "  "  +  poblacion +"  "+ "Habitantes"
    }

    return poblacion +" " +"Habitantes"
}

export default Poblacion