module.exports.mediaTypes = Object.freeze({
    VIDEO: "video",
    AUDIO: "audio",
    TEXT: "text",
    IMAGE: "image",
    OTHER: "composition"
});

module.exports.defaultComposition = [
    {
      type: "video",
      id: 1,
      name: "video1",
      format: "mpeg",
      path: "test/path1/",
      duration: 5000,
      position: 1
    },
    {
      id: 5,
      type: "text",
      name: "text1",
      value: "test text1",
      duration: 1000,
      position: 2
    },
    {
      id: 15,
      type: "audio",
      name: "audio1",
      format: "mp3",
      path: "test/path1/",
      duration: 3000,
      position: 3
    }, 
    {
      id: 12,
      type: "video",
      name: "video2",
      format: "mpeg",
      path: "test/path1/",
      duration: 8000,
      position: 4
    },
    {
      id: 19,
      type: "image",
      name: "image1",
      format: "jpeg",
      path: "test/path1/",
      duration: 6000,
      position: 7
    },
    {
      id: 4,
      type: "video",
      name: "video3",
      format: "mpeg",
      path: "test/path1/",
      duration: 2000,
      position: 5
    },
      {
        position: 6,
        type: "composition",
        composition: [
          {
            id: 6,
            type: "image",
            name: "image11",
            format: "jpeg",
            path: "test/path1/",
            duration: 6000,
            position: 1
          },
          {
            position: 2,
            type: "composition",
            composition: [
              {
                id: 78,
                type: "image",
                name: "image11",
                format: "gif",
                path: "test/path1test/",
                duration: 6000,
                position: 1
              },
              {
                id: 234,
                type: "audio",
                name: "audio16",
                format: "ogg",
                path: "test/path12/",
                duration: 3000,
                position: 3
              }, 
              {
                id: 213,
                type: "video",
                name: "video2",
                format: "ogv",
                path: "test/path1/",
                duration: 4000,
                position: 4
              },
              {
                id: 675,
                type: "text",
                name: "text1",
                value: "test text4",
                duration: 1000,
                position: 2
              },
              {
                id: 34,
                type: "video",
                name: "video15",
                format: "mp4",
                path: "test/path1/",
                duration: 2000,
                position: 5
              }
            ]
          },
          {
            id: 1,
            type: "video",
            name: "video31",
            format: "mpeg",
            path: "test/path1/",
            duration: 2000,
            position: 3
          }
        ]
      }
  ];