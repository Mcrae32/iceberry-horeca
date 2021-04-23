window.onload = function() {
	var sityField = document.getElementById("sityField");
	city = $("#allContacts").find('.active').find('a').html();

	if (sityField){
		sityField.innerHTML = '<div class="ugBottom"></div>' + city;
	}

	$('.regionField').slideUp('normal');

	$('.buttonSelect').click(function(){
		if ($('.regionField').is(':hidden')){
			$('.regionField').slideDown('normal');
			$('.ug').css('background', '#b7631b url("images/about/icons.png") no-repeat scroll -229px 6px');
		} else {
			$('.regionField').slideUp('normal');
			$('.ug').css('background', '#b7631b url("images/about/icons.png") no-repeat scroll -161px 6px');
		}
	});

	$('#allContacts').click(function(event){
		var target = $(event.target).html();
		$('#sityField').html(target + '<div class="ugBottom"></div>');
		$('.regionField').slideUp('normal');
		$('.ug').css('background', '#b7631b url("images/about/icons.png") no-repeat scroll -161px 6px');	
	});

	var OldOpt = $('#allContacts div.active a').attr('class');
    OldOpt = '#' + OldOpt;
    /*alert (OldOpt);*/
     
    $('#allContacts a').click(function () {
        $(OldOpt).css('display','none');
        $("#allContacts div").removeClass('active');
        var NewOpt = this.className;
        $( this ).parent().addClass('active');
        NewOpt = '#' + NewOpt;
        /*alert (NewOpt);*/
        $(NewOpt).css('display','block');
        OldOpt = NewOpt;
	});
	
	var projWrap = document.getElementById("sidebar_projects");
	console.log(projWrap);
};
