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


    var i = 1; 
    //Lấy thông tin đăng ký lớp học lên bảng
    $("#btn-chon-lop-hoc").click(function (e) {
        e.preventDefault();

        if (error_ngaysinh == true || error_hotenHV == true ||
            error_diachi == true || error_SDT == true || error_CMND == true || error_email == true)
        {
           confirm("MỜI BẠN NHẬP ĐẦY ĐỦ THÔNG TIN CÁ NHÂN CỦA HỌC VIÊN");
        }
        else
        {
            //Mã lớp và tên lớp được lấy từ đáng ký
            var maLop = $("select#maLop").val();
            var tenlop = $("select#tenLop").val();
            //Các thông tin này được lấy từ CSDL theo mã lớp mà HV đó chọn
            var gioBatDau = "17g30";
            var gioKetThuc = "19g30";
            var soBuoiHoc = "24 buổi";
            var hocPhi = "500.000 VNĐ";



                                                           
            $('#table-dky-khoahoc > tbody').append(
                
                $('<tr>').append(
                    $('<td>').text("Lớp "+ i++)
                ).append(
                    $('<td>').text(tenlop)
                ).append(
                    $('<td>').text(gioBatDau)
                ).append(
                    $('<td>').text(gioKetThuc)
                ).append(
                    $('<td>').text(soBuoiHoc)
                ).append(
                    $('<td>').text(hocPhi)
                ).append(
                    $('<td>').append(
                    $('<a>').text('Xóa')
                        .css('cursor', 'pointer')
                        .click(function (e) {
                            e.preventDefault();
                            if (confirm("Bạn có chắc chắn muốn xóa lớp học này không?")) {
                                $(this).closest('tr').remove();
                            }
                        })
                    )
                )
            );
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