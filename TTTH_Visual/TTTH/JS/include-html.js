$(document).ready(function () {
  
    $.get('header-menu.html', function (res) {
        $('#header-menu').html(res);
        //Sự kiện active menu
        var path = document.location.pathname;
        var activeMenuId = '';
        if (path.lastIndexOf("index.html") >= 0) {
            activeMenuId = '#index';
        }
        else if (path.lastIndexOf("lichkhaigiang.html") >= 0)
        {
            activeMenuId = "#lich-khai-giang";
        }   
        else if (path.lastIndexOf("tintuc.html") >= 0) {
            activeMenuId = '#tin-tuc';
        }
        else if (path.lastIndexOf("thongbao.html") >= 0) {
            activeMenuId = "#thong-bao";
        }   
        else if (path.lastIndexOf("lienhe.html") >= 0)
        {
            activeMenuId = "#lien-he";
        }    
        else if (path.lastIndexOf("dangkykhoahoc.html") >= 0)
        {
            activeMenuId = "#dang-ky-khoa-hoc";
        }    

        $(activeMenuId).css('background-color', '#56A1B0');
    });

    $.get('footer.html', function (res) {
        $('#footer').html(res); 
    });
});
