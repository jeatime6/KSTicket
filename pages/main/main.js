Page({
    data: {
        Departure: '昆山',
        Destination: '上海'
    },
    search: function () {
        var that = this;
        this.setData({
            Departure: '上海',
            Destination: '昆山'
        });
        setTimeout(function () {
            that.setData({
                Departure: '昆山',
                Destination: '上海'
            });
        }, 3000);
    },
    selectCity: function (event) {
        console.log(event);
        wx.navigateTo({
            url: '/pages/common/selectcity/selectcity',
            success: function (event) {
                console.log('success');
                console.log(event);
            },
            fail: function (event) {
                console.log('fail');
                console.log(event);
            },
            complete: function (event) {
                console.log('complete');
                console.log(event);
            },
        });
    }
});