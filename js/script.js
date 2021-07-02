$('.portfolio__filter').click(function (event) {
   var i=$(this).data('filter');
   console.log(i);
   if (i==1) {
      $('.portfolio__card').show();
   }else{
      $('.portfolio__card').hide();
      $('.portfolio__card.f-'+i).show();
   }
   $('.portfolio__filter').removeClass('active');
   $(this).addClass('active');
   return false;
})