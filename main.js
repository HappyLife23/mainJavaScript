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


// create a headerDiv
// in header you need at least 2 div with different className 
// create a mainDiv
// in mainDiv you need at least 3 div with diffeerent className maybe??
// create a footerDiv
// one divChildElement to our footer


getJSON();