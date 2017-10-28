$(document).ready(function () {
    //Sự kiện Click vào button Tìm trong trang TRA CỨU ĐĂNG KÝ ONLINE
    $("button#btn-tra-cuu-dkyonline").click(function (e) {
        e.preventDefault();
        var maDkyOnl = $("input#MaDkyOnl").val();
        if (maDkyOnl.trim() != "")
        {
            $(".ket-qua-tim-kiem #co-ket-qua").css("display", "block");
            $(".ket-qua-tim-kiem #khong-co-ket-qua").css("display", "none");
        }
        if (maDkyOnl.trim() == "")
        {
            $(".ket-qua-tim-kiem #co-ket-qua").css("display", "none");
            $(".ket-qua-tim-kiem #khong-co-ket-qua").css("display", "block");
        }

        
    });


    $("#btn-dky-KH").click(function () {
        window.location.assign("NV-dang-ky-khoa-hoc.html");
        $("table#table-dky-khoahoc").append("<tr><td id='maLop'>A1</td>\
                                                <td id='tenLop'>Lập trình căn bản</td>\
                                                <td id='soBuoi'>24</td>\
                                                <td id='buoiHoc'>2-4-6</td>\
                                                <td id='gioBatDau'>17g30</td>\
                                                <td id='gioiKetThuc'>19g30</td>\
                                                <td id='hocPhi'>200.000 VND</td></tr >"); 

    });

});