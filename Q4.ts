// const etiquetas = (produto : string, lote : number, ano: number, qtd: number): string => {
//     let n : string = '';
//     for (let i = 1; i <= qtd ; i++) {
//         n += `${lote}-${ano}-0${i} \n`
//     }
//     return n
// }

// console.log(etiquetas('amd5000',321,2022,10));


const etiquetas = (info: {produto : string, lote : number, ano: number, qtd: number}): string[] => {
    const n : string[] = [];
    for (let i = 1; i <= info.qtd ; i++) {
        n.push(`${info.lote}-${info.ano}-${i.toString().padStart(3,'0')}`)
    }
    return n
}

console.log(etiquetas(    {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 123,
    ano: 2024,
    qtd: 10
}));
