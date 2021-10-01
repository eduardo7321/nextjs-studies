import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display:'flex',
            
        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />           
            <Navegador texto="Exemplo" destino="/exemplo" />           
            <Navegador texto="JSX" destino="/jsx" />           
                    
        </div>
    )
}