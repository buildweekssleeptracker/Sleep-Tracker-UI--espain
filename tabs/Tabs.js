class TabLink {
    constructor(tabGoals){
      
        this.tabGoals = tabGoals;
        this.tabData = this.tabGoals.dataset.tab;
    
        if(this.tabData === 'all'){
        this.cards = document.querySelectorAll('.card');
        } else {
        this.cards = document.querySelectorAll(`.card[data-tab=${this.tabData}]`);
        }
        this.cards = Array.from(this.cards).map(card => new TabCard(card));
        this.tabGoals.addEventListener("click", ()=> this.selectTab())

    }


    selectTab(){
      
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active-tab'));
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => card.getElementsByClassName.display = 'none');
    this.tabGoals.classList.add('active-tab');
    this.cards.forEach(card => card.selectCard());

    }

}

class TabCard {
  constructor(cardGoals){
    this.cardGoals = cardGoals;  
  } 
  selectCard(){
     this.cardGoals.style.display = "flex"; 
  } 
}









// STart of the tabs Section 
let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink (tab));