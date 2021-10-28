function HomePage() {
  return (
  <div id="headerDiv">
      <button id="jTunesButton" class="header" onclick="location.href='mainPage.html';">JTunes ♪</button>
      <button id="hSongs" class="header" onclick="location.href='songsPage.html';">Songs</button>
      <button id="hLists" class="header">Lists</button>
      <button id="hTeam" class="header">Team</button>
      <button id="hStats" class="header">Statistics</button>
      <button id="help" class="header">Help</button>
      <button id="logout" class="header"  onclick="location.href='loginPage.html';">Logout</button>

      <label for="userName">UserName: </label><br></br>
      <input type="text" id="userName"></input>
      
      <label for="password">Password: </label><br></br>
      <input type="password" id="password"></input><br></br>
      <input type="submit" ></input>

      <input type="button" id="newUser" value="New User"></input><br></br>
      <input type="button" id="forgotPassword" value="Forgot Password?"></input>
  </div>)
}

export default HomePage