var defaultComposition = require('../constants').defaultComposition,
    tools = require('../lib/tools')
    expect = require('chai').expect;


describe('PROCESS COMPOSITION FILE', function(){
    it('Will return 2 Audio count with default composition', function(){
        var result = tools.extractMedia(defaultComposition);
        expect(result.result.audio.count).to.eq(2);
    })

    it('Will return 3 Video formats with default composition', function(){
        var result = tools.extractMedia(defaultComposition);
        expect(Object.keys(result.result.video.formats).length).to.eq(3);
    })
});