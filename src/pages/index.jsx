import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: '100vh',
            height:'100vh'

        }}>
            <Navegador texto="Estiloso" destino="/estiloso" />           
            <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3"/>           
            <Navegador texto="JSX" destino="/jsx" cor="crimson" />           
            <Navegador texto="Navegação #01" destino="/navegacao/" cor="green" />           
            <Navegador texto="Navegação #02" destino="/cliente/pe-2/123" cor="blue" />           
            <Navegador texto="Navegação componente estado #03" destino="/estado" cor="pink" />           
                    
        </div>
    )
}