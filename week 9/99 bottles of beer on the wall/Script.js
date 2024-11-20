document.addEventListener("DOMContentLoaded", () => {
    const lyricsContainer = document.getElementById("song");

    let lyrics = "";
    for (let i = 99; i > 0; i--) {
        if (i > 1) {
            lyrics += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
            lyrics += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n\n`;
        } else {
            lyrics += `${i} bottle of beer on the wall, ${i} bottle of beer.\n`;
            lyrics += `Take one down and pass it around, no more bottles of beer on the wall.\n\n`;
        }
    }

    lyrics += "No more bottles of beer on the wall, no more bottles of beer.\n";
    lyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";

    lyricsContainer.textContent = lyrics;
});
