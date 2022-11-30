// https://obfuscator.io/

var _0x1029nn = 0; // Clicks
var _0x940251 = 1; // Multiplier
var _0x3829qq = 0; // Rank
var r1B = false;
var r2B = false;
var r3B = false;
var r4B = false;
var r5B = false;
var r6B = false;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
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

function rankCheck(){
    if(_0x1029nn <= 0){
        _0x3829qq = 0;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
    }
    if(_0x1029nn >= 150){
        _0x3829qq = 1;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
        if (!r1B){
            document.getElementById("r1B").disabled = false;
        }
    }
    if(_0x1029nn >= 1000){
        _0x3829qq = 2;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
        if (!r2B){
            document.getElementById("r2B").disabled = false;
        }
    }
    if(_0x1029nn >= 5000){
        _0x3829qq = 3;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
        if (!r3B){
            document.getElementById("r3B").disabled = false;
        }
    }
    if(_0x1029nn >= 13000){
        _0x3829qq = 4;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
        if (!r4B){
            document.getElementById("r4B").disabled = false;
        }
    }
    if(_0x1029nn >= 57000){
        _0x3829qq = 5;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + '</span>';
        if (!r5B){
            document.getElementById("r5B").disabled = false;
        }
    }
    if(_0x1029nn >= 155000){
        _0x3829qq = 6;
        document.getElementById("rank").innerHTML = 'Rank: <span class="rankNum">' + _0x3829qq + ' (MAX)</span>';
        if (!r6B){
            document.getElementById("r6B").disabled = false;
        }
    }
}

function allStats(){
    var tscotp = getCookie("clicks")
    document.getElementById("cClicks").innerHTML = 'Current Clicks: ' + _0x1029nn;
    if(tscotp == ""){
        document.getElementById("sClicks").innerHTML = 'Saved Clicks: No saved clicks';
        document.getElementById("cRank").innerHTML = 'Current Rank: ' + _0x3829qq;
        document.getElementById("cMult").innerHTML = 'Current Multiplier: ' + _0x940251;
    }else{
        document.getElementById("sClicks").innerHTML = 'Saved Clicks: ' + tscotp;
        document.getElementById("cRank").innerHTML = 'Current Rank: ' + _0x3829qq;
        document.getElementById("cMult").innerHTML = 'Current Multiplier: ' + _0x940251;
    }
}

function clicker(){
    _0x1029nn += _0x940251;
    if(_0x1029nn == 1){
        document.getElementById("clicker").innerHTML = '<span class="clickerNum">one</span> click';
    }else{
        document.getElementById("clicker").innerHTML = 'clicks: <span class="clickerNum">' + _0x1029nn + '</span>';
    }
    rankCheck();
    allStats();
}

function saveClicks(){
    let sC = getCookie("clicks");
    let oC = 0;
    if (parseInt(sC) < _0x1029nn){
    }else {
        if(sC == ""){
            oC = 0;
        }else{
            oC = sC;
            let ask = confirm("Are you sure?\n\nOld: " + oC + "\nNew: " + _0x1029nn);
            if (!ask){
                alert("Okay, cancelled saving!")
                return;
            }
        }
    }
    document.cookie = "clicks=" + _0x1029nn + "; expires=Thu, 18 Dec 2100 12:00:00 UTC; path=/clicker";
    allStats();
    alert("Saved!")
}

function loadClicks(){
    let sC = getCookie("clicks");
    if(sC == ""){
        alert("No saved clicks!");
        return;
    }
    if(_0x1029nn !== 0){
        let askyn = confirm("Sure you want to load clicks?\n\nYour current clicks: " + _0x1029nn + "\nSaved clicks: " + sC);
        if(askyn){
            _0x1029nn = parseInt(sC);
            document.getElementById("clicker").innerHTML = 'clicks: <span class="clickerNum">' + sC + '</span>';
        }
        rankCheck();
        allStats()
        return;
    }
    _0x1029nn = parseInt(sC);
    document.getElementById("clicker").innerHTML = 'clicks: <span class="clickerNum">' + sC + '</span>';
    rankCheck();
    allStats();
}

