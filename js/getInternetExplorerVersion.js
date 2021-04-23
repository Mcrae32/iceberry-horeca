var selectObj;
selectObj = document.getElementsByClassName("hideComp");

var openImg;
openImg = document.getElementsByClassName("hideMob");


function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
    else if (navigator.appName == 'Netscape')
    {
        var ua = navigator.userAgent;
        var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat( RegExp.$1 );
    }
        
    return rv;
};

if(getInternetExplorerVersion()==9 || getInternetExplorerVersion()==8){

  var ArrayAnim = selectObj;
  for (var i = 0; i < ArrayAnim.length; i++) {
    ArrayAnim[i].style.display="none";
  };

  var ArrayImage = openImg;
  for (var j = 0; j < ArrayImage.length; j++) {
    ArrayImage[j].style.display="inline";
  };
  
};





