$(document).ready(function(){
	$('#error').click(function(){
		$.NotificationService.showErrorNotification({
			title: "Titel der Notification",
			message: "Hier steht der Text der in der Notification angezeigt wird.", 
		});
	});

	$('#warn').click(function(){
		$.NotificationService.showWarningNotification({
			title: "Titel der Notification",
			message: "Hier steht der Text der in der Notification angezeigt wird.", 
		});
	});

	$('#notice').click(function(){
		$.NotificationService.showInfoNotification({
			title: "Titel der Notification",
			message: "Hier steht der Text der in der Notification angezeigt wird.", 
		});
	});

	$('#top').click(function(){
		$.NotificationService.showTopNotification({
			title: "Titel der top Notification",
			message: "Text der top Notification",
			type: "top",
			id: "123"
		});
	});
});