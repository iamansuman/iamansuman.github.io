const spotifyTrackIDsStore = [
    '6g1NlCpW7fgqDnWbCCDrHl',   //Wake me up
    '6WbADFqMvR8N5u0BvtsWQE',   //Without You
    '1nO67wic65N413c11zKxM7',   //Silhouettes
    '2x0RZdkZcD8QRI53XT4GI5',   //SOS
    '0vrmHPfoBadXVr2n0m1aqZ',   //Heaven
    '1yfyIdEw5U2bD5I6gxQCxW',   //Tough Love
    '6NVjujGb9fnl25fjzm5dTy',   //Freak
    '6EBlOYNcZ8MrdEov9lEdV6',   //Hold The Line
    '7DoN0sCGIT9IcLrtBDm4f0',   //Lonely Together
    '1pGnyWdri6sC7lHmYdX1TH',   //You Make Me
    '3HKV2TCxpAAlHQphu4cJD0',   //Liar Liar
    '3XfGM99TOeyPsnDtgTqtkT',   //Addicted to You
    '3uEu7hcvgrSOrgnMxzqugh',   //Pure Grinding
    '2eGxoza48lVK6jtmQ0g1yR',   //I Could be the one
    '19XDJlw6WxC4XOKC1LGKid',   //Drowning
    '7McyFHuwBA8n10GnovV4Zo',   //Beautiful Heartbeat
    '4HulmrpL8ZdcpY9817B0Qt',   //New New New
    '4lJNen4SMTIJMahALc3DcB',   //Thunderclouds
    '6Dma0t0hOe6Bd6u5YRKF3n',   //No New Friends
    '47OVNnZJzIkrsEiZ4n187p',   //Mama
    '5ZUIPLoTLJZrPQh2kFZEUM',   //Addicted
    '77Y7tccX9Hx5iClDr39uy9',   //Hollywood's Bleeding
    '2iUXsYOEPhVqEBwsqP70rE',   //YoungBlood
    '0hNduWmlWmEmuwEFcYvRu1',   //Sunset Lover
    '4Dvkj6JhhA12EX05fT7y2e',   //As It Was
    '1YWr18dWRmuvPgAsPBsOow',   //Forget You
    '59IA01UnxFiJhxWXpG24mM',   //Disco Cone
    '6sg284TefDkBpFh0317Agp',   //Needs
    '4HDC7Mo6uLTujRvHymiXDf',   //Mwaki
    '6QgjcU0zLnzq5OrUoSZ3OK',   //Feel it Still
    '5EWPGh7jbTNO2wakv8LjUI',   //Free Bird
    '1v6CmIvbcquM8rKR33Kc6e',   //Life Could be a dream
    '4axSuOg3BqsowKjRpj59RU',   //Carolina
    '0ug5NqcwcFR2xrfTkc7k8e',   //Style
    '2K7xn816oNHJZ0aVqdQsha',   //Softcore
    '1SdItcSOTD14tvIo8UzA6k',   //Summer Vibe
    '4aSfgWmRa9KsISD4Jmx7QB',   //This town
    '3ZCTVFBt2Brf31RLEnCkWJ',   //everything I wanted
    '7cflqPPi3zWfLFRRBTWeh6',   //talk is overrated
    '6qJrmD6CXKWkWcsYwu9AV3',   //Aathma Raama
    '0ce9G1z2SstCXHJ9gTg6PB',   //Pani da
    '3APdIdF8H0jsxSuGOqXedS',   //Kabhi Kabhi Aditi
    '3uB2mkp8ovjiuJA734dbGe',   //Chalo Chalein
    '7qigtGsmiJ9U41jqQ19VzH',   //Faagun Haway
    '5mPaoaZenCkrQGmL3XM6u6',   //Amar Praner Manush
];
const spotifyTrackIDs = [...spotifyTrackIDsStore];
const discardedSpotifyIDs = [];


window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const spotifyEmbed = document.getElementById('spotify-embed');
    const randomBtn = document.getElementById('music-show-random');
    const lastBtn = document.getElementById('music-show-last');
    lastBtn.classList.add('disabled');
    const options = { uri: 'spotify:track:4PTG3Z6ehGkBFwjybzWkR8', width: '70%' };
    const callback = (EmbedController) => {
        randomBtn.addEventListener('click', () => {
            if (spotifyTrackIDs.length == 0) {
                for (let i = 0; i < spotifyTrackIDsStore.length; i++) spotifyTrackIDs.push(spotifyTrackIDsStore[i]);
                discardedSpotifyIDs.length = 0;
            }
            const trackIndex = Math.floor(Math.random() * spotifyTrackIDs.length);
            const trackID = spotifyTrackIDs.splice(trackIndex, 1)[0];
            discardedSpotifyIDs.push(trackID);
            EmbedController.loadUri(`spotify:track:${trackID}`, true);
            EmbedController.play();
            if (discardedSpotifyIDs.length <= 1) lastBtn.classList.add('disabled');
            else lastBtn.classList.remove('disabled');
        });
        lastBtn.addEventListener('click', () => {
            EmbedController.loadUri(`spotify:track:${discardedSpotifyIDs.pop()}`, true);
            EmbedController.play();
            if (discardedSpotifyIDs.length == 0) lastBtn.classList.add('disabled');
            else lastBtn.classList.remove('disabled');
        });
        
    };
    IFrameAPI.createController(spotifyEmbed, options, callback);
}
