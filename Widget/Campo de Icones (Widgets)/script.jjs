

$(document).ready(function () {

    copiaEstruturaIcones = $(".theme-liquid-icons ul").clone(true, true);

    $("#txt_acessos_icone").on("click", function () {
        $(this).parents(".icon-list-wrapper").find(".opcoesIcon").html(copiaEstruturaIcones);
        $(".theme-liquid-icons li").show();

        $(".theme-liquid-icons li").on("click", function () {
            $(".theme-liquid-icons li span").css({ "background": "white", "color": "#595959" });
            $(this).find("span").css({ "background": "black", "color": "white" });
            let icone = $(this).parents(".theme-liquid-icons").find(".form-control-feedback");

            if (icone.hasClass("flaticon-search")) {
                icone.removeClass("flaticon-search");
            }
            else {
                icone.removeClass($(this).parents(".theme-liquid-icons").find("input").val());
            }

            icone.addClass($(this).attr("data-icon-class"));

            $(this).parents(".theme-liquid-icons").find("input").val($(this).attr("data-icon-class"));
            $(this).parents("ul").remove();
        });
    });

    $("#txt_acessos_icone").on("keyup", function () {
        $(".theme-liquid-icons li").hide();
        console.log($(this).val());
        if ($(this).val().trim() != "") {
            $(`.theme-liquid-icons li[data-icon-class*="${$(this).val()}"]`).show();
        }
        else {
            $(".theme-liquid-icons li").show();
        }
    });

    $(".theme-liquid-icons li").on("click", function () {
        $(".theme-liquid-icons li span").css({ "background": "white", "color": "#595959" });
        $(this).find("span").css({ "background": "black", "color": "white" });
    });

});
