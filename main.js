
document.getElementById('home-bg-icon-id').addEventListener('mouseover', function (e) {
    let t = e.target;

    if (t.tagName.toLowerCase() === 'i') {
        t.className = 'far fa-igloo';
        let home = document.getElementById('first-img');
        if (t.id.toLowerCase() === 'home-bg-icon-1')
            home.src = "./style/first1.jpg";
        else if (t.id.toLowerCase() === 'home-bg-icon-2')
            home.src = "style/first2.jpg";
        else if (t.id.toLowerCase() === 'home-bg-icon-3')
            home.src = "./style/first3.jpg";
        else if (t.id.toLowerCase() === 'home-bg-icon-4')
            home.src = "./style/first4.jpg";
    }
});

document.getElementById('home-bg-icon-id').addEventListener('mouseout', function (e) {
    let t = e.target;
    if (t.tagName.toLowerCase() === 'i') {
        t.className = 'fad fa-igloo';
    }
});


