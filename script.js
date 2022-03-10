var badRequest = false;
if (!window.location.search) { badRequest = true };
if (!badRequest) {

    var q = document.location.search.split('?')[1].split('.');
    var end = q[1]; var sub = q[0];

const base = "https://ncert.nic.in/textbook/pdf/";
const books = {
      1:{   name:'Beehive',             subCode:'iebe1',    webCode:'e1'},
      2:{   name:'Moments',             subCode:'iemo1',    webCode:'e2'},
      3:{   name:'Kshitij',             subCode:'ihks1',    webCode:'h1'},
      4:{   name:'Sparsh',              subCode:'ihkr1',    webCode:'h2'},
      5:{   name:'Mathematics',         subCode:'iemh1',    webCode:'m'},
      6:{   name:'Science',             subCode:'iesc1',    webCode:'s'},
      7:{   name:'Geography',           subCode:'iess1',    webCode:'g'},
      8:{   name:'Economics',           subCode:'iess2',    webCode:'e'},
      9:{   name:'History',             subCode:'iess3',    webCode:'h'},
      10:{  name:'Political Science',   subCode:'iess4',    webCode:'c'}
    }
    books.length = Object.getOwnPropertyNames(books).length
    
    for(var i=1; i<books.length; i++){
      if(sub == books[i].webCode){ console.log("found : "+books[i].name); break;}
    }
      if(end.length==1){end = '0'+ end;}
        else if (end == 0) { end = "ps"};
    var full = base + books[i].subCode + end + '.pdf';
window.location.replace(full);

}
