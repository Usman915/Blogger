   var downloadUrl = document.querySelectorAll(".safe");
   for (let i = 0; i < downloadUrl.length; i++) {
            const dlink = downloadUrl[i].href;
     		var uncodeurl = dlink.href = btoa(dlink);
     		downloadUrl[i].href = safepageurl + "?o=" + uncodeurl;
        };
