 const button = document.getElementsByClassName('keys');
 const input = document.getElementById('input');

 const keys = {
  keybinds:  [
{
    name: '`',
    cap: '~',
    id: 0,
    keybind: document.getElementById('key1'),
},
{
    name: '1',
    cap: '!',
    id: 1,
    keybind: document.getElementById('key2'),
},
{
    name: '2',
    cap: '@',
    id: 2,
    keybind: document.getElementById('key3'),
},
{
    name: '3',
    cap: '#',
    id: 3,
    keybind: document.getElementById('key4'),
},
{
    name: '4',
    cap: '$',
    id: 4,
    keybind: document.getElementById('key5'),
},
{
    name: '5',
    cap: '%',
    id: 5,
    keybind: document.getElementById('key6'),
},
{
    name: '6',
    cap: '^',
    id: 6,
    keybind: document.getElementById('key7'),
    
},
{
    name: '7',
    cap: '&',
    id: 7,
    keybind: document.getElementById('key8'),
},
    ],
    press(key){
        key.keybind.addEventListener('click', ( ) =>{
            input.innerHTML += key.name;
        })
    },
    each(){
        this.keybinds.forEach((key) =>{
             this.press(key);
           })
    }
};
keys.each();
 
 