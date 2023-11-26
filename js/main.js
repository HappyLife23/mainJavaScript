function mainSection() {
    // my mainSection
    const mainSection = document.createElement('section');

    // my mainSection three child elements
    const header = document.createElement('header');
    const main = document.createElement('main');
    const footer = document.createElement('footer');

    // appending my elements mainSection and childs
    document.body.appendChild(mainSection);
    mainSection.appendChild(header);
    mainSection.appendChild(main);
    mainSection.appendChild(footer);

    // my header child elements
    const content = document.createElement('div');
    const image = document.createElement('div');

    // giving my div-elements inside header each className
    content.classList.add('content')
    image.classList.add('image');

    // appendin my header childElements    
    header.appendChild(content);
    header.appendChild(image);

    // my main child elements
    const mainContent1 = document.createElement('div');
    const mainContent2 = document.createElement('div');
    const mainContent3 = document.createElement('div');

    // giving my main div-element same className
    mainContent1.classList.add('mainContent')
    mainContent2.classList.add('mainContent')
    mainContent3.classList.add('mainContent')

    // appending my main child divs with same class
    main.appendChild(mainContent1);
    main.appendChild(mainContent2);
    main.appendChild(mainContent3);

    // my footer child-elements
    const footerContent = document.createElement('div');

    // giving footer child-element a className
    footerContent.classList.add('footerContent');

    // appending my footer child-element
    footer.appendChild(footerContent)
}

mainSection();





function myBody() {
    
    
   

    
    
}
myBody();