function resetClicks(){
    let sC = getCookie("clicks");
    let askyn = confirm("Sure you want to reset clicks?\n\nCurrent clicks: " + _0x1029nn + "\nSaved clicks: " + sC + "\nCurrent rank: " + _0x3829qq + "\nCurrent multiplier: " + _0x940251);
    if(askyn){
        _0x1029nn = 0;
        document.getElementById("clicker").innerHTML = "click me to start!";
        document.cookie = "clicks=; expires=Thu, 18 Jan 1978 17:00:00 UTC; path=/clicker;";
        rankCheck()
        _0x3829qq = 0;
        _0x940251 = 1;
        document.getElementById("r1B").disabled = true;
        document.getElementById("r2B").disabled = true;
        document.getElementById("r3B").disabled = true;
        document.getElementById("r4B").disabled = true;
        document.getElementById("r5B").disabled = true;
        document.getElementById("r6B").disabled = true;
        document.getElementById("r1B").classList.remove("btnBought");
        document.getElementById("r2B").classList.remove("btnBought");
        document.getElementById("r3B").classList.remove("btnBought");
        document.getElementById("r4B").classList.remove("btnBought");
        document.getElementById("r5B").classList.remove("btnBought");
        document.getElementById("r6B").classList.remove("btnBought");
        allStats();
        alert("Resettet Everything!")
    }
}

function x2C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 1){
        alert("You need to be Rank 1, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 2;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    r1B = true;
    allStats();
}

function x5C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 2){
        alert("You need to be Rank 2, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 5;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r2B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    document.getElementById("r2B").classList.add("btnBought");
    r1B = true;
    r2B = true;
    allStats();
}

function x35C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 3){
        alert("You need to be Rank 3, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 35;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r2B").disabled = true;
    document.getElementById("r3B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    document.getElementById("r2B").classList.add("btnBought");
    document.getElementById("r3B").classList.add("btnBought");
    r1B = true;
    r2B = true;
    r3B = true;
    allStats();
}

function x70C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 4){
        alert("You need to be Rank 4, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 70;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r2B").disabled = true;
    document.getElementById("r3B").disabled = true;
    document.getElementById("r4B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    document.getElementById("r2B").classList.add("btnBought");
    document.getElementById("r3B").classList.add("btnBought");
    document.getElementById("r4B").classList.add("btnBought");
    r1B = true;
    r2B = true;
    r3B = true;
    r4B = true;
    allStats();
}

function x100C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 5){
        alert("You need to be Rank 5, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 100;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r2B").disabled = true;
    document.getElementById("r3B").disabled = true;
    document.getElementById("r4B").disabled = true;
    document.getElementById("r5B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    document.getElementById("r2B").classList.add("btnBought");
    document.getElementById("r3B").classList.add("btnBought");
    document.getElementById("r4B").classList.add("btnBought");
    document.getElementById("r5B").classList.add("btnBought");
    r1B = true;
    r2B = true;
    r3B = true;
    r4B = true;
    r5B = true;
    allStats();
}

function x250C(){
    if(_0x1029nn <= 0){
        alert("You have to start the game, before you can buy cheats!");
        return;
    }
    if(_0x3829qq < 6){
        alert("You need to be Rank 6, before you can buy this cheat!\n\nYour Rank: " + _0x3829qq);
        return;
    }
    _0x940251 = 250;
    document.getElementById("r1B").disabled = true;
    document.getElementById("r2B").disabled = true;
    document.getElementById("r3B").disabled = true;
    document.getElementById("r4B").disabled = true;
    document.getElementById("r5B").disabled = true;
    document.getElementById("r6B").disabled = true;
    document.getElementById("r1B").classList.add("btnBought");
    document.getElementById("r2B").classList.add("btnBought");
    document.getElementById("r3B").classList.add("btnBought");
    document.getElementById("r4B").classList.add("btnBought");
    document.getElementById("r5B").classList.add("btnBought");
    document.getElementById("r6B").classList.add("btnBought");
    r1B = true;
    r2B = true;
    r3B = true;
    r4B = true;
    r5B = true;
    r6B = true;
    allStats();
}