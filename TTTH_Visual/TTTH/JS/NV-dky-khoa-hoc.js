$(document).ready(function () {

    //Sẽ lấy mã học viên tiếp theo nếu đăng ký
    $("#maHocVien").val("HV1");
    //Set ngày sinh là ngày bất kỳ
   
   

    /////VALIDATE NHẬP THÔNG TIN CÁ NHÂN CỦA HỌC VIÊN
    //Ẩn thông báo lỗi và khai báo cờ
    $("#error-ngaysinh").hide();
    $("#error-hotenHV").hide();
    $("#error-diachi").hide();
    $("#error-SDT").hide();
    $("#error-CMND").hide();
    $("#error-email").hide();
    var error_ngaysinh = true, error_hotenHV = true, error_diachi = true, error_SDT = true, error_CMND = true, error_email=true;

    $("#ngaysinh").focusout(function () {
        var ngaysinh = $("#ngaysinh").val();
        if (ngaysinh == "")
        {
            $("#error-ngaysinh").html(" Mời bạn nhập ngày sinh học viên");
            $("#error-ngaysinh").show();
            error_ngaysinh = true;
        }
        else
        {
            $("#error-ngaysinh").hide(); 
            error_ngaysinh = false;
        }
    });
    $("#hoTenHV").focusout(function () {
        var hotenHV = $("#hoTenHV").val().trim().length;  
        if (hotenHV <= 0)
        {
            $("#error-hotenHV").html(" Mời bạn nhập tên học viên");
            $("#error-hotenHV").show();
            error_hotenHV = true;
        }
        else
        {
            $("#error-hotenHV").hide();
            error_hotenHV = false;
        }
    });
    $("#diachi").focusout(function () {
        var diachi = $("#diachi").val().trim().length;
        if (diachi <= 0)
        {
            $("#error-diachi").html(" Mời bạn nhập địa chỉ học viên");
            $("#error-diachi").show();
            error_diachi = true;
        }
        else
        {
            $("#error-diachi").hide();
            error_diachi = false;
        }
    });
    $("#SDT").focusout(function () {
        var diachi = $("#SDT").val().trim().length;
        if (diachi <= 0)
        {
            $("#error-SDT").html(" Mời bạn nhập số điện thoại học viên");
            $("#error-SDT").show();
            error_SDT = true;
        }
        else
        {
            $("#error-SDT").hide();
            error_SDT = false;
        }
    });
    $("#CMND").focusout(function () {
        var diachi = $("#CMND").val().trim().length;
        if (diachi <= 0)
        {
            $("#error-CMND").html(" Mời bạn nhập số CMND học viên");
            $("#error-CMND").show();
            error_CMND = true;
        }
        else
        {
            $("#error-CMND").hide();
            error_CMND = false;
        }
    });
    $("#email").focusout(function () {
        var diachi = $("#CMND").val().trim().length;
        if (diachi <= 0)
        {
            $("#error-email").html(" Mời bạn nhập email liên lạc với học viên");
            $("#error-email").show();
            error_email = true;
        }
        else
        {
            $("#error-email").hide();
            error_email = false;
        }
    });



    //Lấy thông tin đăng ký lớp học lên bảng
    $("a#btn-chon-lop-hoc").click(function (e) {
        e.preventDefault();

        if (error_ngaysinh == true || error_hotenHV == true ||
            error_diachi == true || error_SDT == true || error_CMND == true || error_email == true)
        {
           confirm("MỜI BẠN NHẬP ĐẦY ĐỦ THÔNG TIN CÁ NHÂN CỦA HỌC VIÊN");
        }
        else
        {
            //Mã lớp và tên lớp được lấy từ đáng ký
            var maLop = "<td>" + $("select#maLop").val() + "</td>";
            var tenlop = "<td>" + $("select#tenLop").val() + "</td>";
            //Các thông tin này được lấy từ CSDL theo mã lớp mà HV đó chọn
            var gioBatDau = "<td>17g30</td>";
            var gioKetThuc = "<td>19g30</td>";
            var soBuoiHoc = "<td>24 buổi </td>";
            var hocPhi = "<td>500.000 VNĐ </td>";

            //Đưa thông tin lên bảng
            $("table#table-dky-khoahoc").append("<tr>" + maLop + tenlop + gioBatDau
                + gioKetThuc + soBuoiHoc + hocPhi
                + "<td><a id='xoa-lop-hoc'>Xóa</a></td></tr>");


            //Sự kiện xóa lớp đã đăng ký
            $("#table-dky-khoahoc #xoa-lop-hoc").on("click", function (e) {
                //e.preventDefault();
                //Lấy mã lớp tại hàng vừa click
                //var maLopDel = $(this).closest('tr').find('td:first').text();

                $(this).closest('tr').remove();

                //if (confirm("Bạn có chắc chắn muốn xóa lớp học này không?")) {
                //    $(this).closest('tr').remove();
                //    return true;
                //}
                return false;
            });
        }
    });


    $('#btn-thanhtoanHP').click(function () {

        var n = $("#table-dky-khoahoc > tbody").find("> tr:first").length; 
        

        if (error_ngaysinh == false || error_hotenHV == false ||
            error_diachi == false || error_SDT == false || error_CMND == false || error_email == false)
        {            
            if (n == 0) {
                alert("MỜI BẠN ĐĂNG KÝ LỚP HỌC CHO HỌC VIÊN");
            }
            else
                window.location.assign("NV-thu-hoc-phi.html");
        }
        else {
            alert("MỜI BẠN NHẬP ĐẦY ĐỦ THÔNG TIN HỌC VIÊN");
        }

    });
});