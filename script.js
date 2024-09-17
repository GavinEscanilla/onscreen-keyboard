 const button = document.getElementsByClassName('key');
 const input = document.getElementById('input');
 const keys = [
{
    name: '`',
    cap: '~',
    id: 0,
    keybind: document.getElementById('key1'),
},
    ];


    class keyboard{
        constructor(){
            this.pressed = button.addEventListener('click', () =>{
  input.innerHTML ++ 
            })
        }
    }
 

