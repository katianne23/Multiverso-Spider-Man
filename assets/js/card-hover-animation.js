function handleMouseEnter(){
    this.classList.add('s-card--hovered');
    document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave(){
    this.classList.remove('s-card--hovered');
    document.body.id = ``;
}

function addEventListersToCards(){
    const cardElements = document.getElementsByClassName('s-card');
    console.log(cardElements);

    for (let i = 0; i < cardElements.length; i++) {
        const card = cardElements[i];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded" , addEventListersToCards, false);