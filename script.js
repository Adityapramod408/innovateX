// Object to hold superpowers for each star sign
const superpowers = {
    Aries: [
        "Forever vibe check after dark🧛🏻🦉🦇: Feel fully awake at midnight... and exhausted at 8 AM.",
        "Snack ninja🥷🏿🍗: Attract snacks into your bag, but only when you’re on a diet.",
        "whisper? Never!🤫🚫: Talk so loudly people hear you from the next room, even when you’re whispering.",
        "Bombastic side-eye 👀: Give side-eye glances that can be felt by anyone within a 5-mile radius."
    ],
    Taurus: [
        "sippin and nappin☕😴: Can drink 10 cups of coffee in a row... but still feel like napping.",
        "Shop-A-holic🛍🛒: You shop to lift your mood or relieve stress.",
        "Hide and seeker🫣👣: Hide something so well, even you can’t find it.",
        "Immovable Nappist🛏🕴🏻: Stay perfectly still while napping... until someone says your name."
    ],
    Gemini: [
        "2x rapper🗣🏃🏻‍♀: Speak a hundred words in under a second, but nobody understands a word.",
        "Meme wizards🧙🏼⚰: Make any situation resemble a meme, but only when no one’s recording.",
        "Name amnesiac👥🙁: So friendly but can't hold onto names.",
        "Thought Juggler😵‍💫💭: Think about multiple things simultaneously, and understand none of them."
    ],
    Cancer: [
        "Laughter-bomb 😂💣: Controlling laughter in serious situations is not in my vocabulary.",
        "padippi mode on📚🔋: You claim that you don't study but you are secretly cramming for an exam.",
        "MR perfect🩳🕶: Look perfectly presentable while wearing pajamas.",
        "Instant Nostalgia🎞🥰: Feel nostalgic about anything... even the soup you had yesterday."
    ],
    Leo: [
        "'Pick me' type💅🏼: Make a spotlight appear on you wherever you go... but no one notices.",
        "bathroom singer🛀🏻🎙: Sings like a pro when the shower is on.",
        "Lyrics disaster🎶🎤: Pro at singing but bad at lyrics.",
        "Master chef🔪🚒🔥: You think you're a pro but always set the kitchen on fire!"
    ],
    Virgo: [
        "Food weirdo🥒🍨🍪: A flavor explorer who whips up the weirdest combos.",
        "Chai wala 🫖: A chai addict who can't go a minute without their next sip.",
        "Perfectionist🕴🏻👜: You think life's a game and everything must be played perfectly!",
        "spoiler alert🎬🍿: You can't help but ruin the movie for everyone before the credits roll."
    ],
    Libra: [
        "Selfie addict🤳🏻💅🏼: Always ready for a selfie no matter the moment.",
        "Vibe buster😐: Instantly throw off the vibe with a single word, then fix it effortlessly.",
        "Snapolli👻: Snaps on snaps on snaps—it's a never-ending party.",
        "Praise finder🥹👏🏼: Reflect compliments back to people, confusing them into complimenting you twice."
    ],
    Scorpio: [
        "GPS gone wrong ❌📍: Google map is their GPS, but getting lost is their specialty.",
        "Secret Keeper🙊🤐: Magically remember all secrets... but only the ones you weren’t supposed to hear.",
        "Crybaby🍼😪: A total softie who cries at everything.",
        "Tubelight alert💡⚠: Your humor timing is like a tube light—delayed but eventually lit."
    ],
    Sagittarius: [
        "Wander-lost🌏: Find adventure everywhere... including at the grocery store.",
        "Relationship advicer🔐💘: Love guru without the love life.",
        "Outta mind🔥🕶: Generate random ideas, like 'go to the park at midnight,' for no reason.",
        "Perfect Packing🧳: Pack perfectly for trips, except for the most important item."
    ],
    Capricorn: [
        "Showtime skip🏃🏻‍♂💨: First to plan but first to skip.",
        "Decision dilemma😧: Always get caught in a web of decisions and can't choose.",
        "Late comer🕵🏻: Late to every event!",
        "The Ultimate Stalker🦹🏻‍♀ 🧐: Tell me everything about someone in two minutes - Challenge accepted."
    ],
    Aquarius: [
        "Weird Fact Generator👽: Summon weird facts no one understands.",
        "Attention seeker🧌: Create a scene that captures everyone's attention.",
        "Spontaneous no show👻: Cancel on friends because you found a new adventure.",
        "Joke jetpack🤡😆: Take your humor to new heights, no one can resist your hilarious vibes!"
    ],
    Pisces: [
        "Mystic Aroma🐽😣: Smell like lavender or ocean waves without perfume... but only to yourself.",
        "Floating Mind🚣🏻‍♀🌊: Daydream so intensely that you forget where you are... and start floating a little.",
        "Earthquake dance⚡💃🏻🕺🏻: Shake the ground with your dance moves and turn any space into a party.",
        "Chit-Chat Telepathy💁🏻🤓: Instantly know what someone's gonna say before they even say it."
    ]
};

// Function to handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const starSign = document.getElementById('starsign').value;

    // Check if star sign is selected
    if (starSign) {
        const powers = superpowers[starSign];
        const powerList = powers.map(power => `<li>${power}</li>`).join('');
        const message = `<h2>${name}, your superpowers are:</h2><ul>${powerList}</ul>`;
        
        // Display the superpowers (you can change this to your preferred way of displaying)
        document.body.insertAdjacentHTML('beforeend', message);
    } else {
        alert('Please select a star sign!');
    }
});
