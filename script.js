const showDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    today =  `Today's date is ${dd}/${mm}/${yyyy}`
    let displayDate = document.getElementById('display-date')
    displayDate.innerHTML = today
}

const showJoke = () => {
    let jokes = ['What did the Buddhist ask the hot dog vendor? Make me one with everything.', 
                'What is red and smells like blue paint? Red paint.', 
                'Why aren’t koalas actual bears? The don’t meet the koalafications.', 
                'What do you call bears with no ears? B', 
                'Why dont blind people skydive? Because it scares the crap out of their dogs.', 
                'What’s a foot long and slippery? A slipper.', 
                'How did the hipster burn his mouth? He ate the pizza before it was cool.', 
                'An atheist, a Crossfitter, and a vegan walk into a bar. I know because they told me.', 
                'How does NASA organize a party? They planet.', 
                'What did the left eye say to the right eye? Between you and me, something smells.'];
    let randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    let displayJoke = document.getElementById('display-joke');
    displayJoke.innerHTML = randomJoke
}