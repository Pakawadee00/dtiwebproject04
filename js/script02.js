// console.log('BBBBBBBBB')
// statment
console.log(111)
console.log(222);
console.log(333); console.log(444); console.log(555)
// variabie ตัวแปร
var a = 100
let b = 200
console.log(a + b);
console.log(".....................");
//Scope /Block Scope --> มันคือ (???????) มันคือขอบเขตการทำงาน

{
    let e = 999
    {
        var c = 300
        let d = 400
        //console.log(a)
        //console.log(b)
        //console.log(c)
        console.log(e) 
    }
        //console.log(a);
        //console.log(b);
        //console.log(c);
        console.log(e);
    
}
        console.log(a);
        console.log(b);
        console.log(c);
        //console.log(e);

//constant ค่าคงที่
const DATA_A1 = 52
const INF01 = "Wow"
const INF02 = "Woo"
// INF01 = "Wow" error
console.log(INF01 + '@@@' + INF02)
console.log('SAU\nDTI\t\t2023')
console.log('I LOVE "SAU"')
console.log("I LOVE 'SAU'")
console.log('สวัสดี %s %d' , INF01 , DATA_A1)

{
    {
        const INF03 = 'Wee'
        console.log(INF03);
    }
    //console.log(INF03);
}
//console.log(INF03);
console.log(`Welcom....`)
let name = "สมชาย"
let year = 2000
let age = 15

//สวัสดี สมชาย คุณเกิดปี 2000 อายุ 15
console.log(' สวัสดี ' + yourname + ' คุณเกิดปี ' + year + ' อายุ ' + age + ' ปี ' + (20*5)) 

console.log(`สวัสดี $(yourname) คุณเกิดปี $(year) อายุ $(age) ปี $(20*5)`)


//String method
let data = '  Sootheast Asia University  '

console.log(data)
console.log(data.length)
console.log(data.trim)
console.log(data.trim().length)
console.log(data.toUpperCase())
console.log(data.toLowerCase())
console.log(data.substring(10))

let data2 = 'Welcome TO'
console.log(data2.substring(5))
console.log(data2.substring(3,9))
console.log(data2.replace(5))
console.log(data2.replace('To','To Thailand'))
console.log(data.replace('e','xxx'))
console.log(data.replaceAll('e','xxx'))





