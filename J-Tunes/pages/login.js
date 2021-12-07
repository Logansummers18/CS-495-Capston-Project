import Link from 'next/link'
import styles from '../styles/loginPageStylesheet.module.css'
function Login(){
    return(<div id="headerDiv">
    <button id="jTunesButton" className={styles.jTUnesButton} onclick="location.href='mainPage.html';">JTunes ♪</button>
    <button id="hSongs" className={styles.hSongs} onclick="location.href='songsPage.html';">Songs</button>
    <button id="hLists" className={styles.hLists}>Lists</button>
    <button id="hTeam" className={styles.hTeam}>Team</button>
    <button id="hStats" className={styles.hStats}>Statistics</button>
    <button id="help" className={styles.help}>Help</button>
    <button id="logout" className={styles.logout}  onclick="location.href='loginPage.html';">Logout</button>
    <button id="help" className={styles.help}> <Link href="/">
          <a>Home</a>
        </Link></button>
      <button id="help" className={styles.help}> <Link href="/songs">
          <a>Songs</a>
        </Link></button>

    <label for="userName">UserName: </label><br></br>
    <input type="text" id="userName"></input>
    
    <label for="password">Password: </label><br></br>
    <input type="password" id="password"></input><br></br>
    <input type="submit" ></input>

    <input type="button" id="newUser" value="New User"></input><br></br>
    <input type="button" id="forgotPassword" value="Forgot Password?"></input>
</div>)
}

export default Login