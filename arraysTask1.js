var arrayNames = new Array("John", "Robert", "Jimmy", "Bonzo");

var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage = " ";

for(var a = 0; a < arrayNames.length; a++)
{
    stringMessage = stringMessage + arrayNames[a] + " plays " + arrayInstruments[a] + "\n";
}
alert(stringMessage);