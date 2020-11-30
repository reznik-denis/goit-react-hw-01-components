export default function getRandomColor() 
{
    let color = "";
    for(let i = 0; i < 3; i += 1) {
        let sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length === 1 ? "0" + sub : sub);
    }
    return `#${color}`;
}

