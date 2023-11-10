import styles from './Cabecalho.module.css'

import computer from './Icons/computer.svg'
import tools from './Icons/tools.svg'
import transport from './Icons/transport.svg'
import library from './Icons/library.svg'

function Cabecalho(){
    return(
        <header className={styles.cabecalho}>
          
                
                    <img src={computer} width='50px' alt='error...'></img>
              
                    <img src={tools} width='40px' alt='error...'></img>
                
                    <img src={transport} width='50px' alt='error...'></img>
                
                    <img src={library} width='35px' alt='error...'></img>
           
           
        </header>
    )


}

export default Cabecalho