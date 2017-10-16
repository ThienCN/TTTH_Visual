$(function () {
    //Khi khởi chạy chương trình thì các thông báo lỗi sẽ bị ẩn đi
    $("#error-user").hide();
    $("#error-pass").hide();
    $("#error-login").hide();

    //Cờ cho 2 thông báo lỗi: username, password
    var error_user=false;
    var error_pass = false;

    //Khi di chuyển chuột ra khỏi textbox username: ta sẽ kiểm tra username có hợp lệ không
    $("#txt-user").focusout(function() { 
        CheckUseName();        
    });
    //Khi di chuyển chuột ra khỏi textbox password: ta sẽ kiểm tra password có hợp lệ không
    $("#txt-pass").focusout(function() { 
        CheckPass();  
    });
    //Kiểm tra thông tin đăng nhập đã đúng và hợp lệ không    
    $("#btnLogin").click(function (e) {
        e.preventDefault();
        CheckLogin();        
    });
    

    //Hàm kiểm tra username có hợp lệ không
    function CheckUseName() {
        var user_length = $("#txt-user").val().length;

        if (user_length < 5 || user_length > 20) {
            $("#error-user").html("Từ 5 đến 20 ký tự");
            $("#error-user").show();
            error_user = true;
        } else {
            $("#error-user").hide();
        }
    }
    //Hàm kiểm tra password có hợp lệ không
    function CheckPass() {
        var pass_length = $("#txt-pass").val().length;

        if (pass_length < 5) {
            $("#error-pass").html("Không ít hơn 5 ký tự");
            $("#error-pass").show();
            error_pass = true;
        } else {
            $("#error-pass").hide();
        }
    }
    //Hàm kiểm tra thông tin đăng nhập đã đúng và hợp lệ không
    function CheckLogin() {
        //Đặt cờ cho user và pass
        error_user = false;
        error_pass = false;
        //Lấy giá trị user và pass
        var user = $.trim($("#txt-user").val());
        var pass = $.trim($("#txt-pass").val());
        //Nếu user và pass đang để trống thì thông báo ngay
        if (user == "" && pass == "") {
            $("#error-user").html("Yêu cầu nhập tên đăng nhập");
            $("#error-user").show();
            $("#error-pass").html("Yêu cầu nhập mật khẩu");
            $("#error-pass").show();
            return;
        } else {
            if (user == "") {
                $("#error-user").html("Yêu cầu nhập tên đăng nhập");
                $("#error-user").show();
                return;
            }
            if (pass == "") {
                $("#error-pass").html("Yêu cầu nhập mật khẩu");
                $("#error-pass").show();
                return;
            }
        }

        //Check user và pass có hợp lệ theo yêu cầu hay không
        CheckUseName();
        CheckPass();

        //Nếu đã điền đầy đủ user và pass thì ta kiểm tra dữ liệu có đúng ko
        if (error_user == false && error_pass == false) {            

            if (user == "hoangphung" && pass == "0709") {
                $("#error-login").hide();
                //window.location.assign("demo.html");
            } else {
                if (user != "hoangphung") {
                    $("#error-user").html("Tên đăng nhập không chính xác");
                    $("#error-user").show();
                }
                if (pass != "0709") {
                    $("#error-pass").html("Mật khẩu không chính xác");
                    $("#error-pass").show();
                }
            }
        }
    }
});