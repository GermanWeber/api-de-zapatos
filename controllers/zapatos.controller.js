
const { request , response } = require("express");
const { zapatos } = require("../zapatos");



const getZapatos = ( req , res ) =>{

    return res.json({

        zapatos

    });
}

const getZapatosById = ( req = request , res = response ) =>{

    let id = parseInt(req.params.id);

    let zapatoABuscar = "";

    zapatoABuscar = zapatos.find((zapato)=>{

        return zapato.id == id;
    })

    if(zapatoABuscar){
        return res.json({

            
            zapatoABuscar
        })
    }else{
        return res.json({

            ok: true,
            statusCode: 404,
            msg: "no hay zapatos con ese ID"
        })
    }
}


const getZapatosByMarca = ( req = request , res = response ) =>{

    let marca = (req.params.marca);

    let marcaABuscar = "";

    marcaABuscar = zapatos.filter((zapato)=>{

        return zapato.marca === marca;
    })

    if(marcaABuscar){
        return res.json({

            ok: true,
            statusCode: 200,
            marcaABuscar
        })
    }else{
        return res.json({

            ok: true,
            statusCode: 404,
            msg: "no hay zapatos con ese ID"
        })
    }
}


module.exports = {
    getZapatos,
    getZapatosById,
    getZapatosByMarca
}