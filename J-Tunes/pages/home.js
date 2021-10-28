function Home(){
    return(<div id="headerDiv">
    <button id="jTunesButton" class="header" onclick="location.href='mainPage.html';">JTunes ♪</button>
    <button id="hSongs" class="header" onclick="location.href='songsPage.html';">Songs</button>
    <button id="hLists" class="header">Lists</button>
    <button id="hTeam" class="header">Team</button>
    <button id="hStats" class="header">Statistics</button>
    <button id="help" class="header">Help</button>
    <button id="logout" class="header"  onclick="location.href='loginPage.html';">Logout</button>

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

export default Home