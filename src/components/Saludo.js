

function Saludo(props){
    var dato = "Mañana será miercoles...";
    const {nombre ,edad} = props;
    return(
        
        <div>
            <h1>Mi primer martes React</h1>
            <p>Hola {nombre}</p>
        </div>
    );

    
}

export default Saludo;