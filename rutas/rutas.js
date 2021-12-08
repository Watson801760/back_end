import { addGatico, getGaticos, getGaticoById, updateGatico, deleteGatico } from "../controladores/gaticoController.js"

const rutas = (app)=>{
    app.route('/gaticos')
                .get(getGaticos)
                .post(addGatico)
          
    app.route('/gaticos/:gaticoid')
                .get(getGaticoById)
                .put(updateGatico)
                .delete(deleteGatico)    
       
}

export default rutas