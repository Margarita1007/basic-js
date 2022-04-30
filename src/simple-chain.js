const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: '',
  currentPosinion: 0,
  links: [],
  
  getLength() {
    return this.currentPosinion;
  },
  addLink(value) {
    let int = '~~';
    if (value === undefined) 
    {
    this.links.push({position: ++this.currentPosinion, link: '( )' + int});
    }
    else {
      //if (value === null) {value = null} else {
    this.links.push({position: ++this.currentPosinion, link: `( ${value} )` + int});}
  // }
    return (this) ;
     
  },
  removeLink(position) {
    //try {
      if (((position % 1) > 0) || (position <= 0) || (position == 'NaN') || (typeof position !='number') || (position > this.currentPosinion)) 
      { 
        
        chainMaker.finishChain();
       throw new Error('You can\'t remove incorrect link!');
    } else {
      this.links.splice(position-1,1);
     return this;}

   /* }
   // return this;

   //catch {
     /*if (((position % 1) > 0) || (position <= 0) || (position == 'NaN') || (typeof position !='number') || (position > this.currentPosinion)) 
      { delete this;
        throw new Error('You can\'t remove incorrect link!');
    }
    
 // } */
 // return this;
    
  },
  reverseChain() {
    this.links.reverse();
    return this;
    
  },
  finishChain() {
    let prev = ' ';
    this.chain = this.links.reduce((prev, current) => prev + current.link, '');
    let result = this.chain.slice(0, this.chain.length-2);
    chainMaker.links=[];
    chainMaker.currentPosinion=0;
    chainMaker.chain='';
    return result;

  }
};

//console.log(typeof chainMaker.addLink(1).addLink(2).finishChain())
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(3).finishChain()),
//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), chainMaker)

module.exports = {
  chainMaker
};
