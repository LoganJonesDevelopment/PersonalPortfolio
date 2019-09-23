$(document).ready(function() {

    // Chef Title Hover
    $("#chefsCornerTitle").mouseover(function() {
        // Chef Div Opacity Changes
        $(".chefsCornerDiv").css("opacity", ".25")
        $("#chefsCornerTitle").css("opacity", "1")


    });

    // Chef Title Hover End
    $("#chefsCornerTitle").mouseleave(function() {
        // Chef Div Opacity Revert
        $(".chefsCornerDiv").css("opacity", "1")
        $("#chefsCornerTitle").css("opacity", ".6")

    });




    // Budget Div Title Hover
    $("#budgetManagementTitle").mouseover(function() {
        // Budget Div Opacity Changes
        $(".budgetManagementDiv").css("opacity", ".5")
        $("#budgetManagementTitle").css("opacity", "1")

    });

    // Budget Div Title Hover End
    $("#budgetManagementTitle").mouseleave(function() {

        // Budget Div Opacity Revert
        $(".budgetManagementDiv").css("opacity", "1")
        $("#budgetManagementTitle").css("opacity", ".6")
    });




});