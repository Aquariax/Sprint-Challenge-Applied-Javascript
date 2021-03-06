class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
     this.tabElement = tabElement;
    // Get the `data-tab` value from this.tabElement and store it here
     this.tabData = this.tabElement.dataset.tab; 
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    //console.log(this.tabData)
    this.tabsPart = document.querySelector(`.tab[data-tab='${this.tabData}']`)
    //console.log(this.tabsPart)
     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
    this.cards = new TabCard(this.tabData)
    //console.log(this.cards)
    // Add a click event that invokes this.selectTab
    this.tabElement.addEventListener('click', () => {this.selectTab()});
  }
  
  selectTab(){

    // Select all elements with the .tab class on them
     const tabs = document.querySelectorAll('.tab');
    
    // Iterate through the NodeList removing the .active-tab class from each element
     tabs.forEach(tabs =>{tabs.classList.remove('active-tab')})

    // Select all of the elements with the .card class on them
     const cards = document.querySelectorAll(`.card`);

    // Iterate through the NodeList setting the display style each one to 'none'
    cards.forEach(card => card.style.display= "none")
    
    // Add a class of ".active-tab" to this.tabElement
    this.tabElement.classList.add('active-tab');
  
    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
    this.cards.selectCard();
     
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
     this.cardElement = cardElement;
     
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    if(this.cardElement === "all"){
      let card = document.querySelectorAll(`.card`)
      card.forEach( card => card.style.display = "flex")
    }else{
      let card = document.querySelectorAll(`.card[data-tab='${this.cardElement}']`)
      card.forEach( card => card.style.display = "flex") 
    }
  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab')
tabs.forEach(tab => new TabLink(tab));