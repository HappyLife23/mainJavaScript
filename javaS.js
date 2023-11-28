const header = document.querySelector('.header');

async function david() {
    const response = await fetch('./json/data.json'); // 

    if (response.ok) {
        const jsonsInnhehåll = await response.json();

        showProfiles(jsonsInnhehåll);

    } else {
        console.log('Error' + response.status);
    }

}

function showProfiles(jsonsInnhehåll) {
    
    //const div = document.createElement('div');
    //div.classList.add('header-div');
    //header.appendChild(div);

    jsonsInnhehåll.profiles.forEach(profile => {

        const h1 = document.createElement('h1');
        h1.textContent = profile.name;
        header.appendChild(h1);

        const h4 = document.createElement('h4');
        h4.textContent = profile.topic;
        header.appendChild(h4);

        const para = document.createElement('p');
        para.textContent = profile.description;
        header.appendChild(para);

        const para2 = document.createElement('p');
        para2.textContent = profile.experience;
        header.appendChild(para2);

        const img = document.createElement('img');
        img.src = profile.profilePicture;
        header.appendChild(img);

        
    });
};

david();