import styles from './Corpo.module.css'

// import wallpaper from './Imagens/wallpaper.svg'
import search from './Bar-Icons/search.svg'
import keyboard from './Bar-Icons/keyboard.svg'
import microphone from './Bar-Icons/microphone.svg'

import bat from './Imagens/bat.svg'

function Corpo()
{
    return(
        <section 
            
            className={styles.Corpo} 
            // style={
            //     { 
            //         backgroundImage: `url(${wallpaper})`,
            //         backgroundRepeat: 'no-repeat',
            //     }
            // }
            > 
            <div className={styles.maincontainer}>
                
                <div className={styles.bar}>
                    <div>
                        <img src={bat} width='150vh' alt='error...'></img>
                    </div>
                    <div className={styles.bar2}>
                        <img src={search} width='30vh' alt='error...'></img>
                        <input type="text" id="fname" name="fname"></input>
                        <img src={microphone} className={styles.searching} width='30vh' alt='error...'></img>
                        <img src={keyboard} className={styles.searching} width='30vh' alt='error...'></img>
                    </div>

                </div>
                <div div className={styles.buttons}>
                    <button>Bat Search</button>
                    <button>Risk Search</button>
                </div>
            </div>


            
            <footer className={styles.rodape}>
                <p>Our greatest glory is not in ever falling, but in rising every time we fall</p>
            </footer>
            
        </section>
    )
}


export default Corpo