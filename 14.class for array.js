console.log(`---------Array---------`);
// Properties of array
// creation of array
// Accessing of Array
// Modifying of array
// Traversing of array
// In-builted methods of array
// Array structuring
// Assignments

// Properties:
// 1.Array is data structure used to store multiple value of different type of data.
// 2.Array is mutable, means use can change element of array creating also.
// 3.Array support indexing, array are dynamic.
// In javascript, array are Dynamic.
// Array have many in-builted methods.


// console.log(`---------------------------------Creation of Array :-----------------------`);
// // 1.using square([])
// let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`]
// console.log(stu_name)

// // using new keyword Array()
// let new_stu= new Array(`Babita`,`Shivani`,`tannu`,`Mehak`)
// console.log(new_stu)

// console.log(`----------------------Accessing of elements :----------------------`)
// let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
// let data=stu_name[(stu_name.length)-1];
// let i=stu_name.length;
// let data1=stu_name[i];
// console.log(data1);

// console.log(`--------------------------Modifiying of elements-------------------`)
//     let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
//     stu_name[2]=2000
//     stu_name[1]="dreamer infotech"
//     console.log(stu_name);

console.log(`--------------------------Traversing of elements-------------------`)
    // // 1.for loop
    // console.log(`---for loop-----`)
    // let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
    // let  size=stu_name.length
    // for(let i=0 ;size>1 ;i+=1){

    //     console.log(stu_name[i]);
    // }
    
    // //  2. for in loop
    // console.log(`------for in loop-----`)
    // let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
    // for (i in stu_name){
    //     console.log(stu_name[i],":",i)
    // }

    // //  3. for of loop
    // console.log(`------for of loop-----`)
    // let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
    // for (i of stu_name){
    //     console.log(i)
    // }

    // // 4.while loop
    // console.log(`-----While loop------`);
    // let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
    // let s=stu_name.length 
    // let i=0;
    // while(i<s)
    //     {
    //     console.log(stu_name[s-1])
    //     s--;
    // }

    // 4. Do while loop
    // console.log(`----- Do While loop------`);
    // let stu_name=[`Babita`,`Shivani`,`tannu`,`Mehak`];
    // let s=stu_name.length 
    // let i=0;
    // do
    //     {
    //     console.log(stu_name[i])
    //     i++;
    // } while(i<s)

    // ----------------------- In-builted Method of Array
    // console.log(`-------In-builted method --------`);
    // console.log(`---Push : Add an element last.---`);
    // let num=[2,5,10,15,20]
    // num.push(20)
    // console.log(num)

    // console.log(`---shift : Remove  element from start.---`);
    // let num=[2,5,10,15,20]
    // num.shift()
    // console.log(num)

    // console.log(`---unshift : Add element at start.---`);
    // let num=[2,5,10,15,20]
    // num.unshift(20)
    // console.log(num)

    // console.log(`---pop() : Remove element from last.---`);
    // let num=[2,5,10,15,20]
    // let poped=num.pop()
    // console.log(num)
    // console.log(poped)

    // console.log(`---Remove() : Return reversed element of array.---`);
    // let num=[2,5,10,15,20]
    // num.reverse()
    // console.log(num)

    // console.log(`---includes() : Return  the presence of element in the array.---`);
    // let num=[2,5,10,15,20]
    // data=num.includes(10)
    // console.log(data)

    // let num1=[2,5,10,15,20]
    // data=num1.includes(25)
    // console.log(data)

    // console.log(`---indexof() : Return  the index position of element in the array.---`);
    // let num=[2,5,10,15,20,25,30.35]
    // data=num.indexOf(20)
    // console.log(data)

    // console.log(`---lastindexof (): Return the last index of giving element in the array.----`);
    // let num =[2,4,5,67,2,89,56,10,2]
    // data=num.lastIndexOf(89);
    // console.log(data)

    // console.log(`----Concate()------`)
    // let first_c=["babita","shivani",'nisha',"laxmi","dev"];
    // let second_c=["nitesh","palak","monika"];
    // let third_c=first_c.concat(second_c)
    // console.log(third_c)


    // console.log(`----slice(start:0, endpoint): Return a shallow copy of a portion form statindex to endindex.------`)
    // let first_c=["babita","shivani",'nisha',"laxmi","dev"];
    // let second_c=first_c.slice(2,3);
    // console.log(second_c);
    // console.log(first_c); 

    // console.log(`---splice9startindex, deleteaccount, item1,item2----`)
    // // Remove():
    // let arr=[1,2,3,4,6,7,8,]
    // arr.splice(3)
    // // arr.splice(0)
    // console.log(arr)

    // console.log(`---Replace()------`);
    // let  arr=[1,2,3,5,6,7,9,3,5]
    // arr.splice(1,0,"babita","shivani")
    // console.log(arr)

    // ---------------------Array of Destructuring--------------;
    console.log(`---------Array of desstructuring----------`)
    // 1.Array destructuring allow you to unpack value from array or iterables into distinct variables.
    // It allow to store mulitple value of an array in single a variables

    // console.log(`--- 1.Basic Structuring---`)
    // let stu_name=["babita","shivani","dev","nisha"]
    // let [u1,u2,u3,u4]=stu_name;
    // console.log(u1,u2,u3,u4)

    // console.log(`--Skipping elements---`)
    // let stu_name=["babita","shivani","dev","nisha"]
    // let[u1 , , ,u2]=stu_name;
    // console.log(u1,u2)

    // console.log(`--Rest operators---`)
    // let stu_name=["babita","shivani","dev","nisha"]
    // let[u1 , ,u2,...all]=stu_name;
    // console.log(u1,u2)
    // console.log(all)


    // console.log(`---Default values---`)
    // let stu_name=["babita","shivani"]
    // let [u1,u2,,u3="nisha"]=stu_name;
    // console.log(u1)
    // console.log(u2)
    // console.log(u3)

    console.log(`-------Array structuring---------`);
    //1. Array structuring refers to the process of creating
    // a Array in a structured way ,either by directly assigning
    // values to it or by using the spread operator or rest operator.

    // // 1.Basic structuring.
    // let [a,b,c,d="x"]=[1,2,3,10];
    // console.log(a,b,c,d);

    // console.log(`----Swapping varibles----`)
    // let a="dreamer",b="infotech"
    // [a,b]=[b,a]
    // console.log(a,b)

    // console.log(`-----skipping varibles----`)
    let [u1,,u2,,u3]=['dreamer','infotech','faridabad','NIT','blb']
    console.log(u1)
    console.log(u2)
    console.log(u3)

    console.log(`---Spread operator---`)
    let a=[1,2,3];
    let b=[4,5,6];
    let c=[...b,...a];
    console.log(c)

    
    

    

    


    
    



    

    



