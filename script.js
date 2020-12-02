let info = document.getElementById('info');

function gen(){
    var typeNumber = 4;
    var errorCorrectionLevel = 'L';
    var qr = qrcode(typeNumber, errorCorrectionLevel);
    let str = info.value;
    if(str.length>2){
        qr.addData(str);
        qr.make();
    }
    else
        alert("Enter morethen 2 charector.");
    document.getElementById('placeHolder').innerHTML = qr.createImgTag(4,5,"qrCode");
}