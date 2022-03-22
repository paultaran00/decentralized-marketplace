$(document).ready(()=>{ 
  let darkmodeCookie = Cookies.get('darkmode');

  if(darkmodeCookie == 'true'){
    console.log(darkmodeCookie)
    $('#forDarkMode').css('display', 'none');
    $('#forLightMode').css('display', 'block');

    $('nav').removeClass('navbar-light bg-light');
    $('nav').addClass('navbar-dark bg-dark');

    $('.btn-light').addClass('btn-dark');
    $('.btn-light').removeClass('btn-light');

    $('.card').css({'background': '#2a2a2a', 'border': '1px solid #444'});

    $('.dropdown-menu').css('background', 'black');
    $('.dropdown-item').css('color', '#8a8a8a');

    $('footer').css({'color': '#6c757d', 'background':'#343a40'});

    $('body').css({'background': '#1f1f1f', 'color': 'white'});

    $('.form-control').css('color', 'white');

    $('.slider-title').css('color', 'white');

    $('.social-tag').css('color', 'white');

    $('.modal-content').css('background', '#343a40');

    $('.anchor').css('color', 'white');

    $('.spinner-grow').removeClass('text-light');
    $('.spinner-grow').addClass('text-dark');

    $('#profile').css('background', '#525a61');

    $('#Blogo').css('filter', 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(109%) contrast(112%)');

    $('.description').removeClass('bg-light');
    $('.description').addClass('bg-dark');

    $('.transactions-table').addClass('bg-dark');
    $('.transactions-table').addClass('table-dark');

    $('.transactions-table').removeClass('bg-light');
    $('.transactions-table').removeClass('table-light');

    console.log('darkmode cookie');

  } else if (darkmodeCookie == 'false') {
    $('#forDarkMode').css('display', 'block');
    $('#forLightMode').css('display', 'none');

    $('nav').removeClass('navbar-dark bg-dark');
    $('nav').addClass('navbar-light bg-light');

    $('.btn-dark').addClass('btn-light');
    $('.btn-dark').removeClass('btn-dark');

    $('.card').css({'background': 'white', 'border': '1px solid #ddd'});

    $('.dropdown-menu').css('background', 'white');
    $('.dropdown-item').css('color', 'black');

    $('footer').css({'color': '#444', 'background': '#F8F8F8'});

    $('body').css({'background': 'white', 'color': 'black'});

    $('.form-control').css('color', 'black');

    $('.slider-title').css('color', 'black');

    $('.social-tag').css('color', 'black');

    $('.modal-content').css('background', 'white');

    $('.anchor').css('color', 'black');

    $('.spinner-grow').removeClass('text-dark');
    $('.spinner-grow').addClass('text-light');

    $('#profile').css('background', '#e3e6ea');

    $('#Blogo').css('filter', 'invert(0%) sepia(9%) saturate(6%) hue-rotate(214deg) brightness(95%) contrast(101%)');

    $('.description').removeClass('bg-dark');
    $('.description').addClass('bg-light');

    $('.transactions-table').removeClass('bg-dark');
    $('.transactions-table').removeClass('table-dark');

    $('.transactions-table').addClass('bg-light');
    $('.transactions-table').addClass('table-light');

    console.log('lightmode cookie');
  }
})

  $('#forDarkMode').click(() => {
    Cookies.set('darkmode', 'true');

    $('#forDarkMode').css('display', 'none');
    $('#forLightMode').css('display', 'block');

    $('nav').removeClass('navbar-light bg-light');
    $('nav').addClass('navbar-dark bg-dark');

    $('.btn-light').addClass('btn-dark');
    $('.btn-light').removeClass('btn-light');

    $('#Blogo').css('filter', 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(70deg) brightness(109%) contrast(112%)');

    $('.card').css({'background': '#2a2a2a', 'border': '1px solid #444'});

    $('.dropdown-menu').css('background', 'black');
    $('.dropdown-item').css('color', '#8a8a8a');

    $('footer').css({'color': '#6c757d', 'background':'#343a40'});

    $('body').css({'background': '#1f1f1f', 'color': 'white'});

    $('.form-control').css('color', 'white');

    $('.slider-title').css('color', 'white');

    $('.social-tag').css('color', 'white');

    $('.modal-content').css('background', '#343a40');

    $('.anchor').css('color', 'white');

    $('.spinner-grow').removeClass('text-light');
    $('.spinner-grow').addClass('text-dark');

    $('#profile').css('background', '#525a61');

    $('.description').removeClass('bg-light');
    $('.description').addClass('bg-dark');

    $('.transactions-table').addClass('bg-dark');
    $('.transactions-table').addClass('table-dark');

    $('.transactions-table').removeClass('bg-light');
    $('.transactions-table').removeClass('table-light');

    $('#ChartLight').hide();
    $('#ChartDark').show();

    $('.form-control').keydown(()=>{
      $('.form-control').css('color', 'white');
    });
  });

  $('#forLightMode').click(() => {
    Cookies.set('darkmode', 'false');

    $('#forDarkMode').css('display', 'block');
    $('#forLightMode').css('display', 'none');

    $('nav').removeClass('navbar-dark bg-dark');
    $('nav').addClass('navbar-light bg-light');

    $('.btn-dark').addClass('btn-light');
    $('.btn-dark').removeClass('btn-dark');

    $('#Blogo').css('filter', 'invert(0%) sepia(9%) saturate(6%) hue-rotate(214deg) brightness(95%) contrast(101%)');

    $('.card').css({'background': 'white', 'border': '1px solid #ddd'});

    $('.dropdown-menu').css('background', 'white');
    $('.dropdown-item').css('color', 'black');

    $('footer').css({'color': '#444', 'background': '#F8F8F8'});

    $('body').css({'background': 'white', 'color': 'black'});

    $('.form-control').css('color', 'black');

    $('.slider-title').css('color', 'black');

    $('.social-tag').css('color', 'black');

    $('.modal-content').css('background', 'white');

    $('.anchor').css('color', 'black');

    $('.spinner-grow').removeClass('text-dark');
    $('.spinner-grow').addClass('text-light');

    $('#profile').css('background', '#e3e6ea');

    $('.description').removeClass('bg-dark');
    $('.description').addClass('bg-light');

    $('.transactions-table').removeClass('bg-dark');
    $('.transactions-table').removeClass('table-dark');

    $('.transactions-table').addClass('bg-light');
    $('.transactions-table').addClass('table-light');

    $('#ChartDark').hide();
    $('#ChartLight').show();
    
    $('.form-control').keydown(()=>{
      $('.form-control').css('color', 'black');
    });
  });
