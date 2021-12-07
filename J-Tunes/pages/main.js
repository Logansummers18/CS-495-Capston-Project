import Link from 'next/link'
import styles from '../styles/songPageStylesheet.module.css'
function Main(){
    return(<div id="headerDiv" >
     <button id="jTunesButton" className={styles.jTUnesButton} onclick="location.href='mainPage.html';">JTunes ♪</button>
    <button id="hSongs" className={styles.hSongs} onclick="location.href='songsPage.html';">Songs</button>
    <button id="hLists" className={styles.hLists}>Lists</button>
    <button id="hTeam" className={styles.hTeam}>Team</button>
    <button id="hStats" className={styles.hStats}>Statistics</button>
    <button id="help" className={styles.help}>Help</button>
    <button id="logout" className={styles.logout}  onclick="location.href='loginPage.html';">Logout</button>
    <Link href="/">
          <a>Main</a>
        </Link>
    <p id="welcomeText">Welcome to <br/> JTunes ♪</p>
    <button id="filterButton">Filter</button>
    <img src="Insert.png" alt="Insert Image Here" id="insertImg"></img>

    <button id="bottomSong" class="bottomButtons" onclick="location.href='songsPage.html';">Songs</button>
    <button id="bottomSongList" class="bottomButtons">Song List</button>
    <button id="bottomUsers" class="bottomButtons">Users</button>
    <button id="bottomNewSongList" class="bottomButtons">New Song List</button>
    <button id="bottomAddSong" class="bottomButtons">Add Song</button>
    <button id="bottomAddUser" class="bottomButtons">Add User</button>
   </div>)
}

export default Main
