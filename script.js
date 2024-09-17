 const button = document.getElementsByClassName('key');
 const input = document.getElementById('input');
 const keys = [
{
    name: '`',
    cap: '~',
    id: 0,
    keybind: document.getElementById('key1'),
    pressed(){
         this.keybind.addEventListener('click', () =>{
            input.innerHTML = '`';
         })
    }
},
    ];
 button.addEventListener('click', () =>{
 input.textContent = " hello world";
 })
 input.textContent = "ed";
