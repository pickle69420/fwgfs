function getgame(gname, glink)
{
  document.cookie = "loadgamename="+gname+";path=/";
  document.cookie = "loadgamelink="+glink+";path=/";
  window.location.replace("gamepage.html");
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function loadgame()
{
	let gamename = getCookie("loadgamename");
	let gamelink = getCookie("loadgamelink");
	if (gamename.includes("ghcdn.rawgit.org")
	{
		document.getElementById('warnmodule').style.display = 'block';
	}
	let framewidth = (window.innerWidth/100)*98;
	let frameheight = window.innerHeight-5;
	window.document.title="FWGFS - "+gamename;
	var iframe = document.createElement('iframe');
	iframe.width = framewidth;
	iframe.height = frameheight;
	iframe.id = 'gameframe';
	iframe.frameBorder = 0;
	iframe.src = gamelink;
	iframe.title = gamename;
	document.getElementById('gamecontainer').appendChild(iframe);
	
}
