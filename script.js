 const button = document.getElementsByClassName('keys');
 const input = document.getElementById('input');
 const keys = [
{
    name: '`',
    cap: '~',
    id: 0,
    keybind: document.getElementById('key1'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '`';
         })
    }
},
{
    name: '1',
    cap: '!',
    id: 1,
    keybind: document.getElementById('key2'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '1';
         })
    }
},
{
    name: '2',
    cap: '@',
    id: 2,
    keybind: document.getElementById('key3'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '2';
         })
    }
},
{
    name: '3',
    cap: '#',
    id: 3,
    keybind: document.getElementById('key4'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '3';
         })
    }
},
{
    name: '4',
    cap: '$',
    id: 4,
    keybind: document.getElementById('key5'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '4';
         })
    }
},
{
    name: '5',
    cap: '%',
    id: 5,
    keybind: document.getElementById('key6'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '5';
         })
    }
},
{
    name: '6',
    cap: '^',
    id: 6,
    keybind: document.getElementById('key7'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '6';
         })
    }
},
{
    name: '7',
    cap: '&',
    id: 7,
    keybind: document.getElementById('key8'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML += '7';
         })
    }
},
    ];

keys.forEach((key) =>{
   key.pressed()
})
   
 