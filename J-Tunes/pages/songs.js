import Link from 'next/link'
import styles from '../styles/songPageStylesheet.module.css'
function Songs(){
    return (

    <div id="headerDiv" className={styles.headerDiv}>
    <button id="jTunesButton" className={styles.header} onclick="location.href='mainPage.html';">JTunes ♪</button>
    <button id="hSongs" className={styles.header} onclick="location.href='songsPage.html';">Songs</button>
    <button id="hLists" className={styles.header}>Lists</button>
    <button id="hTeam" className={styles.header}>Team</button>
    <button id="hStats" className={styles.header}>Statistics</button>
    <button id="help" className={styles.header}>Help</button>
    <button id="logout" className={styles.header}  onclick="location.href='loginPage.html';">Logout</button>
    <button id="help" className={styles.header}> <Link href="/">
          <a>Home</a>
        </Link></button>
    <p id="songTitle" className={styles.songTitle}>No One Like You ♪</p>
    <p id="tempoLabel" className={styles.tempoLabel}>Tempo</p>
    <p id="tagsLabel" className={styles.tagsLabel}>Tags</p>
    <p id="tempo" className={styles.tempo}>0 BPM</p>
    <p id="tags" className={styles.tags}>"Place Holder"</p>
    <p id="scripturesLabel" className={styles.scripturesLabel}>Scriptures</p>
    <p id="scriptures" className={styles.scriptures}>"Place Holder"</p>
    <p id="links" className={styles.links}><a href="https://www.youtube.com/">"Place Holder"</a></p>
    <p id="chartUpload" className={styles.chartUpload}>Temporary Upload Charts Area</p>
    <p id="pdfDownloads" className={styles.pdfDownloads}>PDF Downloads of Charts</p>
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video" className={styles.video}></iframe>

    <p id="playHistoryLabel" className={styles.playHistoryLabel}>Play History</p>
    <p id="playAmount" className={styles.playAmount}>0</p>
    <p id="dateLabel" className={styles.dateLabel}>Date</p>
    <p id="titleLabel" className={styles.titleLabel}>Title</p>
 
</div> 
 )
  }
  
  export default Songs