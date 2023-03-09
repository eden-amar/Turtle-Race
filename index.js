const turtleRace = [
    {
        id: "leonardo",
        race: "race-1",
        speed: 2,
        backgroundColor: '#AED8E6',
        img: "img/ninja1.png"
    },
    {
        id: 'donatelo',
        race: "race-2",
        speed: 60,
        backgroundColor: '#B22322',
        img: "img/ninja2.png"
    },
    {
        id: 'michaelngelo',
        race: "race-3",
        backgroundColor: '#800080',
        speed: 8,
        img: "img/ninja3.png"
    },
    {
        id: 'refael',
        race: "race-4",
        speed: 5,
        backgroundColor: '#FEA500',
        img: "img/ninja4.png"
    },
]


function createRace(turtleRace) {
    for (let i = 0; i < turtleRace.length; i++) {
        const race = document.getElementById(turtleRace[i].race);
        const turale = document.createElement('img');
        turale.src = turtleRace[i].img;

        race.append(turale);

        race.style.height = '6em';
        race.style.display = 'flex';
        race.style.alignItems = 'center';
        race.style.backgroundColor = turtleRace[i].backgroundColor;

        turale.id = turtleRace[i].id;
        turale.style.position = 'relative';
        turale.style.left = 0;
        turale.style.padding = '1em';
        turale.style.width = '4em';
        turale.style.transition = 'left 1.3s linear'

    }
}

function tick() {

    const turtle1 = document.getElementById(turtleRace[0].id);
    const turtle2 = document.getElementById(turtleRace[1].id);
    const turtle3 = document.getElementById(turtleRace[2].id);
    const turtle4 = document.getElementById(turtleRace[3].id);


    const speed1 = parseInt(turtle1.style.left, 10);
    const stopSpeed1 = speed1 >= 93;
    if (stopSpeed1) {
        turtle1.style.left = '93%';
    }
    else {
        turtle1.style.left = speed1 + turtleRace[0].speed + '%';
    }

    const speed2 = parseInt(turtle2.style.left, 10);
    const stopSpeed2 = speed2 >= 93;
    if (stopSpeed2) {
        turtle2.style.left = '93%';
    }
    else {
        turtle2.style.left = speed2 + turtleRace[1].speed + '%';
    }

    const speed3 = parseInt(turtle3.style.left, 10);
    const stopSpeed3 = speed3 >= 93;
    if (stopSpeed3) {
        turtle3.style.left = '93%';
    }
    else {
        turtle3.style.left = speed3 + turtleRace[2].speed + '%';
    }

    const speed4 = parseInt(turtle4.style.left, 10);
    const stopSpeed4 = speed3 >= 93;
    if (stopSpeed4) {
        turtle4.style.left = '93%';
    }
    else {
        turtle4.style.left = speed4 + turtleRace[3].speed + '%';
    }

    setTimeout(tick, 1000 / 60);
}


function startRace() {
    const startButton = document.querySelector('.start');
    startButton.addEventListener('click', tick);
}



function resetRace() {

    const restart = document.querySelector('.restart');
    restart.addEventListener('click', resetRace);

    turtleRace.forEach((index) => {
        const turtle = document.getElementById(index.id);
        turtle.style.left = 0;
    })

}


createRace(turtleRace);
startRace();
resetRace();



