$(function(){
    var data = { partner_id:,timestamp:,access_token:, merchant_id:, sign:}
    var sJson = JSON.stringify
    ({
        sCustId: cid,
        sActivityId: activitVal
    });
    $.ajax({
        url:"https://open.shopee.com/documents?module=87&type=2&id=62&version=2",
        method:"GET",
        dataType:"json",
        head:,
        data: data,
        success: function (response) {
            console.log(response);
        },
        error: function (thrownError) {
            console.log(thrownError);
        }
    });
});

//寄出確認信