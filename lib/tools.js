// DECLARED VARIABLES
var MediaTypes = require('../constants').mediaTypes;
var duration = 0,
    mediaResult = {
        audio: {
            formats: {},
            count: 0
        },
        video: {
            formats: {},
            count: 0
        },
        image: {
            formats: {},
            count: 0
        },
        text: {
            count: 0
        }
    };

var extractMediaContent = input => {

     input.forEach(media => {
        //IF TYPE IS OTHER THEN FIND SUB COMPOSITIONS & MANIPULATE
        if(media.type === MediaTypes.OTHER){
            return extractMediaContent(media.composition);
        }

        // SUM DURATION 
        duration += media.duration;
        // SUM COUNT FOR MEDIA TYPE 
        mediaResult[media.type].count++;
        // IF MEDIA TYPE IS NOT TEXT THEN CONTINUE ELSE BREAK
        if(media.type !== MediaTypes.TEXT){
            // FINDS FORMAT KEY ALREADY EXIST IN OBJECT THEN UPDATE ELSE DEFINE NEW FORMAT KEY
            if ( mediaResult[media.type].formats[media.format] ){
                mediaResult[media.type].formats[media.format] += 1;
            }else{
                DefinePropertyForFormat(mediaResult[media.type].formats, media.format);
            }
        }

     });

    return {
        duration : CalculateTime(duration),
        mediaResult
    };
}

// CREATE NEW FORMAT IN OBJECT
function DefinePropertyForFormat(object, key){
    Object.defineProperty(object, key, {  
        value: 1,
        writable: true,
        enumerable: true
    });
}

// CALCULATE SECONDS & MINUTES FROM MILISECONDS
function CalculateTime(duration) {
    return {
        seconds: parseInt((duration / 1000) % 60),
        minutes: parseInt(((duration / (1000*60)) % 60))
    };
}

module.exports.extractMedia = extractMediaContent;