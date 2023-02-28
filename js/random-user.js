const loadUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => displayUser(data))
}

const displayUser = user => {
    const gendertag = document.getElementById('gender')
    gendertag.innerHTML = user.results[0].gender
    const nameTag = document.getElementById('name')
    nameTag.innerHTML = user.results[0].name.first + '' + user.results[0].name.last;

    const titleTag=document.getElementById('title')
    titleTag.innerHTML=user.results[0].name.title;

    const locationTag=document.getElementById('location')
    locationTag.innerHTML=user.results[0].location.street.number;

    const pictureTag=document.getElementById('image')
    pictureTag.innerText=user.results[0].picture.medium

    console.log(user.results[0].picture.medium)
}


loadUser();