var vm = new Vue ({
    el: '#app',
    data: {
        capabilities: [
            {number: 1, text: 'Cut time and cost. Only costs are Exhibition and Negotiation chat fees.', image: 'assets/img/img014.png'},
            {number: 2, text: 'Match with companies internationally.', image: 'assets/img/img017.png'},
            {number: 3, text: 'Chat casually. Use stickers!', image: 'assets/img/img016.png'},
            {number: 4, text: 'Chat in multiple languages.', image: 'assets/img/flag.png'}
        ]
    }
});

var tr = new Vue ({
    el: '#new',
    data: {
        accomplishments: [
            {task: 'You would need to download apps or software to match online.*', solution: 'No need to purchase to PC or Smartphone. Use it directly. Quick and Easy!', image:'assets/img/img011.png' },
            {task: 'You do not know how much people are viewing or how they are responding.*', solution: 'You can check how much one is viewing, or interested in your company.', image:'assets/img/img013.png' },
            {task: 'You are hosting events and webinars, but the negotiation rate is underwhelming.*', solution: 'By using the stickers in the chat, you will have a smoother communication.', image:'assets/img/img012.png' },
        ]
    }
})