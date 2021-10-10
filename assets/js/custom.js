
$('#searchType').change(function () {
    if ($(this).val() == 'acNumber') {
        $('.option-account').show();
        $('.option-id').hide();
    }
    if ($(this).val() == 'eID') {
        $('.option-account').hide();
        $('.option-id').show();
    }
});
$('#set-01').click(function () {
    alert("asdf");
    $('.show-set01').show();
    $('.show-set02').hide();
    $('.show-set03').hide();
});
$('#set-02').click(function () {
    $('.show-set02').show();
    $('.show-set01').hide();
    $('.show-set03').hide();
});
$('#set-03').click(function () {
    $('.show-set03').show();
    $('.show-set02').hide();
    $('.show-set01').hide();
});
$('#productOffer').change(function () {
    $('.offer-detail').show();
});
$('#msisdn-show').change(function () {
    $('.msisdn').show();
});

$('.package-selection-container .numbers-container ul li').click(function () {
    $(this).parent().find('li').removeClass('selected');
    $(this).toggleClass('selected');
    $('.sim-delivery').show();
});


$('#msg').click(function () {
    $('.warning').css('display', 'block');
});
$('.add-btn').click(function () {
    $('.cart').addClass('item-added');
    $('.empty').hide();
    $('.item-list').show();
});


$('#quantityAddon').change(function () {
    $('.addon-box').show();
});
$('.option-account .btn-search').click(function () {
    $('.num-selected-accounts').hide();
    $('.selected-accounts, .validation-container').show();
    $('.user-detail').hide();
    $('.scan-field').removeAttr('disabled');
    $('.scan-field').attr('value', '');
});
$('.option-id .btn-search').click(function () {
    $('.selected-accounts').hide();
    $('.num-selected-accounts, .validation-container').show();
    $('.user-detail').hide();
    $('.scan-field').removeAttr('disabled');
    $('.scan-field').attr('value', '');
});
$('label').click(function () {
    if ($('#simSerial').is(':checked')) {
        $('.sim-serial').show();
        $('.store-collection').hide();
        $('.delivery-address').hide();
    }
    if ($('#storeCollection').is(':checked')) {
        $('.sim-serial').hide();
        $('.store-collection').show();
        $('.delivery-address').hide();
    }
    if ($('#deliver').is(':checked')) {
        $('.sim-serial').hide();
        $('.store-collection').hide();
        $('.delivery-address').show();
    }

});

$('.party-find').click(function () {
    $('.party-grid').show();
    $('.useable').show();
});

$('#existing').click(function () {
    if ($(this).is(':checked')) {
        $('.btm-container').hide();
    }
});
$('#new').click(function () {
    if ($(this).is(':checked')) {
        $('.btm-container').show();
    }
});

$('#newAccount').click(function () {
    if ($(this).is(':checked')) {
        $('.type-search').hide();
        $('.option-id').hide();
        $('.selected-accounts').hide();
        $('.validation-container').hide();
        $('.management-option').hide();
        $('.option-id-new').show();
        $('.conditional-link').attr('href', 'CEP_automation_step_new_1.html');
        $('.conditional-btn').attr('onclick', 'location.href = "CEP_automation_step_new_1.html"');
        $('.user-detail').hide();
        $('.scan-field').removeAttr('disabled');
        $('.scan-field').attr('value', '');
        $('.option-account').hide();

    }
});
$('#migration').click(function () {
    if ($(this).is(':checked')) {
        $('.type-search').show();
        $('.option-id').show();
        $('.option-id-new').hide();
        $('.management-option').hide();
        $('.user-detail').hide();
        $('.scan-field').removeAttr('disabled');
        $('.scan-field').attr('value', '');
        $('.option-id-new').hide();
    }
});
$('.scan-btn').click(function () {
    $('.scan-field').attr('disabled', 'disabled');
    $('.scan-field').attr('value', '784-2013-0259731-1');
    $('.user-detail, .validation-container').show();
    $('.selected-accounts, .num-selected-accounts').hide();
});

