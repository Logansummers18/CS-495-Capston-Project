function Songs(){
    return (<div id="headerDiv">
    <button id="jTunesButton" class="header" onclick="location.href='mainPage.html';">JTunes ♪</button>
    <button id="hSongs" class="header" onclick="location.href='songsPage.html';">Songs</button>
    <button id="hLists" class="header">Lists</button>
    <button id="hTeam" class="header">Team</button>
    <button id="hStats" class="header">Statistics</button>
    <button id="help" class="header">Help</button>
    <button id="logout" class="header"  onclick="location.href='loginPage.html';">Logout</button>

    
    <p id="songTitle">No One Like You ♪</p>
    <p id="tempoLabel">Tempo</p>
    <p id="tagsLabel">Tags</p>
    <p id="tempo">0 BPM</p>
    <p id="tags">"Place Holder"</p>
    <p id="scripturesLabel">Scriptures</p>
    <p id="scriptures">"Place Holder"</p>
    <p id="links" ><a href="https://www.youtube.com/">"Place Holder"</a></p>
    <p id="chartUpload">Temporary Upload Charts Area</p>
    <p id="pdfDownloads">PDF Downloads of Charts</p>
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" id="video" ></iframe>

    <p id="playHistoryLabel">Play History</p>
    <p id="playAmount">0</p>
    <p id="dateLabel">Date</p>
    <p id="titleLabel">Title</p>
    
</div>)
  }
  
  export default Songs