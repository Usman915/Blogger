const timeDown =`<div class="download-container">
    <a href="#" class="download-btn"> <i class="fas fa-cloud-download-alt "></i> Download Now</a>
    <div class="sapnaitgk">Powered by <a href="https://www.sapnaitgk.com" >SapnaITGK</a></div>
    
    <div class="countdown"></div>
    <div class="pleaseWait-text">Please Wait...</div>
    <div class="direct-text">Direct Link <a class="direct">click here</a>.</div>
  </div>`;
document.write(timeDown);
 const downloadBtn = document.querySelector(".download-btn");
  const sapnaitgk = document.querySelector(".sapnaitgk");
  const countdown = document.querySelector(".countdown");
  const pleaseWaitText = document.querySelector(".pleaseWait-text");
  const directText = document.querySelector(".direct-text");
  var timeLeft = 3;
  var download = document.querySelector(".direct");
  var url_string = window.location;
  var url = new URL(url_string);
  var dLink = url.searchParams.get("o");
  var decodeurl = atob(dLink);

  downloadBtn.addEventListener("click", () => {
    sapnaitgk.style.display = "none";
    downloadBtn.style.display = "none";
    countdown.innerHTML = "Your download will start in <span>" + timeLeft + "</span> seconds."  //for quick start of countdown

    var downloadTimer = setInterval(function timeCount() {
      timeLeft -= 1;
      countdown.innerHTML = "Your download will start in <span>" + timeLeft + "</span> seconds.";
      if(timeLeft <= 0){
        	clearInterval(downloadTimer);
        	pleaseWaitText.style.display = "block";
            window.open(decodeurl, "_self");
            window.location.href = decodeurl;
        setTimeout(() => {
          	pleaseWaitText.style.display = "none";
        	directText.style.display = "block"
        }, 4000);
      }
    }, 1000);
  });
  download.addEventListener("click", () => {
            window.open(decodeurl, "_self");
  });
