async function getJSON() {
    const response = await fetch('./json/data.json');
    
    if (response.ok) {
        const json = await response.json();
        getJSON(json);
        //console.log(`this should work ${json}`)
        
        
    } else {
        console.log('Error' + response.status)
    }
    
    
}


// create a header
function header() {
    const header = document.createElement('header')
    //headerDiv.classList.add ('headerDiv');
    document.body.appendChild(header);


    // creating a h1 inside my header with content
    const h1 = document.createElement('h1');
    header.appendChild(h1);
    h1.textContent = 'Welcome to my website';

    // creating two div inside my header with a class name
    const firstDivHedaer = document.createElement('div');
    firstDivHedaer.classList.add('first-div-header');
    header.appendChild(firstDivHedaer);

    const h2 = document.createElement('h2');
    h2.textContent = 'David Heidari';
    firstDivHedaer.appendChild(h2);

    // creating a p-element insdide my firstDivHeader
    const para = document.createElement('p');
    para.textContent = 'Som VD för vårt framstående företag leder jag en passionerad och kompetent team mot framgång och innovation. Genom strategiskt ledarskap och engagemang för kvalitet strävar vi ständigt efter att överträffa förväntningarna och forma en framtid av framgång.';
    firstDivHedaer.appendChild(para);

    // creating a h2-element insdie my firstDivHeader
    const h4 = document.createElement('h4');
    h4.textContent = 'VD'
    firstDivHedaer.appendChild(h4);

    // creating an image inside my firstDivHeader
    const img = document.createElement('img');
    img.src = './assets/ceo.jpg';
    firstDivHedaer.appendChild(img);

    // create a button 
    const button = document.createElement('button');
    button.textContent = 'Read more';
    firstDivHedaer.appendChild(button);




    





    // creating a div inside my header with a class name
    const secondDivHeader = document.createElement('div');
    secondDivHeader.classList.add('second-div-header');
    header.appendChild(secondDivHeader);

  
    
}
// create a main
function main() {
    const main = document.createElement('main');
    document.body.appendChild(main);
}
// create a footer
function footer() {
    const footer = document.createElement('footer');
    document.body.appendChild(footer);
    
}


// in header you need at least 2 div with different className 
// create a mainDiv
// in mainDiv you need at least 3 div with diffeerent className maybe??
// create a footerDiv
// one divChildElement to our footer


getJSON();
header();
main();
footer();
