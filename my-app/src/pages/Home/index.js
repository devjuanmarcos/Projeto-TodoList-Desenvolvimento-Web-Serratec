

export function Home ({pessoa, sayHello}){

    function handleSayHello(){
        sayHello()
    }

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <h1>HOME</h1>
            <span>{pessoa}</span>
            <button onClick={() =>console.log('BBBBBBB')}>CLICK-ME</button>
        </div>
    )
}