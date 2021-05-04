//Ex 1: Cho n số nguyên liên tiếp từ 0 đến n-1 được biểu diễn trên một vòng tròn, khoảng cách giữa các số bằng nhau (và tất nhiên là 0 và số n-1 cũng ở cạnh nhau). Biết rằng n là số nguyên dương chẵn nằm trong khoảng từ 4 đến 20Viết hàm findOppositeNumber(n, inputNumber) cho trước 2 tham số đầu vào là n và inputNumber tồn tại trong dãy. Tìm số đối diện với số inputNumber đó (0 <= inputNumber <= n - 1)
    function findOppositeNumber(n,inputNumber){
        let i = n/2;
        if(i > inputNumber){
        let kQ = i + inputNumber;
        alert (kQ)
        } else{
        let kQ = inputNumber - i;
        alert (kQ)
        }
    }
    // findOppositeNumber(10,2);
//Ex 2:Viết 1 hàm nhận vào 2 chuỗi s1 và s2, trả về đầu ra là một chuỗi mới chứa các kí tự xen kẽ cùng vị trí vị trí của 2 chuỗi với nhau.
    function merge2String(){
        let s1 = "abcd";
        let s1lenght = s1.length;
        let s2 = "1234";
        let s2lenght = s2.length;

        let c = "";
        if (s1lenght < s2lenght){
        for (i=0; i<s1.length ;i++) {
            c = c + s1[i] + s2[i];      
            };
              
            for(i=s1lenght; i < s2lenght; i++){
                c = c + s2[i];
            }
        } else {
            for (i=0; i<s2.length ;i++) {
                c = c + s1[i] + s2[i];      
            };
            
            for(i=s2lenght; i < s1lenght; i++){
                c = c + s1[i];
            }
        }      
        console.log(c);
    }
merge2String();
//Ex 3
function ketqua(){
    let list = [1,2,3,4,5,6,7,8,9,10];
    let random = Math.floor(Math.random() * list.length);
    // 
    let inputNumber = document.getElementById("intNumber");
    
}
ketqua()