// jquery sortable rows
$(function() {
	// brand 1
	$("#sortable1").sortable();
	$("#sortable1").disableSelection();
	$("#sortable11").sortable();
	$("#sortable11").disableSelection();
	$("#sortable12").sortable();
	$("#sortable12").disableSelection();
	$("#sortable111").sortable();
	$("#sortable111").disableSelection();
	$("#sortable112").sortable();
	$("#sortable112").disableSelection();
	$("#sortable121").sortable();
	$("#sortable121").disableSelection();
	$("#sortable122").sortable();
	$("#sortable122").disableSelection();
	$("#sortable123").sortable();
	$("#sortable123").disableSelection();
	// brand 2
	$("#sortable2").sortable();
	$("#sortable2").disableSelection();
	$("#sortable21").sortable();
	$("#sortable21").disableSelection();
	$("#sortable211").sortable();
	$("#sortable211").disableSelection();
	$("#sortable212").sortable();
	$("#sortable212").disableSelection();

	// resize columns
	resizeColumns();
	$(window).resize(function() {
		location.reload();
	});

	// get header width
	function resizeColumns() {
		$('.head-mc').width($('.head-mc').width());
		$('.mc').width($('.head-mc').width());
		$('.head-sc').width($('.head-sc').width());
		$('.sc').width($('.head-sc').width());
		$('.head-pn').width($('.head-pn').width());
		$('.pn').width($('.head-pn').width());
	}
});