var badRequest = false;
if (!window.location.search) { badRequest = true };
if (!badRequest) {

    var q = document.location.search.split('?')[1].split('.');
    var end = q[1]; var sub = q[0];

const base = "https://ncert.nic.in/textbook/pdf/";

const names = {
    1: 'Beehive',       // english Main
    2: 'Moments',       // english Supplementary
    3: 'Kshitij',       // hindi Main
    4: 'Sparsh',        // hindi Supplementary
    5: 'Mathematics',
    6: 'Science',
    7: 'Geography',
    8: 'Economics',
    9: 'History',
    10: 'Political Science'
};

const books = {
    1: 'e1',
    2: 'e2',
    3: 'h1',
    4: 'h2',
    5: 'm',
    6: 's',
    7: 'g',
    8: 'e',
    9: 'h',
    10: 'c'
};

const codes = {
    1: 'iebe1',
    2: 'iemo1',
    3: 'ihks1',
    4: 'ihkr1',
    5: 'iemh1',
    6: 'iesc1',
    7: 'iess1',         //1 geo
    8: 'iess2',         //2 economics
    9: 'iess3',         //3 history
    10: 'iess4',        //4 civics

};

const totalBooks = Object.getOwnPropertyNames(names).length;

for (var i = 1; i < totalBooks; i++) {
    
    if (sub == books[i]) {
        if(end.length==1){end = '0'+ end;}
        else if (end == 0) { end = "ps"};
        break;
    }

}

var full = base + codes[i] + end  + '.pdf';
window.location.replace(full);

}