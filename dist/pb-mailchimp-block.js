jQuery(function($) {
		$(document).ready(function(){
				$('.pb-mc-submit').on('click',function(){

						// var $parent = $(this).parent();

						// var $this = $(this);

						// $this.attr('disabled','disabled');

						var form_name = $('.pb-mc-name').val();

						var form_email = $('.pb-mc-email').val();

						$.ajax({
								url: pb_mailchimp_block.ajaxurl,
								method: 'POST',
								crossDomain: true,
								dataType: 'json',
								data: {
									action:'pb_mailchimp_block_submit_form',
									name:form_name,
									email:form_email
								}
							}).success(function(response) {
								console.log(response);
								let data = JSON.parse(response.data);
								if(data.status == '400'){
									$('p#newsletter_message').empty();
									$('p#newsletter_message').append(data.detail);
									$('p#newsletter_message').hide(3000);
								} else if( data.status == "subscribed") {
									$('p#newsletter_message').empty();
									$('p#newsletter_message').append("User subscribed successfully");
									$('p#newsletter_message').hide(3000);
								}
							}).error( function( response ) {

							});
				});
		});
});
