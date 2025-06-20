import './Menu.css'

export default function Menu() {

    return (
        <>
        <div className="menu">
            <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                <h4>HOME</h4>
            </div>
            <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                <h4>SOBRE</h4>
            </div>
            <div className="circle"></div>
            <div style={{paddingLeft:"60px",paddingRight:"60px"}}>
                <h4>CONTATO</h4>
            </div>
        </div>
        </>
    )
}