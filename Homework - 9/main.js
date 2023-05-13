                                              // 9. jQuery



// 1. - Done ------------------------------------------------------------------------------------------------

// $(document).ready(function() {
//     $('h2.head').css('background-color', 'green').find('.inner').css('font-size', '35px');
// });



// 2. - Done ------------------------------------------------------------------------------------------------


// На HTML-сторінці є посилання <a>. У випадку коли, href починається на https://, потрібно додати посиланню атрибут target="_blank".

// $(document).ready(function () {
//     $('a[href^="https://"]').attr("target", "_blank");
// });


// 3. - Done ----------------------------------------------------------------------------------------


// $(document).ready(function  ()  {

//     $('h3').each(function () {
//      let div = $(this).next('div');
//      if (div.length) {
//         $(this).before(div);
//     }
//     })
// }); 


// 4. - Done ----------------------------------------------------------------------------------------

$(document).ready(function () {
    $('input[type="checkbox"]').on('change', function () {
      let checkedCount = $('input[type="checkbox"]:checked').length;
      if (checkedCount === 3) {
        $('input[type="checkbox"]').not(':checked').attr('disabled', true);
      } else if (checkedCount < 3) {
        $('input[type="checkbox"]').attr('disabled', false);
      }
    });
  });