/*
    Sơ đồ 3 khối
    INPUT: số bất kỳ

     PROCESS:
       1. Lấy input txtNum
       2. Dùng hàm for kiểm tra lần lượt các số từ 2 (do <2 thì => ko phải số nguyên tố) tới sô đã nhập
       3. Kiểm tra điều kiện với i chạy từ 2 tới i< sqpt(số đang chạy) xem số đó chia lấy dư cho i được không.
       4. Chạy 1 vòng lặp khác để lấy ra các số nhỏ hơn số đã nhập rồi đưa vào mảng kiểm tra số nguyên tố
       5. In ra màn hình các số nguyên tố trước số đã nhập

    OUTPUT: các số nguyên tố trước số đã nhập


*/




// Nhập vào ô input 1 số. Xuất ra các số nguyên tố từ 1 trước đó.
function kiemTraSNT(n)
{
	if (n < 2)    
        return 0;

    for (var i = 2; i <= Math.sqrt(n); i ++)
    {
        if (n%i===0)
        {
            return 0;
        }
    }
    return 1;
}
function prime(){
    var value = document.getElementById("txtNum").value*1;
    var contentHtml = '';
    for(var i = 0; i < value; i++)
	{
		if ( kiemTraSNT(i) == 1 )
		{
            contentHtml += i + " ";
		}
	}
    document.getElementById("result").innerHTML=contentHtml;
    
}