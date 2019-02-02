$('.main__more').on('click',function(e){
  $('ul.main__menu').toggle('toggle')
})
let counter = 0;
$('.main__switcher--container').on('click',function(){
  counter++;
  if(counter%2===1){
    $('.main__switcher--cycle').addClass('moving');

  }
  if(counter%2===0){
    $('.main__switcher--cycle').removeClass('moving')
  }
  
})