$('#accountManagement, #usageLimit').click(function () {
    if ($(this).is(':checked')) {
        $('.management-option').show();
        $('.conditional-btn').attr('onclick', 'location.href = "CEP_automation_limit.html"');
        $('.user-detail').hide();
        $('.scan-field').removeAttr('disabled');
        $('.scan-field').attr('value', '');
        $('.num-selected-accounts, .selected-accounts').hide();

    }
});
$('#capLimit').click(function () {
    if ($(this).is(':checked')) {
        $('.conditional-btn').attr('onclick', 'location.href = "CEP_automation_cap.html"')
    }
});
$('#addOn').click(function () {
    if ($(this).is(':checked')) {
        $('.conditional-btn').attr('onclick', 'location.href = "CEP_automation_addon.html"')
    }
});
$('#linkMobileHub').click(function () {
    if ($(this).is(':checked')) {
        $('.conditional-btn').attr('onclick', 'location.href = "CEP_automation_link-mh.html"');
        $('.corporate-accounts').addClass('useable');
    }
});



$('ul.account-select li:nth-child(1)').click(function () {
    $('.selected-accounts ul li:nth-child(1)').toggleClass('show');
});
$('ul.account-select li:nth-child(2)').click(function () {
    $('.selected-accounts ul li:nth-child(2)').toggleClass('show');
});
$('ul.account-select li:nth-child(3)').click(function () {
    $('.selected-accounts ul li:nth-child(3)').toggleClass('show');
});
$('ul.account-select li:nth-child(4)').click(function () {
    $('.selected-accounts ul li:nth-child(4)').toggleClass('show');
});
$('ul.account-select li:nth-child(5)').click(function () {
    $('.selected-accounts ul li:nth-child(5)').toggleClass('show');
});


$('.selected-accounts ul li:nth-child(1) .remove').click(function () {
    $(this).parent().removeClass('show');
    $('ul.account-select li:nth-child(1)').removeClass('selected')
});
$('.selected-accounts ul li:nth-child(2) .remove').click(function () {
    $(this).parent().removeClass('show');
    $('ul.account-select li:nth-child(2)').removeClass('selected')
});
$('.selected-accounts ul li:nth-child(3) .remove').click(function () {
    $(this).parent().removeClass('show');
    $('ul.account-select li:nth-child(3)').removeClass('selected')
});
$('.selected-accounts ul li:nth-child(4) .remove').click(function () {
    $(this).parent().removeClass('show');
    $('ul.account-select li:nth-child(4)').removeClass('selected')
});
$('.selected-accounts ul li:nth-child(5) .remove').click(function () {
    $(this).parent().removeClass('show');
    $('ul.account-select li:nth-child(5)').removeClass('selected')
});

$("#option01").on("click", function (e) {
    $('.document02').css('display', 'none');
    $('.document01').css('display', 'none');
});
$("#option02").on("click", function (e) {
    $('.document02').css('display', 'none');
    $('.document01').css('display', 'inline-block');
});
$("#option03").on("click", function (e) {
    $('.document01').css('display', 'none');
    $('.document02').css('display', 'inline-block');
});
$(function () {
    $('input[type=file]').change(function () {
        var t = $(this).val();
        var labelText = 'File : ' + t.substr(12, t.length);
        $(this).prev('label').text(labelText);
    })
    $('#adminContact').change(function () {
        $('.admin-contact').show();
    });
    $('#techContact').change(function () {
        $('.tech-contact').show();
    });
    $('#bibVersion').change(function () {
        $('#v02').show();
    });

});

$('.version-details .panel-title').click(function () {
    $(this).parent().toggleClass('selected')
});

// $('#oSummary').hover(function(e) {
//     $(this).parent().addClass('open');
// });
$("a.removeBtn").on("click", function () {
    $(this).closest("tr").hide();
});

$(".navbar-right .dropdown").on("click", function () {
    $(".navbar-right .dropdown").addClass("show-menu");
});

$(document).on('click', function (event) {
    if (!$(event.target).closest('.navbar-right .dropdown').length) {
        $(".navbar-right .dropdown").removeClass("show-menu");
    }
});

$('.tile-card').click(function () {
    $(this).closest('.bg-cards').find('.tile-card').removeClass('highlight');
    $(this).toggleClass('highlight');
});
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

// on Radio buttons click show hide divs
document.getElementById('cartepackage').style.display = 'block';
function show1() {
    document.getElementById('bundelpackage').style.display = 'none';
    document.getElementById('cartepackage').style.display = 'block';
}
function show2() {
    document.getElementById('bundelpackage').style.display = 'block';
    document.getElementById('cartepackage').style.display = 'none';
}