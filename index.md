# Get the free antivirus that isn't bad

Stop buying McAfee licenses. Start using Island.

<img src="download.png" class="download">
<script>
    document.querySelector(".download").addEventListener("click", async () => {
        let api = await fetch("https://api.github.com/repos/getisland/island/releases");
        let json = await api.json();
        let a = document.createElement("a");
        a.href = json[0].assets[0].browser_download_url;
        a.click();
    })
</script>

## Easy interface

![Beautiful interface](interface.png)

## Fast scans

It took us 1 minute and 20 seconds to scan our PC.
