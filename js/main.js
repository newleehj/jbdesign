$(function(){
    GNB();
    MTREE();
    GUIDBOX();
    SLIDE();
});
function GNB(){
    $(".gnb-area").mouseover(function(){
        $('.bgn-sub').stop().show();
        $('.headerline').show();
 4  });
    $(".gnb-area").mouseout(function(){
        $('.bgn-sub').stop().hide();
        $('.headerline').hide();
 4  });    
}
function MTREE(){
    $("#hamburger").click(function(){
        $("#mtree_wrap").show();
    });
    $("#closeBtn").click(function(){
        $("#mtree_wrap").hide();
    });
}
function GUIDBOX(){
    $("#da-thumbs2 li").mouseover(function(){
          $(this).find('.cover').stop().fadeIn();
    });
    $("#da-thumbs2 li").mouseout(function(){
        $(this).find('.cover').stop().fadeOut();
  });
}
function SLIDE(){
    $("#da-thumbs04 li").mouseover(function(){
        $(this).find('.cover').stop().fadeIn();
  });
  $("#da-thumbs04 li").mouseout(function(){
      $(this).find('.cover').stop().fadeOut();
});
}



