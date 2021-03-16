var $ = function (id) 
{
    return document.getElementById(id);
};

var calculate_click = function ()

{
    var floatHwPts, floatMidPts, floatFinPts, floatTotalPts, intGradeOption;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat($("mid_pts").value);
    floatFinPts = parseFloat($("fin_pts").value);
    floatTotalPts = parseFloat(floatHwPts+ floatMidPts+ floatFinPts);
    intGradeOption = parseInt($("grade_option").value);
    
if (intGradeOption===1)

{
    if(floatTotalPts >= 80)
    {
        stringMessage = "Great! You passed!";
    }
    else
    {
        stringMessage = "Sorry, you failed.";
    }
}

else

if (intGradeOption===2)

{
    if (floatTotalPts >= 90)
    
    {
        stringMessage = "Nice! A!";
      
    }
    else
    {
        if (floatTotalPts >= 80 && floatTotalPts < 90)
        
        {
            stringMessage = "Not bad, B!";
        }
        else
        {
             if (floatTotalPts >= 70 && floatTotalPts < 80)
             
             {
                stringMessage = "C, it's OK.";
             }
            else
            {
                if (floatTotalPts >= 60 && floatTotalPts < 70)
                
                {
                    stringMessage = "You got D.";
                }
                else
                {
                 stringMessage = "F, you failed.";
                }
            }
        }
    } 
}

$("final_grade").value= stringMessage;

};

window.onload = function () 
{
    $("final_grade").value = ""; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
};
