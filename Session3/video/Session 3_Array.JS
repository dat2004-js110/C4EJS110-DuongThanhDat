// Ex 1: Init (after 2):Initialize an array named movies containing the titles of some of your favorite movies
// {
//     let movie = ["game of thrones, the walking dead, godfarther"];
// }

// Ex 2:Create (after 4) Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users
/*{
        let newMovie = prompt("Nhập tên phim bạn muốn add vào list film?");
        let movie = ["game of thrones, the walking dead, godfarther"];
            movie.push(newMovie);
        alert(movie);
}*/

// Ex 3:Read (after 5) Read the item at position i in the movies array, i entered by users
/*{
    let i = prompt(" nhập số tên film bạn muốn xem (1-6)?");
    if(i<=6){
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    alert(movie[i-1]);
    }
    else{
        alert("tên cảu film bạn nhập sai haỹ nhập từ 1-6");
    }
}*/

// Ex 4.1:Update the first item of the movies array into movieTitle, movieTitle entered by users
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let movieTitle = prompt("Enter name of movie you want to update");
    movie[0] = movieTitle;
    alert (movie);
}*/

//Ex 4.2: Update a item at position i of the movies into movieTitle, i and movieTitle entered by users
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let movieTitle = prompt("Nhập tên phim bạn muốn thay đổi?");
    let i = Number(prompt("Nhập vị trí phim bạn muốn thay đổi( từ 1-6)"));
    if(i<=6){
        movie[i-1] = movieTitle;
        alert(movie);
    }
    else {
        alert("vị trí bạn muốn thay đổi sai( nhập từ 1-6)") ;
    }
}*/

//Ex 5.1: Delete 1 item at position i from movies array movies, i entered by users
{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let = `List movies have ${movie.length}`
    for(let x in movie)
{
    x = Number(x);
    console.log(`${x+1}. ${movie[x]}`)
}

    let i = Number(prompt("Nhập vị trí phim bạn muốn xóa ( từ 1-6)"));
    if(i<=6)    
    {
        movie.splice(i-1,1);
        alert(movie);
    }
    else
    {
            alert=("bạn nhập sai số tên phim muốn xóa, nhập từ 1-6");
    }
}

//Ex 6 .1:Read or log all of items in movies array into console
/*{
    let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero'];
    for (let i = 0; i < movie.length; i++) {
        console.log(movie[i]);
        }
}*/

//Ex 6.2 :Read or log only first half items in movies array into console
/*{
    let movie = ['Batman', 'Up', 'Attack on titans', 'My boss my hero',];
    let halfList = movie.length/2;
    for (let i = 0; i < movie.length; ++i) {
        console.log(movie[i]);
    }
}*/

//Ex 6.3: Read or log all of items in movies array into console with the item position, for example
/*{
    let movie = ["game of thrones", "the walking dead", "godfarther", "bố già", "gái già lắm chiêu","naruto"];
    let = `List movies have ${movie.length}`
        for(let x in movie)
    {
        x = Number(x);
        console.log(`${x+1}. ${movie[x]}`)
    }
}*/
