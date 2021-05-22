$(function() {
	$("#contact-form").validator();
	$("#contact-form").on("submit", function(a) {
		if (!a.isDefaultPrevented()) {
			var b = "form/contact.php";
			$.ajax({
				type: "POST",
				url: b,
				data: $(this).serialize(),
				success: function(d) {
					var e = "alert-" + d.type;
					var f = d.message;
					var c = '<div class="alert ' + e +
						' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
						f + "</div>";
					if (e && f) {
						$("#contact-form").find(".messages").html(c);
						$("#contact-form")[0].reset()
					}
				}
			});
			return false
		}
	})
});
