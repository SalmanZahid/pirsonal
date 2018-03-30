var MediaTypes = require('../constants').mediaTypes;
var duration = null,
    result = {};

// MAIN ALGO TO EXTRACT MEDIA COMPOSITION INFO
var extractMediaContent = input => {
    // DEFINE RESULT STRUCTURE
    duration = 0;
    result = {
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

    // EXTRACT MEDIA INFORMATION
    extractInformation(input);

    // RETURNS RESULT
    return {
        duration : CalculateTime(duration),
        result
    };
}

function extractInformation(input){
    input.forEach(media => {
        //IF TYPE IS OTHER THEN FIND SUB COMPOSITIONS & MANIPULATE
        if(media.type === MediaTypes.OTHER){
            return extractInformation(media.composition);
        }
        // SUM DURATION 
        duration += media.duration;
        // SUM COUNT FOR MEDIA TYPE
        result[media.type].count++;
        // IF MEDIA TYPE IS NOT TEXT THEN CONTINUE ELSE BREAK
        if(media.type !== MediaTypes.TEXT){
            // FINDS FORMAT KEY ALREADY EXIST IN OBJECT THEN UPDATE ELSE DEFINE NEW FORMAT KEY
            if ( result[media.type].formats[media.format] ){
                result[media.type].formats[media.format] += 1;
            }else{
                DefinePropertyForFormat(result[media.type].formats, media.format);
            }
        }
     });
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